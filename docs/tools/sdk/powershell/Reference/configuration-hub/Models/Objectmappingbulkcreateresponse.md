---
id: objectmappingbulkcreateresponse
title: Objectmappingbulkcreateresponse
pagination_label: Objectmappingbulkcreateresponse
sidebar_label: Objectmappingbulkcreateresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Objectmappingbulkcreateresponse', 'Objectmappingbulkcreateresponse'] 
slug: /tools/sdk/powershell/configurationhub/models/objectmappingbulkcreateresponse
tags: ['SDK', 'Software Development Kit', 'Objectmappingbulkcreateresponse', 'Objectmappingbulkcreateresponse']
---


# Objectmappingbulkcreateresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddedObjects** | [**[]Objectmappingresponse**](objectmappingresponse) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Objectmappingbulkcreateresponse = Initialize-Objectmappingbulkcreateresponse  -AddedObjects null
```

- Convert the resource to JSON
```powershell
$Objectmappingbulkcreateresponse | ConvertTo-JSON
```


[[Back to top]](#) 

