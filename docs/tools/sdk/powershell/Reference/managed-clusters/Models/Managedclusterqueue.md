---
id: managedclusterqueue
title: Managedclusterqueue
pagination_label: Managedclusterqueue
sidebar_label: Managedclusterqueue
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Managedclusterqueue', 'Managedclusterqueue'] 
slug: /tools/sdk/powershell/managedclusters/models/managedclusterqueue
tags: ['SDK', 'Software Development Kit', 'Managedclusterqueue', 'Managedclusterqueue']
---


# Managedclusterqueue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | ManagedCluster queue name | [optional] 
**Region** | **String** | ManagedCluster queue aws region | [optional] 

## Examples

- Prepare the resource
```powershell
$Managedclusterqueue = Initialize-Managedclusterqueue  -Name megapod-useast1-denali-lwt-cluster-1533 `
 -Region us-east-1
```

- Convert the resource to JSON
```powershell
$Managedclusterqueue | ConvertTo-JSON
```


[[Back to top]](#) 

