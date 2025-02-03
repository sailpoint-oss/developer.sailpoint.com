---
id: v2024-owns
title: Owns
pagination_label: Owns
sidebar_label: Owns
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Owns', 'V2024Owns'] 
slug: /tools/sdk/powershell/v2024/models/owns
tags: ['SDK', 'Software Development Kit', 'Owns', 'V2024Owns']
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
$Owns = Initialize-PSSailpoint.V2024Owns  -Sources null `
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

