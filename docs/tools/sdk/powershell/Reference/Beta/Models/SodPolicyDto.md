---
id: beta-sod-policy-dto
title: SodPolicyDto
pagination_label: SodPolicyDto
sidebar_label: SodPolicyDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodPolicyDto', 'BetaSodPolicyDto'] 
slug: /tools/sdk/powershell/beta/models/sod-policy-dto
tags: ['SDK', 'Software Development Kit', 'SodPolicyDto', 'BetaSodPolicyDto']
---


# SodPolicyDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOD_POLICY" ] | SOD policy DTO type. | [optional] 
**Id** | **String** | SOD policy ID. | [optional] 
**Name** | **String** | SOD policy display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SodPolicyDto = Initialize-PSSailpoint.BetaSodPolicyDto  -Type SOD_POLICY `
 -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Name Business SOD Policy
```

- Convert the resource to JSON
```powershell
$SodPolicyDto | ConvertTo-JSON
```


[[Back to top]](#) 

