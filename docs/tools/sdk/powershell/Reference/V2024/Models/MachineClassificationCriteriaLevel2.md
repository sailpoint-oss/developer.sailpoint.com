---
id: v2024-machine-classification-criteria-level2
title: MachineClassificationCriteriaLevel2
pagination_label: MachineClassificationCriteriaLevel2
sidebar_label: MachineClassificationCriteriaLevel2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineClassificationCriteriaLevel2', 'V2024MachineClassificationCriteriaLevel2'] 
slug: /tools/sdk/powershell/v2024/models/machine-classification-criteria-level2
tags: ['SDK', 'Software Development Kit', 'MachineClassificationCriteriaLevel2', 'V2024MachineClassificationCriteriaLevel2']
---


# MachineClassificationCriteriaLevel2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | [**MachineClassificationCriteriaOperation**](machine-classification-criteria-operation) |  | [optional] 
**CaseSensitive** | **Boolean** | Indicates whether case matters when evaluating the criteria | [optional] [default to $false]
**DataType** | **String** | The data type of the attribute being evaluated | [optional] 
**Attribute** | **String** | The attribute to evaluate in the classification criteria | [optional] 
**Value** | **String** | The value to compare against the attribute in the classification criteria | [optional] 
**Children** | [**[]MachineClassificationCriteriaLevel3**](machine-classification-criteria-level3) | An array of child classification criteria objects | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineClassificationCriteriaLevel2 = Initialize-V2024MachineClassificationCriteriaLevel2  -Operation null `
 -CaseSensitive false `
 -DataType null `
 -Attribute employeeType `
 -Value SERVICE `
 -Children null
```

- Convert the resource to JSON
```powershell
$MachineClassificationCriteriaLevel2 | ConvertTo-JSON
```


[[Back to top]](#) 

