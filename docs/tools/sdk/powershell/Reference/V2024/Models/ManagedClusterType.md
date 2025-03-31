---
id: v2024-managed-cluster-type
title: ManagedClusterType
pagination_label: ManagedClusterType
sidebar_label: ManagedClusterType
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClusterType', 'V2024ManagedClusterType'] 
slug: /tools/sdk/powershell/v2024/models/managed-cluster-type
tags: ['SDK', 'Software Development Kit', 'ManagedClusterType', 'V2024ManagedClusterType']
---


# ManagedClusterType

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
$ManagedClusterType = Initialize-PSSailpoint.V2024ManagedClusterType  -Id aClusterTypeId `
 -Type idn `
 -Pod megapod-useast1 `
 -Org denali-cjh `
 -ManagedProcessIds [someId, someId2]
```

- Convert the resource to JSON
```powershell
$ManagedClusterType | ConvertTo-JSON
```


[[Back to top]](#) 

