---
id: beta-sod-exempt-criteria1
title: SodExemptCriteria1
pagination_label: SodExemptCriteria1
sidebar_label: SodExemptCriteria1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodExemptCriteria1', 'BetaSodExemptCriteria1'] 
slug: /tools/sdk/powershell/beta/models/sod-exempt-criteria1
tags: ['SDK', 'Software Development Kit', 'SodExemptCriteria1', 'BetaSodExemptCriteria1']
---


# SodExemptCriteria1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Existing** | **Boolean** | If the entitlement already belonged to the user or not. | [optional] [default to $false]
**Type** | [**DtoType**](dto-type) |  | [optional] 
**Id** | **String** | Entitlement ID | [optional] 
**Name** | **String** | Entitlement name | [optional] 

## Examples

- Prepare the resource
```powershell
$SodExemptCriteria1 = Initialize-PSSailpoint.BetaSodExemptCriteria1  -Existing true `
 -Type null `
 -Id 2c918085771e9d3301773b3cb66f6398 `
 -Name My HR Entitlement
```

- Convert the resource to JSON
```powershell
$SodExemptCriteria1 | ConvertTo-JSON
```


[[Back to top]](#) 

