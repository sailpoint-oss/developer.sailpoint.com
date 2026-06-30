---
id: nonemployeesourcelitewithschemaattributes
title: Nonemployeesourcelitewithschemaattributes
pagination_label: Nonemployeesourcelitewithschemaattributes
sidebar_label: Nonemployeesourcelitewithschemaattributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Nonemployeesourcelitewithschemaattributes', 'Nonemployeesourcelitewithschemaattributes'] 
slug: /tools/sdk/powershell/nonemployeelifecyclemanagement/models/nonemployeesourcelitewithschemaattributes
tags: ['SDK', 'Software Development Kit', 'Nonemployeesourcelitewithschemaattributes', 'Nonemployeesourcelitewithschemaattributes']
---


# Nonemployeesourcelitewithschemaattributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Non-Employee source id. | [optional] 
**SourceId** | **String** | Source Id associated with this non-employee source. | [optional] 
**Name** | **String** | Source name associated with this non-employee source. | [optional] 
**Description** | **String** | Source description associated with this non-employee source. | [optional] 
**SchemaAttributes** | [**[]Nonemployeeschemaattribute**](nonemployeeschemaattribute) | List of schema attributes associated with this non-employee source. | [optional] 

## Examples

- Prepare the resource
```powershell
$Nonemployeesourcelitewithschemaattributes = Initialize-Nonemployeesourcelitewithschemaattributes  -Id a0303682-5e4a-44f7-bdc2-6ce6112549c1 `
 -SourceId 2c91808568c529c60168cca6f90c1313 `
 -Name Retail `
 -Description Source description `
 -SchemaAttributes null
```

- Convert the resource to JSON
```powershell
$Nonemployeesourcelitewithschemaattributes | ConvertTo-JSON
```


[[Back to top]](#) 

