---
id: managed-cluster-queue
title: ManagedClusterQueue
pagination_label: ManagedClusterQueue
sidebar_label: ManagedClusterQueue
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClusterQueue'] 
slug: /tools/sdk/powershell/beta/models/managed-cluster-queue
tags: ['SDK', 'Software Development Kit', 'ManagedClusterQueue']
---


# ManagedClusterQueue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | ManagedCluster queue name | [optional] 
**Region** |  Pointer to **String** | ManagedCluster queue aws region | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClusterQueue = Initialize-PSSailpoint.BetaManagedClusterQueue  -Name megapod-useast1-denali-lwt-cluster-1533 `
 -Region us-east-1
```

- Convert the resource to JSON
```powershell
$ManagedClusterQueue | ConvertTo-JSON
```


[[Back to top]](#) 

