---
id: accessitemref
title: Accessitemref
pagination_label: Accessitemref
sidebar_label: Accessitemref
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessitemref', 'Accessitemref'] 
slug: /tools/sdk/powershell/iairecommendations/models/accessitemref
tags: ['SDK', 'Software Development Kit', 'Accessitemref', 'Accessitemref']
---


# Accessitemref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the access item to retrieve the recommendation for. | [optional] 
**Type** |  **Enum** [  "ENTITLEMENT",    "ACCESS_PROFILE",    "ROLE" ] | Access item's type. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessitemref = Initialize-Accessitemref  -Id 2c938083633d259901633d2623ec0375 `
 -Type ENTITLEMENT
```

- Convert the resource to JSON
```powershell
$Accessitemref | ConvertTo-JSON
```


[[Back to top]](#) 

