---
id: beta-multi-host-integrations-cluster
title: MultiHostIntegrationsCluster
pagination_label: MultiHostIntegrationsCluster
sidebar_label: MultiHostIntegrationsCluster
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrationsCluster'] 
slug: /tools/sdk/powershell/beta/models/multi-host-integrations-cluster
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsCluster']
---


# MultiHostIntegrationsCluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "CLUSTER" ] | Type of object being referenced. | [required]
**Id** |  **String** | Cluster ID. | [required]
**Name** |  **String** | Cluster's human-readable display name. | [required]

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsCluster = Initialize-PSSailpoint.BetaMultiHostIntegrationsCluster  -Type CLUSTER `
 -Id 2c9180866166b5b0016167c32ef31a66 `
 -Name Corporate Cluster
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsCluster | ConvertTo-JSON
```


[[Back to top]](#) 

