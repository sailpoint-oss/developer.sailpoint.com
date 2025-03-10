---
id: beta-list-predefined-select-options-response
title: ListPredefinedSelectOptionsResponse
pagination_label: ListPredefinedSelectOptionsResponse
sidebar_label: ListPredefinedSelectOptionsResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ListPredefinedSelectOptionsResponse', 'BetaListPredefinedSelectOptionsResponse'] 
slug: /tools/sdk/python/beta/models/list-predefined-select-options-response
tags: ['SDK', 'Software Development Kit', 'ListPredefinedSelectOptionsResponse', 'BetaListPredefinedSelectOptionsResponse']
---

# ListPredefinedSelectOptionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | **[]str** | Results holds a list of PreDefinedSelectOption items | [optional] 
}

## Example

```python
from sailpoint.beta.models.list_predefined_select_options_response import ListPredefinedSelectOptionsResponse

list_predefined_select_options_response = ListPredefinedSelectOptionsResponse(
results=[
                    'IDENTITY'
                    ]
)

```
[[Back to top]](#) 

