---
id: scope
title: Scope
pagination_label: Scope
sidebar_label: Scope
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Scope', 'Scope'] 
slug: /tools/sdk/powershell/datasegmentation/models/scope
tags: ['SDK', 'Software Development Kit', 'Scope', 'Scope']
---


# Scope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scope** | [**Scopetype**](scopetype) |  | [optional] 
**Visibility** | [**Scopevisibilitytype**](scopevisibilitytype) |  | [optional] 
**ScopeFilter** | [**Visibilitycriteria**](visibilitycriteria) |  | [optional] 
**ScopeSelection** | [**[]Ref**](ref) | List of Identities that are assigned to the segment | [optional] 

## Examples

- Prepare the resource
```powershell
$Scope = Initialize-Scope  -Scope null `
 -Visibility null `
 -ScopeFilter null `
 -ScopeSelection [{"type":"IDENTITY","id":"29cb6c061da843ea8be4b3125f248f2a"},{"type":"IDENTITY","id":"f7b1b8a35fed4fd4ad2982014e137e19"}]
```

- Convert the resource to JSON
```powershell
$Scope | ConvertTo-JSON
```


[[Back to top]](#) 

