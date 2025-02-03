---
id: beta-sed-assignment
title: SedAssignment
pagination_label: SedAssignment
sidebar_label: SedAssignment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SedAssignment', 'BetaSedAssignment'] 
slug: /tools/sdk/powershell/beta/models/sed-assignment
tags: ['SDK', 'Software Development Kit', 'SedAssignment', 'BetaSedAssignment']
---


# SedAssignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Assignee** | [**SedAssignee**](sed-assignee) |  | [optional] 
**Items** | **[]String** | List of SED id's | [optional] 

## Examples

- Prepare the resource
```powershell
$SedAssignment = Initialize-PSSailpoint.BetaSedAssignment  -Assignee null `
 -Items null
```

- Convert the resource to JSON
```powershell
$SedAssignment | ConvertTo-JSON
```


[[Back to top]](#) 

