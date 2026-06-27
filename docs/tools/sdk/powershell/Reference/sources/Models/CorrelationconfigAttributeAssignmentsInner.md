---
id: correlationconfig-attribute-assignments-inner
title: CorrelationconfigAttributeAssignmentsInner
pagination_label: CorrelationconfigAttributeAssignmentsInner
sidebar_label: CorrelationconfigAttributeAssignmentsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CorrelationconfigAttributeAssignmentsInner', 'CorrelationconfigAttributeAssignmentsInner'] 
slug: /tools/sdk/powershell/sources/models/correlationconfig-attribute-assignments-inner
tags: ['SDK', 'Software Development Kit', 'CorrelationconfigAttributeAssignmentsInner', 'CorrelationconfigAttributeAssignmentsInner']
---


# CorrelationconfigAttributeAssignmentsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Property** | **String** | The property of the attribute assignment. | [optional] 
**Value** | **String** | The value of the attribute assignment. | [optional] 
**Operation** |  **Enum** [  "EQ" ] | The operation of the attribute assignment. | [optional] 
**Complex** | **Boolean** | Whether or not the it's a complex attribute assignment. | [optional] [default to $false]
**IgnoreCase** | **Boolean** | Whether or not the attribute assignment should ignore case. | [optional] [default to $false]
**MatchMode** |  **Enum** [  "ANYWHERE",    "START",    "END" ] | The match mode of the attribute assignment. | [optional] 
**FilterString** | **String** | The filter string of the attribute assignment. | [optional] 

## Examples

- Prepare the resource
```powershell
$CorrelationconfigAttributeAssignmentsInner = Initialize-CorrelationconfigAttributeAssignmentsInner  -Property first_name `
 -Value firstName `
 -Operation EQ `
 -Complex false `
 -IgnoreCase false `
 -MatchMode ANYWHERE `
 -FilterString first_name == "John"
```

- Convert the resource to JSON
```powershell
$CorrelationconfigAttributeAssignmentsInner | ConvertTo-JSON
```


[[Back to top]](#) 

