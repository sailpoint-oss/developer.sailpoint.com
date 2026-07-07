---
id: accountitemref
title: Accountitemref
pagination_label: Accountitemref
sidebar_label: Accountitemref
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountitemref', 'Accountitemref'] 
slug: /tools/sdk/python/access-requests/models/accountitemref
tags: ['SDK', 'Software Development Kit', 'Accountitemref', 'Accountitemref']
---

# Accountitemref


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_uuid** | **str** | The uuid for the account, available under the 'objectguid' attribute | [optional] 
**native_identity** | **str** | The 'distinguishedName' attribute for the account | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.accountitemref import Accountitemref

accountitemref = Accountitemref(
account_uuid='{fab7119e-004f-4822-9c33-b8d570d6c6a6}',
native_identity='CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local'
)

```
[[Back to top]](#) 

