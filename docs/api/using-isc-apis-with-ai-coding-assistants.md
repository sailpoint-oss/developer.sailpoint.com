---
id: using-isc-apis-with-ai-coding-assistants
title: Using ISC APIs with AI Coding Assistants
pagination_label: Using ISC APIs with AI Coding Assistants
sidebar_label: AI Coding Assistants
sidebar_position: 9
sidebar_class_name: aiCodingAssistants
keywords: ['api', 'ai', 'assistant', 'openapi', 'specification']
description: Point an AI coding assistant at the right ISC artifacts, and verify what it generates.
slug: /api/using-isc-apis-with-ai-coding-assistants
tags: ['AI Coding Assistants']
---

## Overview

Many developers now build ISC integrations with an AI coding assistant open beside them. An assistant works from two things: what it learned during training, and what it can fetch while it works. Both need care. Training data ages, so an assistant will confidently produce endpoint paths that were correct a year ago. And an automated fetch of a documentation page does not always return what you see in a browser, so an assistant that reads this site may come away with less than you expect.

This guide covers which ISC artifacts to point an assistant at, how to choose a version, where the required scopes actually live, how the token endpoint works even though it is not an operation in any specification, and how to check a generated request against the specification before you run it.

:::note

This guide is about generating ISC API code. If you want an AI application to interact with a tenant conversationally, use the [SailPoint MCP Server](../extensibility/model-context-protocol/index.md) instead, which exposes ISC capabilities as tools over a standard protocol.

:::

## Give the assistant the specification, not the reference page

The API reference pages on this site are built for people. They render an operation's parameters, schemas, and authorization details into interactive components that a browser assembles. An automated fetcher that reads the returned HTML gets the method, the path, the summary, and the response codes — but not the parameters, not the request or response schemas, and not the **Authorization** block that names the required scopes.

The legacy reference pages behave differently again. A URL such as `/docs/api/v3/list-access-profiles` returns a short redirect to a single-page Redoc rendering of the whole V3 API, addressed by URL fragment. A fetcher cannot resolve a fragment, so it either gets the redirect stub or the entire API in one response.

| Artifact | What an automated fetch returns |
| --- | --- |
| Guides like [Authentication](./authentication.md) and [Authorization](./authorization.md) | The full page. These are good context. |
| An API reference page | Method, path, summary, and response codes. No parameters, schemas, or scopes. |
| A legacy V3 or Beta reference page | A redirect to a fragment of a single-page rendering of the whole API. |
| An OpenAPI specification file | Everything, in a format the assistant already understands. |

