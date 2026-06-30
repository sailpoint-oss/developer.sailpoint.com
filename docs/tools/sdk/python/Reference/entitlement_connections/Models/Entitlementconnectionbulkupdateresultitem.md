---
id: entitlementconnectionbulkupdateresultitem
title: Entitlementconnectionbulkupdateresultitem
pagination_label: Entitlementconnectionbulkupdateresultitem
sidebar_label: Entitlementconnectionbulkupdateresultitem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementconnectionbulkupdateresultitem', 'Entitlementconnectionbulkupdateresultitem'] 
slug: /tools/sdk/python/entitlement-connections/models/entitlementconnectionbulkupdateresultitem
tags: ['SDK', 'Software Development Kit', 'Entitlementconnectionbulkupdateresultitem', 'Entitlementconnectionbulkupdateresultitem']
---

# Entitlementconnectionbulkupdateresultitem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_id** | **str** | Connection ID processed in this row. | [optional] 
**type** | **str** | Requested or resulting connection type for the row. | [optional] 
**status** | **int** | Item-level result status code. | [optional] 
**description** | **str** | Item-level result message. | [optional] 
}

## Example

```python
from sailpoint.entitlement_connections.models.entitlementconnectionbulkupdateresultitem import Entitlementconnectionbulkupdateresultitem

entitlementconnectionbulkupdateresultitem = Entitlementconnectionbulkupdateresultitem(
connection_id='d532fa5cb15748e2873c6a01e5923ec4',
type='JIT',
status=201,
description='success'
)

```
[[Back to top]](#) 

