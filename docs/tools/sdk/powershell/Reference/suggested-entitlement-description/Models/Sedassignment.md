---
id: sedassignment
title: Sedassignment
pagination_label: Sedassignment
sidebar_label: Sedassignment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sedassignment', 'Sedassignment'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/sedassignment
tags: ['SDK', 'Software Development Kit', 'Sedassignment', 'Sedassignment']
---


# Sedassignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Assignee** | [**Sedassignee**](sedassignee) |  | [optional] 
**Items** | **[]String** | List of SED id's | [optional] 

## Examples

- Prepare the resource
```powershell
$Sedassignment = Initialize-Sedassignment  -Assignee null `
 -Items null
```

- Convert the resource to JSON
```powershell
$Sedassignment | ConvertTo-JSON
```


[[Back to top]](#) 

