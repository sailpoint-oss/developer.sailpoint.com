---
id: entitlementconnectionbulkupdateresultitem
title: Entitlementconnectionbulkupdateresultitem
pagination_label: Entitlementconnectionbulkupdateresultitem
sidebar_label: Entitlementconnectionbulkupdateresultitem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementconnectionbulkupdateresultitem', 'Entitlementconnectionbulkupdateresultitem'] 
slug: /tools/sdk/powershell/entitlementconnections/models/entitlementconnectionbulkupdateresultitem
tags: ['SDK', 'Software Development Kit', 'Entitlementconnectionbulkupdateresultitem', 'Entitlementconnectionbulkupdateresultitem']
---


# Entitlementconnectionbulkupdateresultitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **String** | Connection ID processed in this row. | [optional] 
**Type** | **String** | Requested or resulting connection type for the row. | [optional] 
**Status** | **Int32** | Item-level result status code. | [optional] 
**Description** | **String** | Item-level result message. | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlementconnectionbulkupdateresultitem = Initialize-Entitlementconnectionbulkupdateresultitem  -ConnectionId d532fa5cb15748e2873c6a01e5923ec4 `
 -Type JIT `
 -Status 201 `
 -Description success
```

- Convert the resource to JSON
```powershell
$Entitlementconnectionbulkupdateresultitem | ConvertTo-JSON
```


[[Back to top]](#) 

