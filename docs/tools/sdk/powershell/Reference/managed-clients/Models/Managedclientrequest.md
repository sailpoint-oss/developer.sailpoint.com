---
id: managedclientrequest
title: Managedclientrequest
pagination_label: Managedclientrequest
sidebar_label: Managedclientrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Managedclientrequest', 'Managedclientrequest'] 
slug: /tools/sdk/powershell/managedclients/models/managedclientrequest
tags: ['SDK', 'Software Development Kit', 'Managedclientrequest', 'Managedclientrequest']
---


# Managedclientrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClusterId** | **String** | Cluster ID that the ManagedClient is linked to | [required]
**Description** | **String** | description for the ManagedClient to create | [optional] 
**Name** | **String** | name for the ManagedClient to create | [optional] 
**Type** | **String** | Type of the ManagedClient (VA, CCG) to create | [optional] 

## Examples

- Prepare the resource
```powershell
$Managedclientrequest = Initialize-Managedclientrequest  -ClusterId aClusterId `
 -Description A short description of the ManagedClient `
 -Name aName `
 -Type VA
```

- Convert the resource to JSON
```powershell
$Managedclientrequest | ConvertTo-JSON
```


[[Back to top]](#) 

