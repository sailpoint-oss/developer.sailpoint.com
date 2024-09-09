---
id: standard-collection-parameters
title: Standard Collection Parameters
pagination_label: Standard Collection Parameters
sidebar_label: Standard Collection Parameters
sidebar_position: 5
sidebar_class_name: standardCollectionParameters
keywords: ['standard collection parameters','filter','pagination','paginate','sort']
description: ISC API pagination, filtering, and sorting.
tags: ['Standard Collection Parameters','Filter','Sort','Pagination']
---

Many endpoints in the Identity Security Cloud API support a generic syntax for paginating, filtering and sorting the results. A collection endpoint has the following characteristics:

- The HTTP verb is always GET.
- The last component in the URL is a plural noun (ex. `/v3/public-identities`).
- The return value from a successful request is always an array of JSON objects. This array may be empty if there are no results.

## Paginating Results

Use the following optional query parameters to achieve pagination:

| Name | Description | Default | Constraints |
| --- | --- | --- | --- |
| `limit` | Integer specifying the maximum number of records to return in a single API call. If it is not specified, a default limit is used. | `250` for list endpoints, `10000` for search endpoint | Maxiumum of 250 records per page for list endpoints, 10000 records per page for the [Search endpoint](https://platform.sailpoint.com/docs/api/v3/search) |
| `offset` | Integer specifying the offset of the first result from the beginning of the collection. The **offset** value is record-based, not page-based, and the index starts at 0. For example, **offset=0** and **limit=20** returns records 0-19, but **offset=1** and **limit=20** returns records 1-20. | `0` | Between 0 and the last record index. |
| `count` | Boolean indicating whether a total count is returned, factoring in any filter parameters, in the **X-Total-Count** response header. The value is the total size of the collection that would be returned if **limit** and **offset** were ignored. For example, if the total number of records is 1000, then count=true would return 1000 in the **X-Total-Count** header. Because requesting a total count can have performance impact, do not send **count=true** if that value is not being used. | `false` | Must be `true` or `false` |

Examples:

- GET `/v3/public-identities?limit=2`
- GET `/v3/public-identities?limit=20&offset=4`
- GET `/v3/public-identities?count=true`

## Paginating Search Queries

The [search API](https://platform.sailpoint.com/docs/api/v3/search) in Identity Security Cloud leverages [Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html) functionality, which returns a maximum of 10,000 records by default. However, you can page more than 10,000 records by using the "searchAfter" property.

The `searchAfter` capability provides the ability to page on sorted field values, instead of offset paging. For example, if you sort by ID and page 100 records at a time, you can take the 1st page of 100 records, pass the last ID from that record set into your next search, and the next search will return the next 100 records after that ID. You continue that pattern of using the last value passed into `searchAfter` until the end of the result set. This allows you to page past the 10,000 record limit until you reach the final record.

**Required Properties for Paginating Search Results**

| **Property** | Description |
| --- | --- |
| **query** | The Query JSON object. Refer to the following Query JSON Object table for details. |
| **sort** | The array list of the fields to sort by. This is required if you are using the `searchAfter` approach. You can use `-fieldName` for descending searches (optional). |
| **searchAfter** | You can use this instead of offset to get past the 10,000 paging result record limit, passing the last value(s) of your sort fields from the previous result set into the next result set until you get the total number of results or the end of results (optional). |

### Example of Paginating Search Results

Here is an example of a search API call with `searchAfter` paging. The first query will get the first set of results. The default limit for search is 10,000, which is different from other collection endpoints. For this example, the query is set to page 100 records at a time. Paginating search queries also requires the `sort` property to be set to `id`.

**POST** `https://{tenant}.api.identitynow.com/v3/search?limit=100&count=true`

```json
{
  "indices": ["identities"],
  "query": {
    "query": "*"
  },
  "sort": ["id"]
}
```

This query will return 100 records. To get the next 100 records, find the last record's `id` and use it in the next query's `searchAfter` property.

**POST** `https://{tenant}.api.identitynow.com/v3/search?limit=100&count=true`

```json
{
  "indices": ["identities"],
  "query": {
    "query": "*"
  },
  "sort": ["id"],
  "searchAfter": ["2c9180835d38ca0c015d606b50851b1e"]
}
```

This will get the next 100 records in the search query. Repeat this process until no more records return.

## Filtering Results

Any collection with a `filters` parameter supports filtering. This means that an item is only included in the returned array if the filters expression evaluates to true for that item. Check the available request parameters for the collection endpoint you are using to see if it supports filtering.

### Data Types

Filter expressions are applicable to fields of the following types:

- Numeric
- Boolean: either **true** or **false**
- Strings. Enumerated values are a special case of this.
- Date-time. In V3, all date time values are in ISO-8601 format, as specified in [RFC 3339 - Date and Time on the Internet: Timestamps](https://tools.ietf.org/html/rfc3339).

### Filter Syntax

The V3 filter syntax is similar to, but not exactly the same as, that specified by the SCIM standard. These are some key differences:

- A slightly different set of supported operators
- Case-sensitivity of operators. All V3 filter operators are in lowercase; specifying "EQ" instead of "eq" is not allowed.

### Primitive Operators

These filter operators apply directly to fields and their values:

| Operator | Description | Example |
| --- | --- | --- |
| `ca` | True if the collection-valued field contains all the listed values. | groups ca ("Venezia","Firenze") |
| `co` | True if the value of the field contains the specified value as a substring.(Applicable to string-valued fields only.) | name co "Rajesh" |
| `eq` | True if the value of the field indicated by the first operand is equal to the value specified by the second operand. | identitySummary.id eq "2c9180846e85e4b8016eafeba20c1314" |
| `ge` | True if the value of the field indicated by the first operand is greater or equal to the value specified by the second operand. | daysUntilEscalation ge 7<br></br><br></br>name ge "Genaro" |
| `gt` | True if the value of the field indicated by the first operand is greater than the value specified by the second operand. | daysUntilEscalation gt 7<br></br><br></br>name gt "Genaro"<br></br><br></br>created gt 2018-12-18T23:05:55Z |
| `in` | True if the field value is in the list of values. | accountActivityItemId in ("2c9180846b0a0583016b299f210c1314","2c9180846b0a0581016b299e82560c1314") |
| `le` | True if the value of the field indicated by the first operand is less or equal to the value specified by the second operand. | daysUntilEscalation le 7<br></br><br></br>name le "Genaro" |
| `lt` | True if the value of the field indicated by the first operand is less than the value specified by the second operand. | daysUntilEscalation lt 7<br></br><br></br>name lt "Genaro"<br></br><br></br>created lt 2018-12-18T23:05:55Z |
| `ne` | True if the value of the field indicated by the first operand is not equal to the value specified by the second operand. | type ne "ROLE" |
| `pr` | True if the field is present, that is, not null. | pr accountRequestInfo |
| `isnull` | True if the field is null. | lastUsed isnull |
| `sw` | True if the value of the field starts with the specified value.(Applicable to string-valued fields only.) | name sw "Rajesh" |

### Composite Operators

These operators are applied to other filter expressions:

| Operator | Description | Example |
| --- | --- | --- |
| `and` | True if both the filter-valued operands are true. | startDate gt 2018 and name sw "Genaro" |
| `not` | True if the filter-valued operand is false. | not groups ca ("Venezia","Firenze") |
| `or` | True if either of the filter-valued operands are true. | startDate gt 2018 or name sw "Genaro" |

### Escaping Special Characters in a Filter

Certain characters must be escaped before they can be used in a filter expression. For example, the following filter expression attempting to find all sources with the name `#Employees` will produce a 400 error:

`/v3/sources?filters=name eq "#Employees"`

To properly escape this filter, do the following:

`/v3/sources?filters=name eq "%23Employees"`

If you are searching for a string containing double quotes, use the following escape sequence:

`/v3/sources/?filters=name eq "\"Employees\""`

The following table lists the special characters that are incompatible with `filters` and how to escape them.

| Character | Escape Sequence |
| --------- | --------------- |
| #         | %23             |
| %         | %25             |
| &         | %26             |
| \\        | \\\\            |
| "         | \\"             |

### Known Limitations

Although filter expressions are a very general mechanism, individual API endpoints will only support filtering on a specific set of fields that are relevant to that endpoint, and will frequently only support a subset of operations for each field. For example, an endpoint might allow filtering on the name field but not support use of the co operator on that field. Consult the documentation for each API endpoint to determine what fields and operators can be used. Attempts to use an unsupported filter expression will result in a 400 Bad Request response.

Examples:

- `/v3/public-identities?filters=email eq "john.doe@example.com"`
- `/v3/public-identities?filters=firstname sw "john" or email sw "joe"`
- `not prop1 eq val1 or prop2 eq val2 and prop3 eq val3` is equivalent to `(not (prop1 eq val1)) or ((prop2 eq val2) and (prop3 eq val3))`
- `not (prop1 eq val1 or prop2 eq val2) and prop3 eq val3` is equivalent to `(not ((prop1 eq val1) or (prop2 eq val2))) and (prop3 eq val3)`

:::info

- Spaces in URLs must be escaped with `%20`. Most programming languages, frameworks, libraries, and tools will do this for you, but some won't. In the event that your tool doesn't escape spaces, you will need to format your query as `/v3/public-identities?filters=email%20eq%20"john.doe@example.com"`

- Double quotes may need to be escaped with `%22`. Most programming languages, frameworks, libraries, and tools will do this for you, but some won't. In the event that your tool doesn't escape quotes, you will need to format your query as `/v3/public-identities?filters=email%20eq%20%22john.doe@example.com%22`

- You must escape spaces in URLs with `%20`. Most programming languages, frameworks, libraries, and tools do this for you, but some do not. In the event that your tool does not escape spaces, you must format your query as `/v3/public-identities?filters=email%20eq%20"john.doe@example.com"`

- Unless explicitly noted otherwise, strings are compared lexicographically. Most comparisons are not case sensitive. Any situations where the comparisons are case sensitive will be called out.

- Date-times are compared temporally; an earlier date-time is less than a later date-time.

- The usual precedence and associativity of the composite operators applies, with **not** having higher priority than **and**, which in turn has higher priority than **or**. You can use parentheses to override this precedence.

:::

## Sorting Results

Result sorting is supported with the standard `sorters` parameter. Its syntax is a set of comma-separated field names. You may optionally prefix each field name with a "-" character, indicating that the sort is descending based on the value of that field. Otherwise, the sort is ascending.

For example, to sort primarily by **type** in ascending order, and secondarily by **modified date** in descending order, use `sorters=type,-modified`

## Putting it all Together

Pagination, filters, and sorters can be mixed and match to achieve the desired output for a given collection endpoint. Here are some examples:

- `/v3/public-identities?limit=20&filters=firstname eq "john"&sorters=-name` returns the first 20 identities that have a first name of John and are sorted in descending order by full name.
- `/v3/account-activities?limit=10&offset=2&sorters=-created` sorts the results by descending created time, so the most recent activities appear first. The limit and offset returns the 3rd page of this sorted response with 10 records displayed.