Point the assistant at the specifications. They live in [sailpoint-oss/api-specs](https://github.com/sailpoint-oss/api-specs) under the MIT license, and they are the same files this site is generated from.

| File | Contents |
| --- | --- |
| `idn/sailpoint-api.yaml` | The current ISC API — 597 paths, 880 operations, complete in one file. |
| `idn/sailpoint-api.v3.yaml` | Legacy V3 — a thin root that references the operation files under `idn/v3/paths/`. |
| `idn/sailpoint-api.beta.yaml` | Legacy Beta — a thin root that references the operation files under `idn/beta/paths/`. |

The current root is self-contained, and an assistant can read it directly. The two legacy roots are not: they hold the paths and defer each operation to a separate file, so an assistant reading only the root sees which paths exist and nothing about them. For a single self-contained file of any version, take a bundle from the `dereferenced/` folder, or download the latest release asset:

```bash
curl -L -o sailpoint-api.yaml \
  https://github.com/sailpoint-oss/api-specs/releases/latest/download/deref-sailpoint-api.yaml
```

:::note

A bundled file still contains internal references such as `$ref: '#/components/parameters/limit'` — there are 7,707 of them in the current specification. They resolve within the same document, but a tool that does not follow them will silently under-report an operation's parameters. The example script in [Verify a generated request before you run it](#verify-a-generated-request-before-you-run-it) resolves them.

:::

## Choosing a version

Each ISC service is versioned independently, and the version appears in the path rather than in a shared prefix. Listing access profiles is `GET /access-profiles/v1`. See [API Versioning Strategy](./api-versioning-strategy.md) for how and when a service's major version changes.

### Experimental operations require a header

An operation that is still experimental declares a required header parameter, `X-SailPoint-Experimental`. In the current specification, 207 of the 880 operations declare it. It is a property of the individual operation, not of a version, so check the operation you are about to call rather than assuming. This lists every one of them:

```bash
python3 -c "
import yaml
spec = yaml.safe_load(open('sailpoint-api.yaml'))
for path, item in spec['paths'].items():
    for method, op in item.items():
        if isinstance(op, dict) and any(
                p.get('name') == 'X-SailPoint-Experimental'
                for p in op.get('parameters', [])):
            print(op['operationId'])
"
```

Send it as `X-SailPoint-Experimental: true`. Calling an experimental operation without it returns an error saying the header is required. Once the operation becomes public the header is no longer necessary, and sending it anyway causes no harm.

### If your assistant produced a /v3/ or /beta/ path

That is a good sign the answer came from training data rather than from the current specification. V3 and Beta are legacy. They remain operational, and they are supported until Q2 of 2028, but they are end-of-life in Q1 of 2029. Prefer the current API for new work, and read the [API Versioning Migration](./api-versioning-migration.md) guide if you are moving an existing integration.

Two details are worth knowing, because assistants get both wrong:

- **Neither legacy version is "the experimental one."** Of the 358 V3 operations, none declare `X-SailPoint-Experimental`; of the 559 Beta operations, one does. The header belongs to experimental operations in the current API.
- **Operation IDs usually carry over with a version suffix.** `listAccessProfiles` in V3 and Beta is `listAccessProfilesV1` in the current specification. 349 of the 358 V3 operation IDs and 519 of the 559 Beta operation IDs have a matching `V1` or `V2` operation, which makes the operation ID a more reliable way to find an operation's replacement than the path is.

## Finding the scopes an operation needs

Required scopes are in the specification, on the operation, and they are not in the rendered reference HTML. Each operation carries a `security` block:

```yaml
get:
  operationId: listAccessProfilesV1
  security:
    - userAuth:
        - idn:access-profile:read
  x-sailpoint-userLevels:
    - ORG_ADMIN
    - ROLE_ADMIN
    - ROLE_SUBADMIN
    - SOURCE_ADMIN
    - SOURCE_SUBADMIN
```

A token needs one of the listed scopes, and the identity behind it needs one of the listed user levels. Prefer the least privileged scope that works — scopes ending in `read` cannot modify data.

A small number of operations, 16 in the current specification, declare no `security` block of their own and inherit the document default of `sp:scopes:all`. If an assistant tells you an operation requires `sp:scopes:all`, confirm that the operation really has no scope of its own before you widen a token. [Authorization](./authorization.md) explains scopes, user levels, and how the two interact.

## The token endpoint is not an operation in the specification

`/oauth/token` does not appear under `paths` in any ISC specification, so an assistant asked to "find the token endpoint in the spec" will report that it does not exist, and may invent a request shape to fill the gap.

It is in the file, in `components.securitySchemes`, as the token URL of the OAuth flows:

```yaml
components:
  securitySchemes:
    userAuth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://example-tenant.api.identitynow.com/oauth/token
          scopes:
            sp:scopes:default: default scope
            sp:scopes:all: access to all scopes
```

Two things follow. The host is a placeholder — replace `example-tenant` with your own tenant. And the request shape is not described anywhere in the specification, because the endpoint is not modeled as an operation. The client credentials flow takes form-encoded values, not JSON:

```bash
curl --location 'https://{tenant}.api.identitynow.com/oauth/token' \
  --form 'grant_type="client_credentials"' \
  --form 'client_id="{clientId}"' \
  --form 'client_secret="{clientSecret}"'
```

The response contains a JWT `access_token` to send as `Authorization: Bearer {access_token}` on subsequent requests. [Authentication](./authentication.md) covers this flow and the authorization code and refresh token flows in full.

:::caution

Personal access token secrets and client secrets are credentials. Do not paste them into a prompt, a chat window, or a file an assistant reads. Keep them in environment variables and refer to the variable by name.

:::

## Verify a generated request before you run it

The most common failure is a path that is nearly right. The base URL prefix lives in the specification's `servers` entry, not in the path, so the same operation is written differently depending on which file you read:

| Specification | `servers[].url` | Path in the file | Path you request |
| --- | --- | --- | --- |
| `sailpoint-api.yaml` | `https://{tenant}.api.identitynow.com` | `/access-profiles/v1` | `/access-profiles/v1` |
| `sailpoint-api.v3.yaml` | `https://{tenant}.api.identitynow.com/v3` | `/access-profiles` | `/v3/access-profiles` |
| `sailpoint-api.beta.yaml` | `https://{tenant}.api.identitynow.com/beta` | `/access-profiles` | `/beta/access-profiles` |

An assistant that reads a path out of the V3 file without reading `servers` produces `/access-profiles`, which is one segment short of the address the API answers on. The generated code looks right, and the mistake is a single missing prefix.

Resolving the operation ID against the specification answers the path, the scopes, and the experimental question at once:

```python
import sys, yaml

spec = yaml.safe_load(open(sys.argv[1]))
target = sys.argv[2]
base = spec['servers'][0]['url']


def deref(node):
    # The bundled spec still contains internal $refs. Resolve them, or shared
    # parameters such as limit, offset and count go missing from the output.
    while isinstance(node, dict) and '$ref' in node:
        cursor = spec
        for part in node['$ref'].lstrip('#/').split('/'):
            cursor = cursor[part]
        node = cursor
    return node


for path, item in spec['paths'].items():
    for method, operation in item.items():
        if not isinstance(operation, dict):
            continue
        if operation.get('operationId') != target:
            continue
        params = [deref(p) for p in operation.get('parameters', [])]
        rules = operation.get('security', spec.get('security', []))
        scopes = [s for rule in rules for names in rule.values() for s in names]
        levels = operation.get('x-sailpoint-userLevels', [])
        query = [p['name'] for p in params if p.get('in') == 'query']
        print(f'{method.upper()} {base}{path}')
        print(f'  scopes:       {", ".join(scopes)}')
        print(f'  user levels:  {", ".join(levels)}')
        print(f'  experimental: {any(p.get("name") == "X-SailPoint-Experimental" for p in params)}')
        print(f'  query params: {", ".join(query)}')
```

Running it against the current specification:

```text
$ python3 check_operation.py sailpoint-api.yaml listAccessProfilesV1
GET https://{tenant}.api.identitynow.com/access-profiles/v1
  scopes:       idn:access-profile:read
  user levels:  ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN
  experimental: False
  query params: for-subadmin, limit, offset, count, filters, sorters, for-segment-ids, include-unsegmented
```

If the operation ID your assistant used does not appear in the file, that is the signal to check the version before you check anything else.

:::tip

Ask the assistant to cite the operation ID and the specification file it used for each endpoint it generates. A generated call you can trace back to a `security` block is one you can also fix when a scope is wrong, and an endpoint it cannot cite is one worth checking by hand.

:::

## Discuss

The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions.

To learn more about the ISC APIs and discuss them with SailPoint Developer Community members, go to the [SailPoint Developer Community Forum](https://developer.sailpoint.com/discuss/tags/c/isc/6/apis).
