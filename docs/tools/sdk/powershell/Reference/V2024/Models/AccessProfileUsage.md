---
id: v2024-access-profile-usage
title: AccessProfileUsage
pagination_label: AccessProfileUsage
sidebar_label: AccessProfileUsage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileUsage', 'V2024AccessProfileUsage'] 
slug: /tools/sdk/powershell/v2024/models/access-profile-usage
tags: ['SDK', 'Software Development Kit', 'AccessProfileUsage', 'V2024AccessProfileUsage']
---


# AccessProfileUsage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessProfileId** |  Pointer to **String** | ID of the Access Profile that is in use | [optional] 
**UsedBy** |  Pointer to [**[]AccessProfileUsageUsedByInner**](access-profile-usage-used-by-inner) | List of references to objects which are using the indicated Access Profile | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileUsage = Initialize-PSSailpoint.V2024AccessProfileUsage  -AccessProfileId 2c91808876438bbb017668c21919ecca `
 -UsedBy null
```

- Convert the resource to JSON
```powershell
$AccessProfileUsage | ConvertTo-JSON
```


[[Back to top]](#) 

