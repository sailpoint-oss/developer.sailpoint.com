---
id: formdefinitionfileuploadresponse
title: Formdefinitionfileuploadresponse
pagination_label: Formdefinitionfileuploadresponse
sidebar_label: Formdefinitionfileuploadresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Formdefinitionfileuploadresponse', 'Formdefinitionfileuploadresponse'] 
slug: /tools/sdk/powershell/customforms/models/formdefinitionfileuploadresponse
tags: ['SDK', 'Software Development Kit', 'Formdefinitionfileuploadresponse', 'Formdefinitionfileuploadresponse']
---


# Formdefinitionfileuploadresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | **String** | Created is the date the file was uploaded | [optional] 
**FileId** | **String** | fileId is a unique ULID that serves as an identifier for the form definition file | [optional] 
**FormDefinitionId** | **String** | FormDefinitionID is a unique guid identifying this form definition | [optional] 

## Examples

- Prepare the resource
```powershell
$Formdefinitionfileuploadresponse = Initialize-Formdefinitionfileuploadresponse  -Created 2023-07-12T20:14:57.74486Z `
 -FileId 01FHZXHK8PTP9FVK99Z66GXQTX.png `
 -FormDefinitionId 00000000-0000-0000-0000-000000000000
```

- Convert the resource to JSON
```powershell
$Formdefinitionfileuploadresponse | ConvertTo-JSON
```


[[Back to top]](#) 

