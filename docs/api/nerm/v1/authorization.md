# Authorization

## Overview

SailPoint Human Fabric (SHF) API tokens support scopes. Scopes grant certain kinds of access to certain resource types in Non-Employee Risk Management, so you can give each integration only the access it needs instead of full administrator access.

When Non-Employee Risk Management receives a request authenticated with an SHF API token, it checks the scopes on that token against the resource type being requested and the kind of access the request needs. If none of the token's scopes grant that access, Non-Employee Risk Management rejects the request.

## SHF API Tokens Required for Scopes

Scopes only work with SHF API tokens. Legacy Non-Employee Risk Management API tokens do not support scopes. Legacy Non-Employee Risk Management API tokens are deprecated — use SHF API tokens instead. Refer to [Authentication](./authentication.md) for details on generating and using SHF API tokens.

## Resource Types

Scopes grant access to groups of related Non-Employee Risk Management resources:

| Resource type | Includes |
| --- | --- |
| Profiles | Profiles and risk scores |
| Profile types | Profile types and profile type namings |
| Workflows | Workflows, condition rules, workflow actions, and workflow action performers |
| Workflow sessions | Workflow sessions |
| Users & roles | Users, roles, delegations, user profiles, user roles, user managers, role profiles, and SHF integration settings |
| Templates/Configuration | Forms, form attributes, pages, page contents, page elements, page content translations, attributes, attribute options, attribute roles, risk levels, validations, and tables |
| Advanced search | Advanced searches, advanced search profile types, and advanced search roles |
| Audit | Audit events |

System configuration resources are not covered by role scopes. Only `nerm:general:manage` grants access to them.

## Access Levels

Each request maps to one of the following access levels, based on its HTTP method:

| Level | Abbreviation | HTTP methods |
| --- | --- | --- |
| Read | R | `GET` |
| Write | W | `POST`, `PUT`, `PATCH` |
| Delete | D | `DELETE` |
| Execute | X | `POST`, `PUT`, `PATCH` on workflow sessions |

## Scopes

| Scope | Access granted |
| --- | --- |
| `nerm:general:manage` | Full administrator access to all resources, including system configuration. This scope overrides any other scopes on the token. |
| `nerm:api:read-only` | Read access to every resource type. |
| `nerm:api:profile-manager` | Read, write, and delete Profiles. Read Profile types, Users & roles, and Advanced search. |
| `nerm:api:profile-reader` | Read Profiles, Profile types, and Advanced search. |
| `nerm:api:workflow-operator` | Read Profiles, Profile types, Workflows, and Advanced search. Read and execute Workflow sessions. |
| `nerm:api:configuration-manager` | Read, write, and delete Profile types and Templates/Configuration. Read Users & roles. |
| `nerm:api:integration-partner` | Create Profiles (no read, update, or delete). Read Profile types. |

### Access Matrix

The following matrix shows the access each scope grants for each resource type. A dash (—) means no access.

| Scope | Profiles | Profile types | Workflows | Workflow sessions | Users & roles | Templates/Configuration | Advanced search | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `nerm:general:manage` | R/W/D | R/W/D | R/W/D | R/W/D | R/W/D | R/W/D | R/W | R/W/D |
| `nerm:api:read-only` | R | R | R | R | R | R | R | R |
| `nerm:api:profile-manager` | R/W/D | R | — | — | R | — | R | — |
| `nerm:api:profile-reader` | R | R | — | — | — | — | R | — |
| `nerm:api:workflow-operator` | R | R | R | R/X | — | — | R | — |
| `nerm:api:configuration-manager` | — | R/W/D | — | — | R | R/W/D | — | — |
| `nerm:api:integration-partner` | W\* | R | — | — | — | — | — | — |

\* Create only.

For Advanced search, read access allows you to run searches, and write access allows you to create and update saved queries.

## Combining Scopes

A token can carry more than one scope. When it does, the token's access is the combination of everything its scopes grant. For example, a token with both `nerm:api:profile-reader` and `nerm:api:workflow-operator` can read Profiles and also execute Workflow sessions.

If a token carries `nerm:general:manage`, it has full administrator access regardless of any other scopes on the token.

An SHF API token must carry at least one of the scopes listed above to call the Non-Employee Risk Management API.

## Denied Requests

If a token's scopes don't grant the access a request needs, Non-Employee Risk Management returns a `403 Forbidden` response. To avoid revealing which scopes protect a resource, the response doesn't name the missing scope:

```json
{
  "error": "You do not have the permission to access this resource."
}
```

## More Information

For information about how scopes work across SHF APIs, refer to the [SHF Authorization Guide](/docs/api/authorization).
