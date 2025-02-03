---
id: owns
title: Owns
pagination_label: Owns
sidebar_label: Owns
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Owns', 'Owns'] 
slug: /tools/sdk/powershell/v3/models/owns
tags: ['SDK', 'Software Development Kit', 'Owns', 'Owns']
---


# Owns

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Sources** | [**[]Reference1**](reference1) |  | [optional] 
**Entitlements** | [**[]Reference1**](reference1) |  | [optional] 
**AccessProfiles** | [**[]Reference1**](reference1) |  | [optional] 
**Roles** | [**[]Reference1**](reference1) |  | [optional] 
**Apps** | [**[]Reference1**](reference1) |  | [optional] 
**GovernanceGroups** | [**[]Reference1**](reference1) |  | [optional] 
**FallbackApprover** | **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Owns = Initialize-PSSailpoint.V3Owns  -Sources null `
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

