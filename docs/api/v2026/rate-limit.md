---
id: rate-limit
title: Rate Limiting
pagination_label: Rate Limiting
sidebar_label: Rate Limiting
sidebar_position: 6
sidebar_class_name: rateLimit
keywords: ['rate limit']
description: ISC API rate limits.
slug: api/v2026/rate-limit
tags: ['Rate Limit']
---

## Rate Limits

### Current default (API gateway)

There is a default rate limit of 100 requests per `client_id` and API version per 10 seconds for v2026 traffic through
the API gateway. The default rate limit is the same across all API versions, but is applied to each API version
separately. If you exceed the rate limit, expect the following response from the API:

**HTTP Status Code**: 429 Too Many Requests

**Headers**:

- **Retry-After**: [seconds to wait before rate limit resets]

### Route-specific backoff

Some APIs may apply an additional route-specific backoff when the same client repeatedly exceeds rate limits across multiple intervals. When backoff is active, the API still returns `429 Too Many Requests`, but the `Retry-After` header may be longer than the standard rate-limit reset window.

Always wait for the full `Retry-After` value before sending another request. If your integration continues to exceed limits, reduce request concurrency or spread requests over a longer period so each `client_id` stays within the documented limits.

### Route-owner configuration

Route owners can enable backoff in the API route specification for routes that need escalating retry delays. The authoritative route YAML is maintained in `cloud-api-client-common/api-route-specs/sp-gateway-routes.yaml`.

```yaml
backOffConfig:
  enabled: true
  intervalThreshold: 3       # Distinct violated intervals before backoff triggers
  tiers: [60, 300, 600, 1200] # Backoff durations per escalation tier, in seconds
  violationWindow: 120        # Window for counting violated intervals, in seconds
  tierMemoryWindow: 3600      # How long to remember the last tier after expiry, in seconds
  redisTimeoutMs: 5           # Max time allowed per Redis backoff operation, in milliseconds
```

Backoff is active only when the route has `backOffConfig.enabled: true` and the gateway backoff rollout control is enabled. Omitted or non-positive values fall back to the gateway defaults.

:::info

Specific APIs may have different rate limiting. Refer to their specifications for this information.

:::

:::tip What changed

Gateway rate limiting now keys off **`client_id`** and API version (still **100 requests per 10 seconds** by default).
Earlier documentation described the same ceiling per **`access_token`**. Plan retries and concurrency around **`client_id`** so
your behavior matches how the gateway enforces limits.

:::
