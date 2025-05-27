---
id: v2024-license
title: License
pagination_label: License
sidebar_label: License
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'License', 'V2024License'] 
slug: /tools/sdk/powershell/v2024/models/license
tags: ['SDK', 'Software Development Kit', 'License', 'V2024License']
---


# License

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LicenseId** | **String** | Name of the license | [optional] 
**LegacyFeatureName** | **String** | Legacy name of the license | [optional] 

## Examples

- Prepare the resource
```powershell
$License = Initialize-V2024License  -LicenseId idn:access-request `
 -LegacyFeatureName ACCESS_REQUEST
```

- Convert the resource to JSON
```powershell
$License | ConvertTo-JSON
```


[[Back to top]](#) 

