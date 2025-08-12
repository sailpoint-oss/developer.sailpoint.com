---
id: v2024-managed-cluster-attributes
title: ManagedClusterAttributes
pagination_label: ManagedClusterAttributes
sidebar_label: ManagedClusterAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClusterAttributes', 'V2024ManagedClusterAttributes'] 
slug: /tools/sdk/powershell/v2024/models/managed-cluster-attributes
tags: ['SDK', 'Software Development Kit', 'ManagedClusterAttributes', 'V2024ManagedClusterAttributes']
---


# ManagedClusterAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Queue** | [**ManagedClusterQueue**](managed-cluster-queue) |  | [optional] 
**Keystore** | **String** | ManagedCluster keystore for spConnectCluster type | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClusterAttributes = Initialize-V2024ManagedClusterAttributes  -Queue null `
 -Keystore /u3+7QAAAAIAAAABAAAAAQAvL3Byb3h5LWNsdXN0ZXIvMmM5MTgwODc3Yjg3MW
```

- Convert the resource to JSON
```powershell
$ManagedClusterAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

