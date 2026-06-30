---
id: sodexemptcriteria
title: Sodexemptcriteria
pagination_label: Sodexemptcriteria
sidebar_label: Sodexemptcriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sodexemptcriteria', 'Sodexemptcriteria'] 
slug: /tools/sdk/powershell/accessrequests/models/sodexemptcriteria
tags: ['SDK', 'Software Development Kit', 'Sodexemptcriteria', 'Sodexemptcriteria']
---


# Sodexemptcriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Existing** | **Boolean** | If the entitlement already belonged to the user or not. | [optional] [default to $false]
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | Entitlement ID | [optional] 
**Name** | **String** | Entitlement name | [optional] 

## Examples

- Prepare the resource
```powershell
$Sodexemptcriteria = Initialize-Sodexemptcriteria  -Existing true `
 -Type null `
 -Id 2c918085771e9d3301773b3cb66f6398 `
 -Name My HR Entitlement
```

- Convert the resource to JSON
```powershell
$Sodexemptcriteria | ConvertTo-JSON
```


[[Back to top]](#) 

