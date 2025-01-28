---
id: managed-cluster-request
title: ManagedClusterRequest
pagination_label: ManagedClusterRequest
sidebar_label: ManagedClusterRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClusterRequest', 'ManagedClusterRequest'] 
slug: /tools/sdk/powershell/v3/models/managed-cluster-request
tags: ['SDK', 'Software Development Kit', 'ManagedClusterRequest', 'ManagedClusterRequest']
---


# ManagedClusterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | ManagedCluster name | [required]
**Type** |  Pointer to [**ManagedClusterTypes**](managed-cluster-types) |  | [optional] 
**Configuration** |  Pointer to **map[string]String** | ManagedProcess configuration map | [optional] 
**Description** |  Pointer to **String** | ManagedCluster description | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClusterRequest = Initialize-PSSailpoint.V3ManagedClusterRequest  -Name Managed Cluster Name `
 -Type null `
 -Configuration {clusterExternalId&#x3D;externalId, ccgVersion&#x3D;77.0.0} `
 -Description A short description of the managed cluster.
```

- Convert the resource to JSON
```powershell
$ManagedClusterRequest | ConvertTo-JSON
```


[[Back to top]](#) 

