---
id: standard-collection-parameters
---
# Standard Collection Parameters

Many collection endpoints in the IdentityNow API support a generic syntax for paginating, filtering
and sorting the results.

 A collection endpoint has the following characteristics:

* The HTTP verb is always GET.
* The last component in the URL is a plural noun (ex. `/v3/public-identities`).
* The return value from a successful request is always an array of JSON objects.  This array may be empty if there are no results.

## Paginating Results

Pagination is achieved with the following optional query parameters.

|Name|Description|Default|Constraints|
|---|---|---|---|
|**limit**|Integer that specifies the maximum number of records to return in a single API call. If not specified a default limit will be used.|250|Maxiumum of 250 records per page|
|**offset**|Integer that specifies the offset of the first result from the beginning of the collection.  **offset** is record based, not page based, and the index starts at 0.  For example, **offset=0** and **limit=20** will return records 0-19, while **offset=1** and **limit=20** will return records 1-20.|0|Between 0 and the last record index.
|**count**|Boolean that indicates whether a total count will be returned, factoring in any filter parameters, in the **X-Total-Count** response header. The value will be the total size of the collection that would be returned if **limit** and **offset** were ignored. For example, if the total number of records is 1000, then count=true would return 1000 in the **X-Total-Count** header. Since requesting a total count can have performance impact, it is recommended not to send **count=true** if no use is being made of that value.|false|Must be **true** or **false**|

Examples:

* GET `/v3/public-identities?limit=2`
* GET `/v3/public-identities?limit=20&offset=4`
* GET `/v3/public-identities?count=true`

## Filtering Results

Any collection with a `filters` parameter supports filtering. This means that an item will only be included in the returned array if the filters expression evaluates to true for that item.  Check the available request parameters for the collection endpoint you are using to see if it supports filtering.

### Data Types

Filter expressions are applicable to fields of the following types:

