---
id: rate-limit
title: Rate Limiting
pagination_label: Rate Limiting
sidebar_label: Rate Limiting
sidebar_position: 6
sidebar_class_name: rateLimit
keywords: ['rate limit']
description: ISC API rate limits.
slug: api/v3/rate-limit
tags: ['Rate Limit']
---

## Rate Limits

There is a rate limit of 100 requests per `access_token` per 10 seconds for V3 API calls through the API gateway. If you exceed the rate limit, expect the following response from the API:

**HTTP Status Code**: 429 Too Many Requests

**Headers**:

- **Retry-After**: [seconds to wait before rate limit resets]
