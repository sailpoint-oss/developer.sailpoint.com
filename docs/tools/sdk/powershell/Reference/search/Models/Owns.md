---
id: owns
title: Owns
pagination_label: Owns
sidebar_label: Owns
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Owns', 'Owns'] 
slug: /tools/sdk/powershell/search/models/owns
tags: ['SDK', 'Software Development Kit', 'Owns', 'Owns']
---


# Owns

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Sources** | [**[]Reference**](reference) |  | [optional] 
**Entitlements** | [**[]Reference**](reference) |  | [optional] 
**AccessProfiles** | [**[]Reference**](reference) |  | [optional] 
**Roles** | [**[]Reference**](reference) |  | [optional] 
**Apps** | [**[]Reference**](reference) |  | [optional] 
**GovernanceGroups** | [**[]Reference**](reference) |  | [optional] 
**FallbackApprover** | **Boolean** |  | [optional] 

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