* Numeric
* Boolean: either **true** or **false**
* Strings. Enumerated values are a special case of this.
* Date-time. In V3, all date time values are in ISO-8601 format, as specified in [RFC 3339 - Date and Time on the Internet: Timestamps](https://tools.ietf.org/html/rfc3339).

### Filter Syntax

The syntax of V3 filters is similar to, but not exactly the same as, that specified by the SCIM standard. Some key differences are

* A slightly different set of supported operators
* Case-sensitivity of operators. All V3 filter operators are in lowercase; it is illegal to specify "EQ" instead of "eq".

### Primitive Operators

These filter operators apply directly to fields and their values:

|Operator|Description|Example|
|---|---|---|
|ca|True if the collection-valued field contains all the listed values.|groups ca ("Venezia","Firenze")|
|co|True if the value of the fieldcontains the specified value as a substring.(Applicable to string-valued fields only.)|name co "Rajesh"|
|eq|True if the value of the field indicated by the first operand isequal to the value specified by the second operand.|identitySummary.id eq "2c9180846e85e4b8016eafeba20c1314"|
|ge|True if the value of the field indicated by the first operand isgreater or equal to the value specified by the second operand.|daysUntilEscalation ge 7 name ge "Genaro"|
|gt|True if the value of the field indicated by the first operand isgreater than the value specified by the second operand.|daysUntilEscalation gt 7 name gt "Genaro" created gt 2018-12-18T23:05:55Z|
|in|True if the field value is in the list of values.|accountActivityItemId in ("2c9180846b0a0583016b299f210c1314","2c9180846b0a0581016b299e82560c1314")|
|le|True if the value of the field indicated by the first operand is less or equal to the value specified by the second operand.|daysUntilEscalation le 7 name le "Genaro"|
|lt|True if the value of the field indicated by the first operand is less than the value specified by the second operand.|daysUntilEscalation lt 7 name lt "Genaro" created lt 2018-12-18T23:05:55Z|
|ne|True if the value of the field indicated by the first operand isnot equal to the value specified by the second operand.|type ne "ROLE"|
|pr|True if the field is present, that is, not null.|pr accountRequestInfo|
|sw|True if the value of the field starts with the specified value.(Applicable to string-valued fields only.)|name sw "Rajesh"|

### Composite Operators

These operators are applied to other filter expressions:

|Operator|Description|Example|
|---|---|---|
|and|True if both the filter-valued operands are true.|startDate gt 2018 and name sw "Genaro"|
|not|True if the filter-valued operand is false.|not groups ca ("Venezia","Firenze")|
|or|True if either of the filter-valued operands are true.|startDate gt 2018 or name sw "Genaro"|

### Escaping Special Characters in a Filter

Certain characters must be escaped before they can be used in a filter expression.  For example, the following filter expression that attempts to find all sources with the name `#Employees` will produce a 400 error:

`/v3/sources?filters=name eq "#Employees"`

To properly escape this filter, you will need to do the following:

`/v3/sources?filters=name eq "%23Employees"`

If you are searching for a string that contains double quotes, you will need to use the following escape sequence:

`/v3/sources/?filters=name eq "\"Employees\""`

The following table lists the special characters that are incompatible with `filters`, and how to escape them.

|Character|Escape Sequence|
|---|---|
|#|%23|
|%|%25|
|&|%26|
| \\ | \\\\ |
|"| \\" |

### Known Limitations

Although filter expressions are a very general mechanism, individual API endpoints will only support filtering on a specific set of fields that are relevant to that endpoint, and will frequently only support a subset of operations for each field. For example, an endpoint might allow filtering on the name field but not support use of the co operator on that field. Consult the documentation for each API endpoint to determine what fields and operators can be used.

Examples:

* `/v3/public-identities?filters=email eq "john.doe@example.com"`
* `/v3/public-identities?filters=firstname sw "john" or email sw "joe"`

Attempts to use an unsupported filter expression will result in a 400 Bad Request response.

**NOTES:**

* Spaces in URLs must be escaped with `%20`.  Most programming languages, frameworks, libraries, and tools will do this for you, but some won't.  In the event that your tool doesn't escape spaces, you will need to format your query as `/v3/public-identities?filters=email%20eq%20"john.doe@example.com"`

* Unless explicitly noted otherwise, strings are compared lexicographically. Most comparisons are not case sensitive. Any situations where the comparisons are case sensitive will be called out.  

* Date-times are compared temporally; an earlier date-time is less than a later date-time.

* The usual precedence/associativity of the composite operators applies, with **not** having higher priority than **and**, which in turn has higher priority than **or**. Parentheses can be used to override this precedence.

Examples:

`not prop1 eq val1 or prop2 eq val2 and prop3 eq val3` is equivalent to `(not (prop1 eq val1)) or ((prop2 eq val2) and (prop3 eq val3))`

and

`not (prop1 eq val1 or prop2 eq val2) and prop3 eq val3` is equivalent to `(not ((prop1 eq val1) or (prop2 eq val2))) and (prop3 eq val3)`

### Sorting Results

Sorting of results is supported with the standard `sorters` parameter. Its syntax is a set of comma-separated field names. Each field name may be optionally prefixed with a "-" character, which indicates the sort is descending based on the value of that field. Otherwise, the sort is ascending.

For example, to sort primarily by **type** in ascending order, and secondarily by **modified date** in descending order, use `sorters=type,-modified`

## Putting it all Together

Pagination, filters, and sorters can be mixed and match to achieve the desired output for a given collection endpoint.  Here are some examples:

* `/v3/public-identities?limit=20&filters=firstname eq "john"&sorters=-name` returns the first 20 identities that have a first name of John and are sorted in descending order by full name.
* `/v3/account-activities?limit=10&offset=2&sorters=-created` sorts the results by descending created time, so the most recent activities appear first.  The limit and offset returns the 3rd page of this sorted response with 10 records displayed.
