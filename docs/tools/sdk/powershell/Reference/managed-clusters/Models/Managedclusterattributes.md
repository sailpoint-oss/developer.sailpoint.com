---
id: managedclusterattributes
title: Managedclusterattributes
pagination_label: Managedclusterattributes
sidebar_label: Managedclusterattributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Managedclusterattributes', 'Managedclusterattributes'] 
slug: /tools/sdk/powershell/managedclusters/models/managedclusterattributes
tags: ['SDK', 'Software Development Kit', 'Managedclusterattributes', 'Managedclusterattributes']
---


# Managedclusterattributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Queue** | [**Managedclusterqueue**](managedclusterqueue) |  | [optional] 
**Keystore** | **String** | ManagedCluster keystore for spConnectCluster type | [optional] 

## Examples

- Prepare the resource
```powershell
$Managedclusterattributes = Initialize-Managedclusterattributes  -Queue null `
 -Keystore /u3+7QAAAAIAAAABAAAAAQAvL3Byb3h5LWNsdXN0ZXIvMmM5MTgwODc3Yjg3MW
```

- Convert the resource to JSON
```powershell
$Managedclusterattributes | ConvertTo-JSON
```


[[Back to top]](#) 

