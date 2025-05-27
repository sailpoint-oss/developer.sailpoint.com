---
id: requested-item-details
title: RequestedItemDetails
pagination_label: RequestedItemDetails
sidebar_label: RequestedItemDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedItemDetails', 'RequestedItemDetails'] 
slug: /tools/sdk/powershell/v3/models/requested-item-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemDetails', 'RequestedItemDetails']
---


# RequestedItemDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ENTITLEMENT",    "ROLE" ] | The type of access item requested. | [optional] 
**Id** | **String** | The id of the access item requested. | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestedItemDetails = Initialize-RequestedItemDetails  -Type ENTITLEMENT `
 -Id 779c6fd7171540bba1184e5946112c28
```

- Convert the resource to JSON
```powershell
$RequestedItemDetails | ConvertTo-JSON
```


[[Back to top]](#) 

