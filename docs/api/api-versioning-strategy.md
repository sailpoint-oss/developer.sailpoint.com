---
id: api-versioning-strategy
title: API Versioning Strategy
pagination_label: API Versioning Strategy
sidebar_label: API Versioning Strategy
sidebar_position: 7
sidebar_class_name: apiVersioning
keywords: ['api', 'versioning']
description: Identity Security Cloud API Versioning Strategy.
slug: /api/api-versioning-strategy
tags: ['API Versioning Strategy']
---

SailPoint is introducing a significant change to how its Identity Security Cloud (ISC) REST APIs are versioned. The current annual release model has served as a foundational structure, but as our platform and community have grown, several meaningful pain points have emerged, both for internal engineering teams and for the customers and partners who build on our APIs every day.

This document describes the new strategy, explains why we are making this change, and provides guidance for migrating your existing integrations. Our goal is to reduce maintenance burden, give you more control over your upgrade timeline, and make API version numbers meaningful again.

:::info

SailPoint's API versioning process is subject to change at any time. SailPoint will use reasonable efforts, when possible, to communicate changes that affect users of the API in the appropriate channels in advance of such changes.

:::

## Previous Versioning Strategy

SailPoint's previous API versioning strategy used an annual release model. Each year, a new versioned collection of all API endpoints was published under a year-based namespace (e.g., `/v2024`, `/v2025`, `/v2026`). All services — whether or not they had changed, were carried forward into the new version collection.

The previous URL structure was:

```
https://{tenant}.api.identitynow.com/{version}/{service}/{action}

# Example:
https://acme.api.identitynow.com/v2026/accounts
```

Versions available under the previous model: `v3`, `beta`, `v2024`, `v2025`, `v2026`.

## API Versioning Strategy

### Per-Service Semantic Versioning

The new strategy replaces the shared annual release model with independent semantic versioning at the service level. Each service owns its version number. A service's major version only increments when its usage contract changes — not because a calendar year has turned.

The new URL structure is:

```
https://{tenant}.api.identitynow.com/{service}/{version}/{action}

# Examples:
https://acme.api.identitynow.com/accounts/v1
https://acme.api.identitynow.com/identities/v1
```

| Concern | Previous Model | New Model |
|---|---|---|
| Version scope | Entire API collection | Per service |
| Version trigger | Annual calendar | Breaking change in that service |
| URL structure | `/{year-version}/{service}` | `/{service}/{version}` |
| New version release window | Once per year | Any time a service is ready |
| Unchanged services | Carried forward into new collection | Untouched — no update required |
| Deprecation timing | Tied to release cycle | Set independently per service |

### Universal v1 Baseline

All services are migrated to a `/v1` endpoint regardless of their historical version number. When the migration is complete, every service starts at `v1`. When a breaking change is later required for a given service, that service moves to `v2`. All other services remain at `v1` indefinitely until they also require a breaking change.

After migration, an example set of endpoints looks like this:

```
/accounts/v1
/identities/v1
/{service}/v1
```

After a breaking change is introduced to the Accounts service:

```
/accounts/v1    ← deprecated, still accessible during deprecation window
/accounts/v2    ← new version
/identities/v1  ← unchanged
/{service}/v1   ← unchanged
```

### What This Means for You

- **No more forced churn.** If you're on `/accounts/v1` and nothing has changed, your integration never needs to update.
- **Release flexibility.** Service teams ship breaking changes when they are ready, not when the calendar says so.
- **Clearer lifecycle signals.** Version numbers communicate meaning — `v2` of a service explicitly signals a different contract, not just a different year.
- **Improved SDKs and documentation.** SDKs can be versioned per service, so individual package updates reflect actual service changes rather than annual releases. (Phil to describe how the SDKs will be updated and the benefits.)

## Public vs. Experimental

The existing Public/Experimental distinction is fully preserved under the new model.

### Public

Public APIs are production-ready APIs intended for use by customers, partners, and other external users. Public APIs will generally not receive breaking changes, but non-breaking additions may be introduced at any time within the same version. Examples of non-breaking changes include, but are not limited to:

