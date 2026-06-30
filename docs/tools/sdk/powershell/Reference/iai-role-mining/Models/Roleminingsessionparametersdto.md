---
id: roleminingsessionparametersdto
title: Roleminingsessionparametersdto
pagination_label: Roleminingsessionparametersdto
sidebar_label: Roleminingsessionparametersdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleminingsessionparametersdto', 'Roleminingsessionparametersdto'] 
slug: /tools/sdk/powershell/iairolemining/models/roleminingsessionparametersdto
tags: ['SDK', 'Software Development Kit', 'Roleminingsessionparametersdto', 'Roleminingsessionparametersdto']
---


# Roleminingsessionparametersdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the role mining session | [optional] 
**Name** | **String** | The session's saved name | [optional] 
**MinNumIdentitiesInPotentialRole** | **Int32** | Minimum number of identities in a potential role | [optional] 
**PruneThreshold** | **Int32** | The prune threshold to be used or null to calculate prescribedPruneThreshold | [optional] 
**Saved** | **Boolean** | The session's saved status | [optional] [default to $true]
**Scope** | [**Roleminingsessionscope**](roleminingsessionscope) |  | [optional] 
**Type** | [**Roleminingroletype**](roleminingroletype) |  | [optional] 
**State** | [**Roleminingsessionstate**](roleminingsessionstate) |  | [optional] 
**ScopingMethod** | [**Roleminingsessionscopingmethod**](roleminingsessionscopingmethod) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleminingsessionparametersdto = Initialize-Roleminingsessionparametersdto  -Id 9f36f5e5-1e81-4eca-b087-548959d91c71 `
 -Name Saved RM Session - 07/10 `
 -MinNumIdentitiesInPotentialRole 20 `
 -PruneThreshold 5 `
 -Saved true `
 -Scope null `
 -Type null `
 -State null `
 -ScopingMethod null
```

- Convert the resource to JSON
```powershell
$Roleminingsessionparametersdto | ConvertTo-JSON
```


[[Back to top]](#) 

