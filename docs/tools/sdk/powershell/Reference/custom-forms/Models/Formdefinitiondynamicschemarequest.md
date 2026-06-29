---
id: formdefinitiondynamicschemarequest
title: Formdefinitiondynamicschemarequest
pagination_label: Formdefinitiondynamicschemarequest
sidebar_label: Formdefinitiondynamicschemarequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Formdefinitiondynamicschemarequest', 'Formdefinitiondynamicschemarequest'] 
slug: /tools/sdk/powershell/customforms/models/formdefinitiondynamicschemarequest
tags: ['SDK', 'Software Development Kit', 'Formdefinitiondynamicschemarequest', 'Formdefinitiondynamicschemarequest']
---


# Formdefinitiondynamicschemarequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | [**FormdefinitiondynamicschemarequestAttributes**](formdefinitiondynamicschemarequest-attributes) |  | [optional] 
**Description** | **String** | Description is the form definition dynamic schema description text | [optional] 
**Id** | **String** | ID is a unique identifier | [optional] 
**Type** | **String** | Type is the form definition dynamic schema type | [optional] 
**VersionNumber** | **Int64** | VersionNumber is the form definition dynamic schema version number | [optional] 

## Examples

- Prepare the resource
```powershell
$Formdefinitiondynamicschemarequest = Initialize-Formdefinitiondynamicschemarequest  -Attributes null `
 -Description A description `
 -Id 00000000-0000-0000-0000-000000000000 `
 -Type action `
 -VersionNumber 1
```

- Convert the resource to JSON
```powershell
$Formdefinitiondynamicschemarequest | ConvertTo-JSON
```


[[Back to top]](#) 

