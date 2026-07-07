---
id: managedclustertype
title: Managedclustertype
pagination_label: Managedclustertype
sidebar_label: Managedclustertype
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Managedclustertype', 'Managedclustertype'] 
slug: /tools/sdk/powershell/managedclustertypes/models/managedclustertype
tags: ['SDK', 'Software Development Kit', 'Managedclustertype', 'Managedclustertype']
---


# Managedclustertype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ManagedClusterType ID | [optional] [readonly] 
**Type** | **String** | ManagedClusterType type name | [required]
**Pod** | **String** | ManagedClusterType pod | [required]
**Org** | **String** | ManagedClusterType org | [required]
**ManagedProcessIds** | **[]String** | List of processes for the cluster type | [optional] 

## Examples

- Prepare the resource
```powershell
$Managedclustertype = Initialize-Managedclustertype  -Id aClusterTypeId `
 -Type idn `
 -Pod megapod-useast1 `
 -Org denali-cjh `
 -ManagedProcessIds ["someId","someId2"]
```

- Convert the resource to JSON
```powershell
$Managedclustertype | ConvertTo-JSON
```


[[Back to top]](#) 

