---
id: access-profile-usage
title: AccessProfileUsage
pagination_label: AccessProfileUsage
sidebar_label: AccessProfileUsage
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessProfileUsage'] 
slug: /tools/sdk/powershell/v3/models/access-profile-usage
tags: ['SDK', 'Software Development Kit', 'AccessProfileUsage']
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
$AccessProfileUsage = Initialize-AccessProfileUsage  -AccessProfileId 2c91808876438bbb017668c21919ecca `
 -UsedBy null
```

- Convert the resource to JSON
```powershell
$AccessProfileUsage | ConvertTo-JSON
```


[[Back to top]](#) 

