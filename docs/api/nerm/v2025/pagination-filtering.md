---
id: pagination-filtering
title: Pagination and Filtering
pagination_label: Pagination and Filtering
sidebar_label: Pagination and Filtering
sidebar_position: 3
sidebar_class_name: paginationFiltering
keywords: ['pagination filtering']
description: NERM API pagination and filtering.
slug: /api/nerm/v2025/pagination-filtering
tags: ['Pagination Filtering']
---

Many endpoints in the Identity Security Cloud API support a generic syntax for paginating, filtering and sorting the results. A collection endpoint has the following characteristics:

- The HTTP verb is always GET.
- The last component in the URL is a plural noun (ex. `/v3/public-identities`).
- The return value from a successful request is always an array of JSON objects. This array may be empty if there are no results.

## Paginating Results

Use the following optional query parameters to achieve pagination:

| Name | Description | Default | Constraints |
| --- | --- | --- | --- |
| `limit` | Integer specifying the maximum number of records to return in a single API call. If it is not specified, a default limit is used. | `250` for list endpoints, `10000` for search endpoint | Maxiumum of 250 records per page for list endpoints, 10000 records per page for the [Search endpoint](https://developer.sailpoint.com/docs/api/v3/search) |
| `offset` | Integer specifying the offset of the first result from the beginning of the collection. The **offset** value is record-based, not page-based, and the index starts at 0. For example, **offset=0** and **limit=20** returns records 0-19, but **offset=1** and **limit=20** returns records 1-20. | `0` | Between 0 and the last record index. |
| `count` | Boolean indicating whether a total count is returned, factoring in any filter parameters, in the **X-Total-Count** response header. The value is the total size of the collection that would be returned if **limit** and **offset** were ignored. For example, if the total number of records is 1000, then count=true would return 1000 in the **X-Total-Count** header. Because requesting a total count can have performance impact, do not send **count=true** if that value is not being used. | `false` | Must be `true` or `false` |

Examples:

- GET `/v3/public-identities?limit=2`
- GET `/v3/public-identities?limit=20&offset=4`
- GET `/v3/public-identities?count=true`