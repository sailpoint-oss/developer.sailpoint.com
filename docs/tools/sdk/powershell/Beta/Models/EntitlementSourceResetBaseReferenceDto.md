---
id: entitlement-source-reset-base-reference-dto
title: EntitlementSourceResetBaseReferenceDto
pagination_label: EntitlementSourceResetBaseReferenceDto
sidebar_label: EntitlementSourceResetBaseReferenceDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'EntitlementSourceResetBaseReferenceDto'] 
slug: /tools/sdk/powershell/beta/models/entitlement-source-reset-base-reference-dto
tags: ['SDK', 'Software Development Kit', 'EntitlementSourceResetBaseReferenceDto']
---


# EntitlementSourceResetBaseReferenceDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **String** | The DTO type | [optional] 
**Id** |  Pointer to **String** | The task ID of the object to which this reference applies | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementSourceResetBaseReferenceDto = Initialize-BetaEntitlementSourceResetBaseReferenceDto  -Type TASK_RESULT `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Entitlement Source Reset
```

- Convert the resource to JSON
```powershell
$EntitlementSourceResetBaseReferenceDto | ConvertTo-JSON
```


[[Back to top]](#) 

