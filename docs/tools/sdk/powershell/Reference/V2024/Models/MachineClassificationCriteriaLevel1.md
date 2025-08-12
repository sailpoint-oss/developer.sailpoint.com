---
id: v2024-machine-classification-criteria-level1
title: MachineClassificationCriteriaLevel1
pagination_label: MachineClassificationCriteriaLevel1
sidebar_label: MachineClassificationCriteriaLevel1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineClassificationCriteriaLevel1', 'V2024MachineClassificationCriteriaLevel1'] 
slug: /tools/sdk/powershell/v2024/models/machine-classification-criteria-level1
tags: ['SDK', 'Software Development Kit', 'MachineClassificationCriteriaLevel1', 'V2024MachineClassificationCriteriaLevel1']
---


# MachineClassificationCriteriaLevel1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | [**MachineClassificationCriteriaOperation**](machine-classification-criteria-operation) |  | [optional] 
**CaseSensitive** | **Boolean** | Indicates whether case matters when evaluating the criteria | [optional] [default to $false]
**DataType** | **String** | The data type of the attribute being evaluated | [optional] 
**Attribute** | **String** | The attribute to evaluate in the classification criteria | [optional] 
**Value** | **String** | The value to compare against the attribute in the classification criteria | [optional] 
**Children** | [**[]MachineClassificationCriteriaLevel2**](machine-classification-criteria-level2) | An array of child classification criteria objects | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineClassificationCriteriaLevel1 = Initialize-V2024MachineClassificationCriteriaLevel1  -Operation null `
 -CaseSensitive false `
 -DataType null `
 -Attribute distinguishedName `
 -Value OU=Service Accounts `
 -Children null
```

- Convert the resource to JSON
```powershell
$MachineClassificationCriteriaLevel1 | ConvertTo-JSON
```


[[Back to top]](#) 

