---
id: non-employee-source-lite
title: NonEmployeeSourceLite
pagination_label: NonEmployeeSourceLite
sidebar_label: NonEmployeeSourceLite
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeSourceLite', 'NonEmployeeSourceLite'] 
slug: /tools/sdk/powershell/v3/models/non-employee-source-lite
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSourceLite', 'NonEmployeeSourceLite']
---


# NonEmployeeSourceLite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Non-Employee source id. | [optional] 
**SourceId** | **String** | Source Id associated with this non-employee source. | [optional] 
**Name** | **String** | Source name associated with this non-employee source. | [optional] 
**Description** | **String** | Source description associated with this non-employee source. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeSourceLite = Initialize-PSSailpoint.V3NonEmployeeSourceLite  -Id a0303682-5e4a-44f7-bdc2-6ce6112549c1 `
 -SourceId 2c91808568c529c60168cca6f90c1313 `
 -Name Retail `
 -Description Source description
```

- Convert the resource to JSON
```powershell
$NonEmployeeSourceLite | ConvertTo-JSON
```


[[Back to top]](#) 

