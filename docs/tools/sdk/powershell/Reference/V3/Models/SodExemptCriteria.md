---
id: sod-exempt-criteria
title: SodExemptCriteria
pagination_label: SodExemptCriteria
sidebar_label: SodExemptCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodExemptCriteria', 'SodExemptCriteria'] 
slug: /tools/sdk/powershell/v3/models/sod-exempt-criteria
tags: ['SDK', 'Software Development Kit', 'SodExemptCriteria', 'SodExemptCriteria']
---


# SodExemptCriteria

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
$SodExemptCriteria = Initialize-SodExemptCriteria  -Existing true `
 -Type null `
 -Id 2c918085771e9d3301773b3cb66f6398 `
 -Name My HR Entitlement
```

- Convert the resource to JSON
```powershell
$SodExemptCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

