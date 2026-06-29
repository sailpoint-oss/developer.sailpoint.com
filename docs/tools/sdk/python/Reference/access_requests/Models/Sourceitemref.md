---
id: sourceitemref
title: Sourceitemref
pagination_label: Sourceitemref
sidebar_label: Sourceitemref
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sourceitemref', 'Sourceitemref'] 
slug: /tools/sdk/python/access-requests/models/sourceitemref
tags: ['SDK', 'Software Development Kit', 'Sourceitemref', 'Sourceitemref']
---

# Sourceitemref


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_id** | **str** | The id for the source on which account selections are made | [optional] 
**accounts** | [**[]Accountitemref**](accountitemref) | A list of account selections on the source. Currently, only one selection per source is supported. | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.sourceitemref import Sourceitemref

sourceitemref = Sourceitemref(
source_id='cb89bc2f1ee6445fbea12224c526ba3a',
accounts=[
                    sailpoint.access_requests.models.accountitemref.accountitemref(
                        account_uuid = '{fab7119e-004f-4822-9c33-b8d570d6c6a6}', 
                        native_identity = 'CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local', )
                    ]
)

```
[[Back to top]](#) 

