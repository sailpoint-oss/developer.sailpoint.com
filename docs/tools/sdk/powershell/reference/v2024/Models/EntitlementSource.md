---
id: v2024-entitlement-source
title: EntitlementSource
pagination_label: EntitlementSource
sidebar_label: EntitlementSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementSource'] 
slug: /tools/sdk/powershell/v2024/models/entitlement-source
tags: ['SDK', 'Software Development Kit', 'EntitlementSource']
---


# EntitlementSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The source ID | [optional] 
**Type** |  Pointer to **String** | The source type, will always be ""SOURCE"" | [optional] 
**Name** |  Pointer to **String** | The source name | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementSource = Initialize-PSSailpoint.V2024EntitlementSource  -Id 2c9180827ca885d7017ca8ce28a000eb `
 -Type SOURCE `
 -Name ODS-AD-Source
```

- Convert the resource to JSON
```powershell
$EntitlementSource | ConvertTo-JSON
```


[[Back to top]](#) 

