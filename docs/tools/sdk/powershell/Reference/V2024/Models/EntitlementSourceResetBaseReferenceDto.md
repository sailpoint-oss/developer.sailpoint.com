---
id: v2024-entitlement-source-reset-base-reference-dto
title: EntitlementSourceResetBaseReferenceDto
pagination_label: EntitlementSourceResetBaseReferenceDto
sidebar_label: EntitlementSourceResetBaseReferenceDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementSourceResetBaseReferenceDto', 'V2024EntitlementSourceResetBaseReferenceDto'] 
slug: /tools/sdk/powershell/v2024/models/entitlement-source-reset-base-reference-dto
tags: ['SDK', 'Software Development Kit', 'EntitlementSourceResetBaseReferenceDto', 'V2024EntitlementSourceResetBaseReferenceDto']
---


# EntitlementSourceResetBaseReferenceDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | The DTO type | [optional] 
**Id** | **String** | The task ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementSourceResetBaseReferenceDto = Initialize-V2024EntitlementSourceResetBaseReferenceDto  -Type TASK_RESULT `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Entitlement Source Reset
```

- Convert the resource to JSON
```powershell
$EntitlementSourceResetBaseReferenceDto | ConvertTo-JSON
```


[[Back to top]](#) 

