---
id: multihostintegrations-cluster
title: MultihostintegrationsCluster
pagination_label: MultihostintegrationsCluster
sidebar_label: MultihostintegrationsCluster
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultihostintegrationsCluster', 'MultihostintegrationsCluster'] 
slug: /tools/sdk/powershell/multihostintegration/models/multihostintegrations-cluster
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsCluster', 'MultihostintegrationsCluster']
---


# MultihostintegrationsCluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "CLUSTER" ] | Type of object being referenced. | [required]
**Id** | **String** | Cluster ID. | [required]
**Name** | **String** | Cluster's human-readable display name. | [required]

## Examples

- Prepare the resource
```powershell
$MultihostintegrationsCluster = Initialize-MultihostintegrationsCluster  -Type CLUSTER `
 -Id 2c9180866166b5b0016167c32ef31a66 `
 -Name Corporate Cluster
```

- Convert the resource to JSON
```powershell
$MultihostintegrationsCluster | ConvertTo-JSON
```


[[Back to top]](#) 

