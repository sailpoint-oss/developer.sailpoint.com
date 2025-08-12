---
id: beta-managed-cluster-queue
title: ManagedClusterQueue
pagination_label: ManagedClusterQueue
sidebar_label: ManagedClusterQueue
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClusterQueue', 'BetaManagedClusterQueue'] 
slug: /tools/sdk/powershell/beta/models/managed-cluster-queue
tags: ['SDK', 'Software Development Kit', 'ManagedClusterQueue', 'BetaManagedClusterQueue']
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
$ManagedClusterQueue = Initialize-BetaManagedClusterQueue  -Name megapod-useast1-denali-lwt-cluster-1533 `
 -Region us-east-1
```

- Convert the resource to JSON
```powershell
$ManagedClusterQueue | ConvertTo-JSON
```


[[Back to top]](#) 

