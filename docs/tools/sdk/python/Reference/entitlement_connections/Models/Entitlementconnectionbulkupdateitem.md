---
id: entitlementconnectionbulkupdateitem
title: Entitlementconnectionbulkupdateitem
pagination_label: Entitlementconnectionbulkupdateitem
sidebar_label: Entitlementconnectionbulkupdateitem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementconnectionbulkupdateitem', 'Entitlementconnectionbulkupdateitem'] 
slug: /tools/sdk/python/entitlement-connections/models/entitlementconnectionbulkupdateitem
tags: ['SDK', 'Software Development Kit', 'Entitlementconnectionbulkupdateitem', 'Entitlementconnectionbulkupdateitem']
---

# Entitlementconnectionbulkupdateitem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_id** | **str** | Connection ID to update. | [required]
**type** |  **Enum** [  'JIT',    'STANDING' ] | Target connection type. | [required]
}

## Example

```python
from sailpoint.entitlement_connections.models.entitlementconnectionbulkupdateitem import Entitlementconnectionbulkupdateitem

entitlementconnectionbulkupdateitem = Entitlementconnectionbulkupdateitem(
connection_id='d532fa5cb15748e2873c6a01e5923ec4',
type='JIT'
)

```
[[Back to top]](#) 

