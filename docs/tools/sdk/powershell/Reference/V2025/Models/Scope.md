---
id: v2025-scope
title: Scope
pagination_label: Scope
sidebar_label: Scope
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Scope', 'V2025Scope'] 
slug: /tools/sdk/powershell/v2025/models/scope
tags: ['SDK', 'Software Development Kit', 'Scope', 'V2025Scope']
---


# Scope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scope** | [**ScopeType**](scope-type) |  | [optional] 
**Visibility** | [**ScopeVisibilityType**](scope-visibility-type) |  | [optional] 
**ScopeFilter** | [**VisibilityCriteria**](visibility-criteria) |  | [optional] 
**ScopeSelection** | [**[]Ref**](ref) | List of Identities that are assigned to the segment | [optional] 

## Examples

- Prepare the resource
```powershell
$Scope = Initialize-PSSailpoint.V2025Scope  -Scope null `
 -Visibility null `
 -ScopeFilter null `
 -ScopeSelection [{type=IDENTITY, id=29cb6c061da843ea8be4b3125f248f2a}, {type=IDENTITY, id=f7b1b8a35fed4fd4ad2982014e137e19}]
```

- Convert the resource to JSON
```powershell
$Scope | ConvertTo-JSON
```


[[Back to top]](#) 

