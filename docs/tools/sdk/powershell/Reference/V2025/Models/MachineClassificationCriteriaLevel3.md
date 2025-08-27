---
id: v2025-machine-classification-criteria-level3
title: MachineClassificationCriteriaLevel3
pagination_label: MachineClassificationCriteriaLevel3
sidebar_label: MachineClassificationCriteriaLevel3
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineClassificationCriteriaLevel3', 'V2025MachineClassificationCriteriaLevel3'] 
slug: /tools/sdk/powershell/v2025/models/machine-classification-criteria-level3
tags: ['SDK', 'Software Development Kit', 'MachineClassificationCriteriaLevel3', 'V2025MachineClassificationCriteriaLevel3']
---


# MachineClassificationCriteriaLevel3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | [**MachineClassificationCriteriaOperation**](machine-classification-criteria-operation) |  | [optional] 
**CaseSensitive** | **Boolean** | Indicates whether or not case matters when evaluating the criteria | [optional] [default to $false]
**DataType** | **String** | The data type of the attribute being evaluated | [optional] 
**Attribute** | **String** | The attribute to evaluate in the classification criteria | [optional] 
**Value** | **String** | The value to compare against the attribute in the classification criteria | [optional] 
**Children** | **[]String** | An array of child classification criteria objects | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineClassificationCriteriaLevel3 = Initialize-V2025MachineClassificationCriteriaLevel3  -Operation null `
 -CaseSensitive false `
 -DataType null `
 -Attribute sAMAccountName `
 -Value SVC `
 -Children null
```

- Convert the resource to JSON
```powershell
$MachineClassificationCriteriaLevel3 | ConvertTo-JSON
```


[[Back to top]](#) 

