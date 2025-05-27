---
id: beta-access-profile-usage
title: AccessProfileUsage
pagination_label: AccessProfileUsage
sidebar_label: AccessProfileUsage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileUsage', 'BetaAccessProfileUsage'] 
slug: /tools/sdk/powershell/beta/models/access-profile-usage
tags: ['SDK', 'Software Development Kit', 'AccessProfileUsage', 'BetaAccessProfileUsage']
---


# AccessProfileUsage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessProfileId** | **String** | ID of the Access Profile that is in use | [optional] 
**UsedBy** | [**[]AccessProfileUsageUsedByInner**](access-profile-usage-used-by-inner) | List of references to objects which are using the indicated Access Profile | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileUsage = Initialize-BetaAccessProfileUsage  -AccessProfileId 2c91808876438bbb017668c21919ecca `
 -UsedBy null
```

- Convert the resource to JSON
```powershell
$AccessProfileUsage | ConvertTo-JSON
```


[[Back to top]](#) 

