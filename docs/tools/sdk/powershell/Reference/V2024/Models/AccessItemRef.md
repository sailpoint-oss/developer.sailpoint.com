---
id: v2024-access-item-ref
title: AccessItemRef
pagination_label: AccessItemRef
sidebar_label: AccessItemRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemRef', 'V2024AccessItemRef'] 
slug: /tools/sdk/powershell/v2024/models/access-item-ref
tags: ['SDK', 'Software Development Kit', 'AccessItemRef', 'V2024AccessItemRef']
---


# AccessItemRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the access item to retrieve the recommendation for. | [optional] 
**Type** |  **Enum** [  "ENTITLEMENT",    "ACCESS_PROFILE",    "ROLE" ] | Access item's type. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemRef = Initialize-PSSailpoint.V2024AccessItemRef  -Id 2c938083633d259901633d2623ec0375 `
 -Type ENTITLEMENT
```

- Convert the resource to JSON
```powershell
$AccessItemRef | ConvertTo-JSON
```


[[Back to top]](#) 

