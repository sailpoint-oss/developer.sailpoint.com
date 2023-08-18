---
id: standard-collection-parameters
title: Standard Collection Parameters
pagination_label: Standard Collection Parameters
sidebar_label: Standard Collection Parameters
sidebar_position: 3
sidebar_class_name: standardCollectionParameters
keywords: ['standard collection parameters']
description: Many endpoints in the NERM API support a generic syntax for paginating and filtering, and sorting the results.
tags: ['Standard Collection Parameters']
---

Many endpoints in the IdentityNow API support a generic syntax for paginating, filtering, and sorting results. A collection endpoint has the following characteristics:

- The HTTP verb is always GET.
- The last component in the URL is a plural noun (ex. `/users`).
- The return value from a successful request is always an array of JSON objects. This array may be empty if there are no results.

## Paginating Results

Use the following optional query parameters to achieve pagination:

| Parameter | Description | Default | Constraints |
| --- | --- | --- | --- |
| `query[limit]` | Integer specifying the maximum number of records to return in a single API call. If it is not specified, a default limit is used. | `100` | Maxiumum of 500 for `api/profiles` |
| `query[offset]` | Integer specifying the offset of the first result from the beginning of the collection. The **query[offset]** value is record-based, not page-based, and the index starts at 0. For example, **offset=0** and **limit=20** returns records 0-19, but **offset=1** and **limit=20** returns records 1-20. | `0` | Between 0 and the last record index. |
| `query[order]` | String specifying the ascending order in which the results should be returned, for example, **query[order]=login** would return the users results in an ascending alphanumeric order| - | Limited to specific parameters |

Examples:

- GET `/api/users?query[limit]=2`
- GET `/api/users?query[limit]=20&query[offset]=4`
- GET `/api/users?query[order]=created_at`

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
    "next": "api/users?query[offset]=300&query[limit]=100
  }
}
```

## Filtering Results

Resource attributes can be added to parameters to perform a basic match filter. Refer to each documented endpoints **Query Parameters** to identify what can be used.

Example:
- GET `/api/users?email=jim@acmeco.com`

## Advanced Profile Filtering

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











