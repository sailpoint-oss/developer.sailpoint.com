---
id: owns
title: Owns
pagination_label: Owns
sidebar_label: Owns
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Owns'] 
slug: /tools/sdk/powershell/v3/models/owns
tags: ['SDK', 'Software Development Kit', 'Owns']
---


# Owns

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Sources** |  Pointer to [**[]Reference1**](reference1) |  | [optional] 
**Entitlements** |  Pointer to [**[]Reference1**](reference1) |  | [optional] 
**AccessProfiles** |  Pointer to [**[]Reference1**](reference1) |  | [optional] 
**Roles** |  Pointer to [**[]Reference1**](reference1) |  | [optional] 
**Apps** |  Pointer to [**[]Reference1**](reference1) |  | [optional] 
**GovernanceGroups** |  Pointer to [**[]Reference1**](reference1) |  | [optional] 
**FallbackApprover** |  Pointer to **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Owns = Initialize-Owns  -Sources null `
 -Entitlements null `
 -AccessProfiles null `
 -Roles null `
 -Apps null `
 -GovernanceGroups null `
 -FallbackApprover false
```

- Convert the resource to JSON
```powershell
$Owns | ConvertTo-JSON
```


[[Back to top]](#) 

