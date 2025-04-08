---
id: v2025-requested-account-ref
title: RequestedAccountRef
pagination_label: RequestedAccountRef
sidebar_label: RequestedAccountRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestedAccountRef', 'V2025RequestedAccountRef'] 
slug: /tools/sdk/python/v2025/models/requested-account-ref
tags: ['SDK', 'Software Development Kit', 'RequestedAccountRef', 'V2025RequestedAccountRef']
---

# RequestedAccountRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Display name of the account for the user | [optional] 
**type** | [**DtoType**](dto-type) |  | [optional] 
**account_uuid** | **str** | The uuid for the account | [optional] 
**account_id** | **str** | The native identity for the account | [optional] 
**source_name** | **str** | Display name of the source for the account | [optional] 
}

## Example

```python
from sailpoint.v2025.models.requested_account_ref import RequestedAccountRef

requested_account_ref = RequestedAccountRef(
name='Glen.067da3248e914',
type='IDENTITY',
account_uuid='{fab7119e-004f-4822-9c33-b8d570d6c6a6}',
account_id='CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local',
source_name='Multi Account AD source name'
)

```
[[Back to top]](#) 

