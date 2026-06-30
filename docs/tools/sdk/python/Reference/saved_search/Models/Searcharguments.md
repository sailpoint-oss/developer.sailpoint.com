---
id: searcharguments
title: Searcharguments
pagination_label: Searcharguments
sidebar_label: Searcharguments
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Searcharguments', 'Searcharguments'] 
slug: /tools/sdk/python/saved-search/models/searcharguments
tags: ['SDK', 'Software Development Kit', 'Searcharguments', 'Searcharguments']
---

# Searcharguments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule_id** | **str** | The ID of the scheduled search that triggered the saved search execution.  | [optional] 
**owner** | [**Typedreference**](typedreference) | The owner of the scheduled search being tested.  | [optional] 
**recipients** | [**[]Typedreference**](typedreference) | The email recipients of the scheduled search being tested.  | [optional] 
}

## Example

```python
from sailpoint.saved_search.models.searcharguments import Searcharguments

searcharguments = Searcharguments(
schedule_id='7a724640-0c17-4ce9-a8c3-4a89738459c8',
owner=sailpoint.saved_search.models.typedreference.typedreference(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', ),
recipients=[
                    sailpoint.saved_search.models.typedreference.typedreference(
                        type = 'IDENTITY', 
                        id = '2c91808568c529c60168cca6f90c1313', )
                    ]
)

```
[[Back to top]](#) 

