---
id: nonemployeesourcelite
title: Nonemployeesourcelite
pagination_label: Nonemployeesourcelite
sidebar_label: Nonemployeesourcelite
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Nonemployeesourcelite', 'Nonemployeesourcelite'] 
slug: /tools/sdk/powershell/nonemployeelifecyclemanagement/models/nonemployeesourcelite
tags: ['SDK', 'Software Development Kit', 'Nonemployeesourcelite', 'Nonemployeesourcelite']
---


# Nonemployeesourcelite

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
$Nonemployeesourcelite = Initialize-Nonemployeesourcelite  -Id a0303682-5e4a-44f7-bdc2-6ce6112549c1 `
 -SourceId 2c91808568c529c60168cca6f90c1313 `
 -Name Retail `
 -Description Source description
```

- Convert the resource to JSON
```powershell
$Nonemployeesourcelite | ConvertTo-JSON
```


[[Back to top]](#) 

