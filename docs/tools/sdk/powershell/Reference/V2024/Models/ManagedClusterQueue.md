---
id: v2024-managed-cluster-queue
title: ManagedClusterQueue
pagination_label: ManagedClusterQueue
sidebar_label: ManagedClusterQueue
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClusterQueue', 'V2024ManagedClusterQueue'] 
slug: /tools/sdk/powershell/v2024/models/managed-cluster-queue
tags: ['SDK', 'Software Development Kit', 'ManagedClusterQueue', 'V2024ManagedClusterQueue']
---


# ManagedClusterQueue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | ManagedCluster queue name | [optional] 
**Region** | **String** | ManagedCluster queue aws region | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClusterQueue = Initialize-PSSailpoint.V2024ManagedClusterQueue  -Name megapod-useast1-denali-lwt-cluster-1533 `
 -Region us-east-1
```

- Convert the resource to JSON
```powershell
$ManagedClusterQueue | ConvertTo-JSON
```


[[Back to top]](#) 

