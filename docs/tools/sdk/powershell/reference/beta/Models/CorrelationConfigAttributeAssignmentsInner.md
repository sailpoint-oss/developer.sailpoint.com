---
id: beta-correlation-config-attribute-assignments-inner
title: CorrelationConfigAttributeAssignmentsInner
pagination_label: CorrelationConfigAttributeAssignmentsInner
sidebar_label: CorrelationConfigAttributeAssignmentsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CorrelationConfigAttributeAssignmentsInner', 'BetaCorrelationConfigAttributeAssignmentsInner'] 
slug: /tools/sdk/powershell/beta/models/correlation-config-attribute-assignments-inner
tags: ['SDK', 'Software Development Kit', 'CorrelationConfigAttributeAssignmentsInner', 'BetaCorrelationConfigAttributeAssignmentsInner']
---


# CorrelationConfigAttributeAssignmentsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Property** |  Pointer to **String** | The property of the attribute assignment. | [optional] 
**Value** |  Pointer to **String** | The value of the attribute assignment. | [optional] 
**Operation** |  Pointer to  **Enum** [  "EQ" ] | The operation of the attribute assignment. | [optional] 
**Complex** |  Pointer to **Boolean** | Whether or not the it's a complex attribute assignment. | [optional] [default to $false]
**IgnoreCase** |  Pointer to **Boolean** | Whether or not the attribute assignment should ignore case. | [optional] [default to $false]
**MatchMode** |  Pointer to  **Enum** [  "ANYWHERE",    "START",    "END" ] | The match mode of the attribute assignment. | [optional] 
**FilterString** |  Pointer to **String** | The filter string of the attribute assignment. | [optional] 

## Examples

- Prepare the resource
```powershell
$CorrelationConfigAttributeAssignmentsInner = Initialize-PSSailpoint.BetaCorrelationConfigAttributeAssignmentsInner  -Property first_name `
 -Value firstName `
 -Operation EQ `
 -Complex false `
 -IgnoreCase false `
 -MatchMode ANYWHERE `
 -FilterString first_name &#x3D;&#x3D; &quot;John&quot;
```

- Convert the resource to JSON
```powershell
$CorrelationConfigAttributeAssignmentsInner | ConvertTo-JSON
```


[[Back to top]](#) 

