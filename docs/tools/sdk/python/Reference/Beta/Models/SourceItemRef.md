---
id: beta-source-item-ref
title: SourceItemRef
pagination_label: SourceItemRef
sidebar_label: SourceItemRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceItemRef', 'BetaSourceItemRef'] 
slug: /tools/sdk/python/beta/models/source-item-ref
tags: ['SDK', 'Software Development Kit', 'SourceItemRef', 'BetaSourceItemRef']
---

# SourceItemRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_id** | **str** | The id for the source on which account selections are made | [optional] 
**accounts** | [**[]AccountItemRef**](account-item-ref) | A list of account selections on the source. Currently, only one selection per source is supported. | [optional] 
}

## Example

```python
from sailpoint.beta.models.source_item_ref import SourceItemRef

source_item_ref = SourceItemRef(
source_id='cb89bc2f1ee6445fbea12224c526ba3a',
accounts=[
                    sailpoint.beta.models.account_item_ref.AccountItemRef(
                        account_uuid = '{fab7119e-004f-4822-9c33-b8d570d6c6a6}', 
                        native_identity = 'CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local', )
                    ]
)

```
[[Back to top]](#) 

