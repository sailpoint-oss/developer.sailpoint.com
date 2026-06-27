---
id: objectmappingbulkpatchresponse
title: Objectmappingbulkpatchresponse
pagination_label: Objectmappingbulkpatchresponse
sidebar_label: Objectmappingbulkpatchresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Objectmappingbulkpatchresponse', 'Objectmappingbulkpatchresponse'] 
slug: /tools/sdk/powershell/configurationhub/models/objectmappingbulkpatchresponse
tags: ['SDK', 'Software Development Kit', 'Objectmappingbulkpatchresponse', 'Objectmappingbulkpatchresponse']
---


# Objectmappingbulkpatchresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PatchedObjects** | [**[]Objectmappingresponse**](objectmappingresponse) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Objectmappingbulkpatchresponse = Initialize-Objectmappingbulkpatchresponse  -PatchedObjects null
```

- Convert the resource to JSON
```powershell
$Objectmappingbulkpatchresponse | ConvertTo-JSON
```


[[Back to top]](#) 

