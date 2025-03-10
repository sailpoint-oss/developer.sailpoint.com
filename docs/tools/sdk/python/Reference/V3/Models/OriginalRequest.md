---
id: original-request
title: OriginalRequest
pagination_label: OriginalRequest
sidebar_label: OriginalRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OriginalRequest', 'OriginalRequest'] 
slug: /tools/sdk/python/v3/models/original-request
tags: ['SDK', 'Software Development Kit', 'OriginalRequest', 'OriginalRequest']
---

# OriginalRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID. | [optional] 
**result** | [**Result**](result) |  | [optional] 
**attribute_requests** | [**[]AttributeRequest**](attribute-request) | Attribute changes requested for account. | [optional] 
**op** | **str** | Operation used. | [optional] 
**source** | [**AccountSource**](account-source) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.original_request import OriginalRequest

original_request = OriginalRequest(
account_id='CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com',
result=sailpoint.v3.models.result.Result(
                    status = 'Manual Task Created', ),
attribute_requests=[
                    sailpoint.v3.models.attribute_request.AttributeRequest(
                        name = 'groups', 
                        op = 'Add', 
                        value = null, )
                    ],
op='add',
source=
)

```
[[Back to top]](#) 

