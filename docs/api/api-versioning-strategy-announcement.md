# Upcoming Changes to the SailPoint API Versioning Strategy

We are planning a significant update to how SailPoint's Identity Security Cloud APIs are versioned. This document outlines what is changing, why we are making these changes, and what they mean for you as an API consumer or integration developer.

## What Is Changing

SailPoint is moving away from a **shared annual release model** (e.g., `v2024`, `v2025`, `v2026`) toward **true semantic versioning (semver) at the individual service level**.

Under the new strategy, each API service will be versioned independently. A new major version of a service will only be introduced when that service's usage contract actually changes — not because a new calendar year has arrived. The URL structure will follow a pattern like:

```
/accounts/v1
/identities/v2
/roles/v1
```

This gives customers a stable, predictable target. As long as a service's contract is unchanged, your integration continues to work — indefinitely. When a breaking change is genuinely required, a new version (e.g., `v2`) will be developed and released **in parallel** with the existing version, and the older version will enter a clearly defined deprecation schedule on its own timeline.

## Why We Are Making This Change

The current annual versioning model has introduced a number of pain points for both customers and internal teams. The key issues driving this change are:

### Customers Are Forced to Update Integrations Even When Nothing Changed

Under the current model, all APIs are rolled into a new version each year — regardless of whether any breaking changes were made to a particular service. This means a customer targeting `v2024` may be required to update their integration paths or SDK method calls to `v2026` even if the underlying service they use has not changed at all. There is no clear signal that a new yearly version contains meaningful differences for their specific use case.

With per-service versioning, a customer using `/accounts/v1` will not need to change anything until SailPoint actually introduces a breaking change to the Accounts service and releases `/accounts/v2`.

### New APIs Are Constrained to an Annual Window

If a service is not ready to ship by the cutoff for a given year's release, it must wait for the next annual cycle. This delays meaningful improvements and limits teams' ability to ship when they are ready.

With per-service versioning, any service can introduce a new version as soon as it is ready — independent of every other service.

### The `/latest` Endpoint Is Unstable for Production Use

The current `/latest` alias was introduced to help reduce churn from yearly version changes, but it is inherently unsafe for production integrations. If a breaking change is introduced to any service, a customer using `/latest` can have their integration break without warning. The existence of `/latest` as a workaround signals that the annual versioning model is not meeting customer needs on its own.

### Maintaining Multiple Year-Based Versions Is Expensive and Error-Prone

Each annual release requires duplicating the entire API collection. This process takes significant engineering time and frequently results in inconsistencies — mismatched descriptions, outdated examples, experimental headers that linger past their intended lifespan, and other documentation drift. Customers occasionally encounter an experimental API in `v2025` and have no clear way to know whether the same API is stable in `v2024` without manually navigating to the prior year's documentation.

With independent service versioning, each service is documented once and updated in place. There is no duplication, and the experimental/stable boundary is clearer within a single service's version history.

### You Cannot Use Old and New Versions of the Same Service Simultaneously

The current model ties all services to a single year-based namespace. If you are migrating from `v2024/accounts` to `v2025/accounts`, you cannot run both versions of the Accounts service concurrently in your application. With per-service versioning, `/accounts/v1` and `/accounts/v2` can coexist and you can migrate on your own schedule.

## What Is Staying the Same

- The distinction between **public** (production-ready) and **experimental** APIs remains. Experimental APIs may still introduce breaking changes and require an opt-in header.
- The definition of **breaking vs. non-breaking changes** does not change.
- Deprecated APIs will continue to remain operational for a defined transition window before being turned off, and deprecations will still be communicated through announcements, API specification notices, and response headers.
- The **V3 and Beta APIs** are unaffected by this change and will remain operational under the previously communicated timeline.

## What This Means for You

| Scenario | Under Current Strategy | Under New Strategy |
|---|---|---|
| A service you use has no changes this year | You still need to update your integration path to the new year's version when the old one is deprecated | Your integration path stays the same until a breaking change is actually introduced |
| A breaking change is introduced to one service | All services receive a new year-based version | Only the affected service receives a new major version |
| You want to run v1 and v2 of the same service concurrently | Not supported within the same year namespace | Supported — both versions are accessible simultaneously |
| An experimental API you rely on graduates to public | You need to find the stable version in the appropriate year's docs | The same service URL path moves to public status; the prior year lookup is not needed |

## Migration Guidance

A full migration guide — including updated SDK documentation, Postman collection changes, and path mapping from the current year-based versions to the new per-service versions — will be published ahead of the transition.

SailPoint will provide migration scripts for SDK and API path updates to reduce the manual effort required.

## Timeline

The implementation plan is currently in progress. Updates will be shared through the [Announcements](https://developer.sailpoint.com/discuss/c/announcements/14) forum, developer.sailpoint.com, and direct communications as the rollout date is confirmed.

---

:::info

SailPoint's API versioning process is subject to change at any time. SailPoint will use reasonable efforts, when possible, to communicate changes that affect users of the API in the appropriate channels in advance of such changes.

:::
