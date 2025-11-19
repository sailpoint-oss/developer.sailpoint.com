---
id: v2024-managed-cluster-request
title: ManagedClusterRequest
pagination_label: ManagedClusterRequest
sidebar_label: ManagedClusterRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClusterRequest', 'V2024ManagedClusterRequest'] 
slug: /tools/sdk/powershell/v2024/models/managed-cluster-request
tags: ['SDK', 'Software Development Kit', 'ManagedClusterRequest', 'V2024ManagedClusterRequest']
---


# ManagedClusterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | ManagedCluster name | [required]
**Type** | [**ManagedClusterTypes**](managed-cluster-types) |  | [optional] 
**Configuration** | **map[string]String** | ManagedProcess configuration map | [optional] 
**Description** | **String** | ManagedCluster description | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClusterRequest = Initialize-V2024ManagedClusterRequest  -Name Managed Cluster Name `
 -Type null `
 -Configuration {clusterExternalId=externalId, ccgVersion=77.0.0} `
 -Description A short description of the managed cluster.
```

- Convert the resource to JSON
```powershell
$ManagedClusterRequest | ConvertTo-JSON
```


[[Back to top]](#) 

