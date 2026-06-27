---
id: permissioncollectorsettings
title: Permissioncollectorsettings
pagination_label: Permissioncollectorsettings
sidebar_label: Permissioncollectorsettings
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Permissioncollectorsettings', 'Permissioncollectorsettings'] 
slug: /tools/sdk/powershell/dataaccesssecurity/models/permissioncollectorsettings
tags: ['SDK', 'Software Development Kit', 'Permissioncollectorsettings', 'Permissioncollectorsettings']
---


# Permissioncollectorsettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsEnabled** | **Boolean** | Indicates whether the feature or configuration is enabled. | [optional] [default to $false]
**ClusterId** | **String** | The identifier of the cluster associated with this configuration, if applicable. | [optional] 
**AnalyzeUniquePermissions** | **Boolean** | Indicates whether unique permissions should be analyzed for resources. | [optional] [default to $false]
**CalculateEffectivePermissions** | **Boolean** | Indicates whether effective permissions should be calculated. | [optional] [default to $false]
**CalculateRiskiestPermissions** | **Boolean** | Indicates whether riskiest permissions should be calculated. | [optional] [default to $false]
**EffectivePermissionsSource** | **String** | Source for effective permissions calculation. | [optional] 

## Examples

- Prepare the resource
```powershell
$Permissioncollectorsettings = Initialize-Permissioncollectorsettings  -IsEnabled true `
 -ClusterId cluster-001 `
 -AnalyzeUniquePermissions true `
 -CalculateEffectivePermissions true `
 -CalculateRiskiestPermissions false `
 -EffectivePermissionsSource S3
```

- Convert the resource to JSON
```powershell
$Permissioncollectorsettings | ConvertTo-JSON
```


[[Back to top]](#) 

