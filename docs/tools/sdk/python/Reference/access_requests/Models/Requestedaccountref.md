---
id: requestedaccountref
title: Requestedaccountref
pagination_label: Requestedaccountref
sidebar_label: Requestedaccountref
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Requestedaccountref', 'Requestedaccountref'] 
slug: /tools/sdk/python/access-requests/models/requestedaccountref
tags: ['SDK', 'Software Development Kit', 'Requestedaccountref', 'Requestedaccountref']
---

# Requestedaccountref


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Display name of the account for the user | [optional] 
**type** | [**Dtotype**](dtotype) |  | [optional] 
**account_uuid** | **str** | The uuid for the account | [optional] 
**account_id** | **str** | The native identity for the account | [optional] 
**source_name** | **str** | Display name of the source for the account | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.requestedaccountref import Requestedaccountref

requestedaccountref = Requestedaccountref(
name='Glen.067da3248e914',
type='IDENTITY',
account_uuid='{fab7119e-004f-4822-9c33-b8d570d6c6a6}',
account_id='CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local',
source_name='Multi Account AD source name'
)

```
[[Back to top]](#) 

