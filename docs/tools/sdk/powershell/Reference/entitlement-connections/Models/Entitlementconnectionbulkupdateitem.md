---
id: entitlementconnectionbulkupdateitem
title: Entitlementconnectionbulkupdateitem
pagination_label: Entitlementconnectionbulkupdateitem
sidebar_label: Entitlementconnectionbulkupdateitem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementconnectionbulkupdateitem', 'Entitlementconnectionbulkupdateitem'] 
slug: /tools/sdk/powershell/entitlementconnections/models/entitlementconnectionbulkupdateitem
tags: ['SDK', 'Software Development Kit', 'Entitlementconnectionbulkupdateitem', 'Entitlementconnectionbulkupdateitem']
---


# Entitlementconnectionbulkupdateitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **String** | Connection ID to update. | [required]
**Type** |  **Enum** [  "JIT",    "STANDING" ] | Target connection type. | [required]

## Examples

- Prepare the resource
```powershell
$Entitlementconnectionbulkupdateitem = Initialize-Entitlementconnectionbulkupdateitem  -ConnectionId d532fa5cb15748e2873c6a01e5923ec4 `
 -Type JIT
```

- Convert the resource to JSON
```powershell
$Entitlementconnectionbulkupdateitem | ConvertTo-JSON
```


[[Back to top]](#) 

