---
id: search-arguments
title: SearchArguments
pagination_label: SearchArguments
sidebar_label: SearchArguments
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SearchArguments', 'SearchArguments'] 
slug: /tools/sdk/python/v3/models/search-arguments
tags: ['SDK', 'Software Development Kit', 'SearchArguments', 'SearchArguments']
---

# SearchArguments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule_id** | **str** | The ID of the scheduled search that triggered the saved search execution.  | [optional] 
**owner** | [**TypedReference**](typed-reference) | The owner of the scheduled search being tested.  | [optional] 
**recipients** | [**[]TypedReference**](typed-reference) | The email recipients of the scheduled search being tested.  | [optional] 
}

## Example

```python
from sailpoint.v3.models.search_arguments import SearchArguments

search_arguments = SearchArguments(
schedule_id='7a724640-0c17-4ce9-a8c3-4a89738459c8',
owner=sailpoint.v3.models.typed_reference.TypedReference(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', ),
recipients=[
                    sailpoint.v3.models.typed_reference.TypedReference(
                        type = 'IDENTITY', 
                        id = '2c91808568c529c60168cca6f90c1313', )
                    ]
)

```
[[Back to top]](#) 

