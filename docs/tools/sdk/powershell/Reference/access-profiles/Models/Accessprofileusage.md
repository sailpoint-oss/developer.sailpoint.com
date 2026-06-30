---
id: accessprofileusage
title: Accessprofileusage
pagination_label: Accessprofileusage
sidebar_label: Accessprofileusage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessprofileusage', 'Accessprofileusage'] 
slug: /tools/sdk/powershell/accessprofiles/models/accessprofileusage
tags: ['SDK', 'Software Development Kit', 'Accessprofileusage', 'Accessprofileusage']
---


# Accessprofileusage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessProfileId** | **String** | ID of the Access Profile that is in use | [optional] 
**UsedBy** | [**[]AccessprofileusageUsedByInner**](accessprofileusage-used-by-inner) | List of references to objects which are using the indicated Access Profile | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessprofileusage = Initialize-Accessprofileusage  -AccessProfileId 2c91808876438bbb017668c21919ecca `
 -UsedBy null
```

- Convert the resource to JSON
```powershell
$Accessprofileusage | ConvertTo-JSON
```


[[Back to top]](#) 

