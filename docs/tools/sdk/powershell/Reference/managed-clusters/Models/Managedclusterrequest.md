---
id: managedclusterrequest
title: Managedclusterrequest
pagination_label: Managedclusterrequest
sidebar_label: Managedclusterrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Managedclusterrequest', 'Managedclusterrequest'] 
slug: /tools/sdk/powershell/managedclusters/models/managedclusterrequest
tags: ['SDK', 'Software Development Kit', 'Managedclusterrequest', 'Managedclusterrequest']
---


# Managedclusterrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | ManagedCluster name | [required]
**Type** | [**Managedclustertypes**](managedclustertypes) |  | [optional] 
**Configuration** | **map[string]String** | ManagedProcess configuration map | [optional] 
**Description** | **String** | ManagedCluster description | [optional] 

## Examples

- Prepare the resource
```powershell
$Managedclusterrequest = Initialize-Managedclusterrequest  -Name Managed Cluster Name `
 -Type null `
 -Configuration {"clusterExternalId":"externalId","ccgVersion":"77.0.0"} `
 -Description A short description of the managed cluster.
```

- Convert the resource to JSON
```powershell
$Managedclusterrequest | ConvertTo-JSON
```


[[Back to top]](#) 

