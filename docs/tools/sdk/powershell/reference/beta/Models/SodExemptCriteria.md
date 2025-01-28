---
id: beta-sod-exempt-criteria
title: SodExemptCriteria
pagination_label: SodExemptCriteria
sidebar_label: SodExemptCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodExemptCriteria', 'BetaSodExemptCriteria'] 
slug: /tools/sdk/powershell/beta/models/sod-exempt-criteria
tags: ['SDK', 'Software Development Kit', 'SodExemptCriteria', 'BetaSodExemptCriteria']
---


# SodExemptCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Existing** |  Pointer to **Boolean** | If the entitlement already belonged to the user or not. | [optional] [default to $false]
**Type** |  Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** |  Pointer to **String** | Entitlement ID | [optional] 
**Name** |  Pointer to **String** | Entitlement name | [optional] 

## Examples

- Prepare the resource
```powershell
$SodExemptCriteria = Initialize-PSSailpoint.BetaSodExemptCriteria  -Existing true `
 -Type null `
 -Id 2c918085771e9d3301773b3cb66f6398 `
 -Name My HR Entitlement
```

- Convert the resource to JSON
```powershell
$SodExemptCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

