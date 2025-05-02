---
id: account-item-ref
title: AccountItemRef
pagination_label: AccountItemRef
sidebar_label: AccountItemRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountItemRef', 'AccountItemRef'] 
slug: /tools/sdk/python/v3/models/account-item-ref
tags: ['SDK', 'Software Development Kit', 'AccountItemRef', 'AccountItemRef']
---

# AccountItemRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_uuid** | **str** | The uuid for the account, available under the 'objectguid' attribute | [optional] 
**native_identity** | **str** | The 'distinguishedName' attribute for the account | [optional] 
}

## Example

```python
from sailpoint.v3.models.account_item_ref import AccountItemRef

account_item_ref = AccountItemRef(
account_uuid='{fab7119e-004f-4822-9c33-b8d570d6c6a6}',
native_identity='CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local'
)

```
[[Back to top]](#) 

