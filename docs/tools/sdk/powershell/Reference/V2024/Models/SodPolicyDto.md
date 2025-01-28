---
id: v2024-sod-policy-dto
title: SodPolicyDto
pagination_label: SodPolicyDto
sidebar_label: SodPolicyDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodPolicyDto', 'V2024SodPolicyDto'] 
slug: /tools/sdk/powershell/v2024/models/sod-policy-dto
tags: ['SDK', 'Software Development Kit', 'SodPolicyDto', 'V2024SodPolicyDto']
---


# SodPolicyDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "SOD_POLICY" ] | SOD policy DTO type. | [optional] 
**Id** |  Pointer to **String** | SOD policy ID. | [optional] 
**Name** |  Pointer to **String** | SOD policy display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SodPolicyDto = Initialize-PSSailpoint.V2024SodPolicyDto  -Type SOD_POLICY `
 -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Name Business SOD Policy
```

- Convert the resource to JSON
```powershell
$SodPolicyDto | ConvertTo-JSON
```


[[Back to top]](#) 

