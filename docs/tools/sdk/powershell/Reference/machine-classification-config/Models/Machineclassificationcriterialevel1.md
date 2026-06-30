---
id: machineclassificationcriterialevel1
title: Machineclassificationcriterialevel1
pagination_label: Machineclassificationcriterialevel1
sidebar_label: Machineclassificationcriterialevel1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Machineclassificationcriterialevel1', 'Machineclassificationcriterialevel1'] 
slug: /tools/sdk/powershell/machineclassificationconfig/models/machineclassificationcriterialevel1
tags: ['SDK', 'Software Development Kit', 'Machineclassificationcriterialevel1', 'Machineclassificationcriterialevel1']
---


# Machineclassificationcriterialevel1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | [**Machineclassificationcriteriaoperation**](machineclassificationcriteriaoperation) |  | [optional] 
**CaseSensitive** | **Boolean** | Indicates whether case matters when evaluating the criteria | [optional] [default to $false]
**DataType** | **String** | The data type of the attribute being evaluated | [optional] 
**Attribute** | **String** | The attribute to evaluate in the classification criteria | [optional] 
**Value** | **String** | The value to compare against the attribute in the classification criteria | [optional] 
**Children** | [**[]Machineclassificationcriterialevel2**](machineclassificationcriterialevel2) | An array of child classification criteria objects | [optional] 

## Examples

- Prepare the resource
```powershell
$Machineclassificationcriterialevel1 = Initialize-Machineclassificationcriterialevel1  -Operation null `
 -CaseSensitive false `
 -DataType null `
 -Attribute distinguishedName `
 -Value OU=Service Accounts `
 -Children null
```

- Convert the resource to JSON
```powershell
$Machineclassificationcriterialevel1 | ConvertTo-JSON
```


[[Back to top]](#) 

