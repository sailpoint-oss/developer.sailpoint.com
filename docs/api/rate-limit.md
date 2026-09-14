---
id: rate-limit
title: Rate Limiting
pagination_label: Rate Limiting
sidebar_label: Rate Limiting
sidebar_position: 6
sidebar_class_name: rateLimit
keywords: ['rate limit']
description: SHF API rate limits.
tags: ['Rate Limit']
---

## Rate Limits

### Current default (API gateway)

There is a default rate limit of 100 requests per `client_id` and API version per 10 seconds for traffic through 
the API gateway. The default rate limit is the same across all API versions, but is applied to each API version
separately. If you exceed the rate limit, expect the following response from the API:

**HTTP Status Code**: 429 Too Many Requests

**Headers**:

- **Retry-After**: [seconds to wait before rate limit resets]

:::info

Specific APIs may have different rate limiting. Refer to their specifications for this information.

:::

:::tip What changed

Gateway rate limiting now keys off **`client_id`** and API version (still **100 requests per 10 seconds** by default). 
Earlier documentation described the same ceiling per **`access_token`**. Plan retries and concurrency around **`client_id`** so
your behavior matches how the gateway enforces limits.

:::
