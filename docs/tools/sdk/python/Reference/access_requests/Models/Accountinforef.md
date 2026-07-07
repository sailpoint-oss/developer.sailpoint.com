---
id: accountinforef
title: Accountinforef
pagination_label: Accountinforef
sidebar_label: Accountinforef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountinforef', 'Accountinforef'] 
slug: /tools/sdk/python/access-requests/models/accountinforef
tags: ['SDK', 'Software Development Kit', 'Accountinforef', 'Accountinforef']
---

# Accountinforef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** | The uuid for the account, available under the 'objectguid' attribute | [optional] 
**native_identity** | **str** | The 'distinguishedName' attribute for the account | [optional] 
**type** | [**Dtotype**](dtotype) |  | [optional] 
**id** | **str** | The account id | [optional] 
**name** | **str** | The account display name | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.accountinforef import Accountinforef

accountinforef = Accountinforef(
uuid='{fab7119e-004f-4822-9c33-b8d570d6c6a6}',
native_identity='CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local',
type='IDENTITY',
id='f19d168c27374fd1aff3b483573f997f',
name='UserAccount.761a2248b'
)

```
[[Back to top]](#) 

