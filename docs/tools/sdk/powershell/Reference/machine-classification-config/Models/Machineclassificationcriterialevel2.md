---
id: machineclassificationcriterialevel2
title: Machineclassificationcriterialevel2
pagination_label: Machineclassificationcriterialevel2
sidebar_label: Machineclassificationcriterialevel2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Machineclassificationcriterialevel2', 'Machineclassificationcriterialevel2'] 
slug: /tools/sdk/powershell/machineclassificationconfig/models/machineclassificationcriterialevel2
tags: ['SDK', 'Software Development Kit', 'Machineclassificationcriterialevel2', 'Machineclassificationcriterialevel2']
---


# Machineclassificationcriterialevel2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | [**Machineclassificationcriteriaoperation**](machineclassificationcriteriaoperation) |  | [optional] 
**CaseSensitive** | **Boolean** | Indicates whether case matters when evaluating the criteria | [optional] [default to $false]
**DataType** | **String** | The data type of the attribute being evaluated | [optional] 
**Attribute** | **String** | The attribute to evaluate in the classification criteria | [optional] 
**Value** | **String** | The value to compare against the attribute in the classification criteria | [optional] 
**Children** | [**[]Machineclassificationcriterialevel3**](machineclassificationcriterialevel3) | An array of child classification criteria objects | [optional] 

## Examples

- Prepare the resource
```powershell
$Machineclassificationcriterialevel2 = Initialize-Machineclassificationcriterialevel2  -Operation null `
 -CaseSensitive false `
 -DataType null `
 -Attribute employeeType `
 -Value SERVICE `
 -Children null
```

- Convert the resource to JSON
```powershell
$Machineclassificationcriterialevel2 | ConvertTo-JSON
```


[[Back to top]](#) 