- Adding a new endpoint.
- Adding an optional parameter.
- Adding an optional request header.
- Adding a response property.
- Adding a response header.
- Adding enum values.
- Changing a required parameter to an optional parameter.
- Changing response properties or status codes for requests using new enums, new optional parameters, or new request headers.
- Expanding authentication or authorization requirements.

### Experimental

Experimental APIs are still under development but may be used for evaluation purposes. These APIs may introduce breaking changes with little or no notice and are not suitable for production use. Examples of breaking changes include, but are not limited to:

- Removing an entire endpoint.
- Removing or renaming a parameter.
- Removing or renaming a response property.
- Removing enum values.
- Adding a new required parameter.
- Adding a new validation rule to an existing parameter.
- Changing the type of a request parameter or response property.
- Changing the response status code.
- Changing synchronous effects to asynchronous effects.
- Restricting authentication or authorization requirements.
- Changing the definition of a request parameter or response property.

Experimental APIs will be marked as "Experimental" in the API specification.

![experimental](./img/experimental-warning.png)

Access to experimental APIs requires an opt-in header. When an endpoint transitions from experimental to public, the header is no longer necessary, but its presence will not cause any issues.

To access an experimental endpoint, add the `X-SailPoint-Experimental` header with a value of `true` to your request:

```bash
curl --header "X-SailPoint-Experimental: true" https://acme.api.identitynow.com/accounts/v1/endpoint
```

:::warning

If you attempt to invoke an experimental API without specifying the `X-SailPoint-Experimental` header, you will receive an error indicating that the endpoint requires the header.

:::

## Deprecations

When a breaking change is introduced to a service, the old version enters a clearly defined and publicly communicated deprecation window specific to that service. Both the old and new versions remain accessible concurrently during the deprecation window. You decide your own migration timeline within that period.

Individual APIs may also be deprecated independently of a major version bump. Deprecated APIs will remain functional for two years following their deprecation notice before being turned off.

### Announcements

Deprecation notices will be communicated through the Admin page of the Identity Security Cloud UI, the [Announcements](https://developer.sailpoint.com/discuss/c/announcements/14) category on the developer community, Compass, and newsletters or emails.

### API Specification

Deprecated APIs will be marked as "Deprecated" in the API specification. Additional information on why an endpoint is being deprecated and what replacements are available, if any, will be provided in the deprecation notice.

![deprecation](./img/deprecation-warning.png)

### Deprecation Header

Deprecated APIs will return a response header to inform you when a particular endpoint is deprecated. If you receive a `X-Deprecated: true` response header, check the API specification for more information on the replacement.

## Legacy Collections

The legacy collections (`v3`, `beta`, `v2024`, `v2025`, `v2026`) will be deprecated on a communicated timeline and retired. No new year-based collections will ever be created. Migration guidance and timelines will be published for each legacy collection as they are deprecated.

### V3 and Beta

The V3 and Beta APIs will remain operational for as long as they contain non-deprecated endpoints. V3 and Beta will be supported until Q1 of 2027, meaning that users can submit support tickets for these versions. After Q1 of 2027, users may no longer submit support tickets for these versions and will be asked to use a supported version instead.

## Exceptions to the Versioning Process

SailPoint may occasionally make exceptions to the versioning process. These exceptions may be due to a variety of factors, including security, performance, or delivery.

### Security

SailPoint's Product Security team may approve breaking changes to our APIs to resolve security issues. In these cases, no prior notice about the breaking change will be provided, in order to ensure the security issue is fixed in a timely manner and to limit knowledge of the security issue to third parties.

### Performance

SailPoint may approve breaking changes to our APIs to address performance issues. The impact to customers will be weighed against the performance improvements in order to determine if an exception to the versioning process will be made.

### Delivery

SailPoint may make breaking changes to our APIs in order to decrease the time to deliver new features, as long as there is minimal impact to users of the API.
