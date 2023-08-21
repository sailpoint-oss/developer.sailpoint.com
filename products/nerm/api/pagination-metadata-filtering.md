---
id: pagination-metadata-filtering
title: Pagination, Metadata and Filtering
pagination_label: Pagination, Metadata and Filtering
sidebar_label: Pagination, Metadata and Filtering
sidebar_position: 3
sidebar_class_name: paginationMetadataFiltering
keywords: ['pagination metadata filtering']
description: Many endpoints in the NERM API support a generic syntax for paginating and filtering, and sorting the results.
slug: /api/pagination-metadata-filtering
tags: ['Pagination Metadata Filtering']
---

Many endpoints in the NERM API support a generic syntax for paginating, filtering, and sorting results. A collection endpoint has the following characteristics:

- The HTTP verb is always GET.
- The last component in the URL is a plural noun (ex. `/users`).
- The return value from a successful request is always an array of JSON objects. This array may be empty if there are no results.

## Paginating Results

Use the following optional query parameters to achieve pagination:

| Parameter | Description | Default | Constraints |
| --- | --- | --- | --- |
| `limit` | Integer specifying the maximum number of records to return in a single API call. If it is not specified, a default limit is used. | `100` | Maxiumum of 500 for `api/profiles` |
| `offset` | Integer specifying the offset of the first result from the beginning of the collection. The **offset** value is record-based, not page-based, and the index starts at 0. For example, **offset=0** and **limit=20** returns records 0-19, but **offset=1** and **limit=20** returns records 1-20. | `0` | Between 0 and the last record index. |
| `order` | String specifying the ascending order in which the results should be returned, for example, **order=login** would return the users results in an ascending alphanumeric order| - | Limited to specific parameters |

Examples:

- GET `/api/users?limit=2`
- GET `/api/users?limit=20&offset=4`
- GET `/api/users?order=created_at`

## Metadata

Metadata can be added to a result to allow for progromatic approaches to fetching data.

| Name | Description | Default |
| --- | --- | --- |
| `metadata` | Boolean that specifies wether or not to return a **_metadata** key with pagination information | false |

Example:

- GET `/api/users?metadata=true`
```
{
  ...
  "_metadata": {
    "limit": 100,
    "offset": 200,
    "total": 500,
    "next": "api/users?offset=300&limit=100
  }
}
```

## Filtering Results

Resource attributes can be added to parameters to perform a basic match filter. Refer to each documented endpoints **Query Parameters** to identify what can be used.

Example:
- GET `/api/users?email=jim@acmeco.com`

## Advanced Profile Filtering

More advanced filtering can be performed on **profiles** by using the [Advanced Search Endpoint](https://developer.sailpoint.com/nerm/api).

For example, if you wanted to find all profiles where the **personal_first_name** started with the letter "a", you would first need to find the **id** of the **personal_first_name** attribute, and provide a JSON body like so:

```
{
  "advanced_search": {
    "condition_rules_attributes: [
      {
        "type": "ProfileAttributeRule",
        "condition_object_id": <id of the personal_first_name attribute>,
        "object_type": "NeAttribute",
        "comparison_operator": "start_with?",
        "value": "a"
      }
    ]
  }
}
```

You can also provide multiple filters in the same call. For example, you want to find all profiles that are not **Active**, that have a specific department profile. First you need to find the **id** of the attribute that contains that profile, and then the **id** of the specific department profile. Then provide a JSON body like so:

```
{
  "advanced_search": {
    "condition_rules_attributes: [
      {
        "type": "ProfileStatusRule",
        "comparison_operator": "!=",
        "value": "Active"
      },
      {
        "type": "ProfileAttributeRule",
        "condition_object_id": <id of the department attribute>,
        "object_type": "NeAttribute",
        "comparison_operator": "include?",
        "value": <id of the department profile>
      }
    ]
  }
}
```

There are 3 types of **condition_rules_attributes**

### ProfileStatusRule

This rule searches for profiles based on the status.

| Key | Type | Description |
|----------|------|-----------------------|
| id | string | If you are updating an existing rule, include the ID of that rule, if you do not include an ID it will create a new condition rule |
| type | string **required** | The value must be 'ProfileStatusRule' |
| comparison_operator | string **required** | This is how the comparison is made for the attribute values. <br></br>Available basic operators: <ul><li>== (equals)</li><li>!= (not equal)</li></ul> |
| value | string **required** | This is the value used for comparison.0 <br></br>Available Values: <ul><li>Active</li><li>Inactive</li><li>Leave of absence</li><li>Terminated</li></ul> |
| _destroy | boolean | Supplying this option with "true" will cause the condition to be destroyed |

Example:

```
{
  "advanced_search": {
    "condition_rules_attributes": [
      {
        "type": "ProfileStatusRule",
        "comparison_operator": "==",
        "value": "Active"
      }
    ]
  }
}
```

### ProfileTypeRule

This rule searches for profiles based on the id of the profile type.

| Key | Type | Description |
|----------|------|-----------------------|
| id | string | If you are updating an existing rule, include the ID of that rule, if you do not include an ID it will create a new condition rule |
| type | string **required** | The value must be 'ProfileTypeRule' |
| comparison_operator | string **required** | This is how the comparison is made for the attribute values. Available basic operators: <ul><li>== (equals)</li><li>!= (not equal)</li></ul> |
| value | string **required** | This is the value used for comparison. This should be the ID of the profile type |
| _destroy | boolean | Supplying this option with "true" will cause the condition to be destroyed |

Example:

```
{
  "advanced_search": {
    "condition_rules_attributes": [
      {
        "type": "ProfileTypeRule",
        "comparison_operator": "==",
        "value": "1bd99a83-57e1-4e3c-bbb0-861b4700cff6"
      }
    ]
  }
}
```

### ProfileAttributeRule

This rule searches for profiles based on an attribute that profile has.

| Key | Type | Description |
|----------|------|-----------------------|
| id | string | If you are updating an existing rule, include the ID of that rule, if you do not include an ID it will create a new condition rule |
| type | string **required** | The value must be 'ProfileAttributeRule' |
| object_type | string **required** | The values must equal 'NeAttribute' |
| condition_object_id | string **required** | this is the id of the attribute you are searching against |
| comparison_operator | string **required** | This is how the comparison is made for the attribute values. <br></br>Available basic operators: <ul><li>== (equals)</li><li>!= (not equal)</li><li>> (greater than)</li><li>< (less than)</li><li>start_with? (starts with)</li><li>end_with? (ends with)</li><li>include? (includes)</li></ul> Available date operators: <ul><li>before (before specific date)</li><li>after (after specific date)</li><li>> (more than X days before/after today)</li><li>< (less than X days before/after today)</li><li>== (equal to X days before/after today)</li></ul> |
| value | string **required** | This is the value used for comparison. <br></br>Value formatting: <ul><li>profile select attribute: ID of profile</li><li>profile search attribute: ID of profile</li><li>user select attribute: ID of user</li><li>user search attribute: ID of user</li><li>date attribute (before, after): correct date format for attribute</li><li>date attribute (>, <, ==): "X before" or "X after" where X is the number of days</li></ul> |
| _destroy | boolean | Supplying this option with "true" will cause the condition to be destroyed |

Example:

```
{
  "advanced_search": {
    "condition_rules_attributes: [
      {
        "type": "ProfileAttributeRule",
        "condition_object_id": "4ba5be36-3c4d-11ee-be56-0242ac120002",
        "object_type": "NeAttribute",
        "comparison_operator": "includes?",
        "value": "term"
      }
    ]
  }
}
```