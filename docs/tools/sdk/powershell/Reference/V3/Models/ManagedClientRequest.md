---
id: managed-client-request
title: ManagedClientRequest
pagination_label: ManagedClientRequest
sidebar_label: ManagedClientRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClientRequest', 'ManagedClientRequest'] 
slug: /tools/sdk/powershell/v3/models/managed-client-request
tags: ['SDK', 'Software Development Kit', 'ManagedClientRequest', 'ManagedClientRequest']
---


# ManagedClientRequest

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
$ManagedClientRequest = Initialize-ManagedClientRequest  -ClusterId aClusterId `
 -Description A short description of the ManagedClient `
 -Name aName `
 -Type VA
```

- Convert the resource to JSON
```powershell
$ManagedClientRequest | ConvertTo-JSON
```


[[Back to top]](#) 

