---
id: v2024-sod-policy-dto1
title: SodPolicyDto1
pagination_label: SodPolicyDto1
sidebar_label: SodPolicyDto1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodPolicyDto1', 'V2024SodPolicyDto1'] 
slug: /tools/sdk/powershell/v2024/models/sod-policy-dto1
tags: ['SDK', 'Software Development Kit', 'SodPolicyDto1', 'V2024SodPolicyDto1']
---


# SodPolicyDto1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOD_POLICY" ] | SOD policy DTO type. | [optional] 
**Id** | **String** | SOD policy ID. | [optional] 
**Name** | **String** | SOD policy display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SodPolicyDto1 = Initialize-V2024SodPolicyDto1  -Type SOD_POLICY `
 -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Name Business SOD Policy
```

- Convert the resource to JSON
```powershell
$SodPolicyDto1 | ConvertTo-JSON
```


[[Back to top]](#) 

