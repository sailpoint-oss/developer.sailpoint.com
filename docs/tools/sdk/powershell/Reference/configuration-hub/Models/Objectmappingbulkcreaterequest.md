---
id: objectmappingbulkcreaterequest
title: Objectmappingbulkcreaterequest
pagination_label: Objectmappingbulkcreaterequest
sidebar_label: Objectmappingbulkcreaterequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Objectmappingbulkcreaterequest', 'Objectmappingbulkcreaterequest'] 
slug: /tools/sdk/powershell/configurationhub/models/objectmappingbulkcreaterequest
tags: ['SDK', 'Software Development Kit', 'Objectmappingbulkcreaterequest', 'Objectmappingbulkcreaterequest']
---


# Objectmappingbulkcreaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewObjectsMappings** | [**[]Objectmappingrequest**](objectmappingrequest) |  | [required]

## Examples

- Prepare the resource
```powershell
$Objectmappingbulkcreaterequest = Initialize-Objectmappingbulkcreaterequest  -NewObjectsMappings null
```

- Convert the resource to JSON
```powershell
$Objectmappingbulkcreaterequest | ConvertTo-JSON
```


[[Back to top]](#) 

