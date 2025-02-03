---
id: beta-managed-cluster-attributes
title: ManagedClusterAttributes
pagination_label: ManagedClusterAttributes
sidebar_label: ManagedClusterAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClusterAttributes', 'BetaManagedClusterAttributes'] 
slug: /tools/sdk/powershell/beta/models/managed-cluster-attributes
tags: ['SDK', 'Software Development Kit', 'ManagedClusterAttributes', 'BetaManagedClusterAttributes']
---


# ManagedClusterAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Queue** |  Pointer to [**ManagedClusterQueue**](managed-cluster-queue) |  | [optional] 
**Keystore** |  Pointer to **String** | ManagedCluster keystore for spConnectCluster type | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClusterAttributes = Initialize-PSSailpoint.BetaManagedClusterAttributes  -Queue null `
 -Keystore /u3+7QAAAAIAAAABAAAAAQAvL3Byb3h5LWNsdXN0ZXIvMmM5MTgwODc3Yjg3MW
```

- Convert the resource to JSON
```powershell
$ManagedClusterAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

