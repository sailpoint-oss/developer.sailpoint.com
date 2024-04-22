---
id: source-cluster
title: SourceCluster
pagination_label: SourceCluster
sidebar_label: SourceCluster
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SourceCluster'] 
slug: /tools/sdk/powershell/v3/models/source-cluster
tags: ['SDK', 'Software Development Kit', 'SourceCluster']
---


# SourceCluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "CLUSTER" ] | The type of object being referenced | 
**Id** |  **String** | ID of the cluster | 
**Name** |  **String** | Human-readable display name of the cluster | 

## Examples

- Prepare the resource
```powershell
$SourceCluster = Initialize-SourceCluster  -Type CLUSTER `
 -Id 2c9180866166b5b0016167c32ef31a66 `
 -Name Corporate Cluster
```

- Convert the resource to JSON
```powershell
$SourceCluster | ConvertTo-JSON
```


[[Back to top]](#) 

