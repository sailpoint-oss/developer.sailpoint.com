---
id: v2025-managed-client-request
title: ManagedClientRequest
pagination_label: ManagedClientRequest
sidebar_label: ManagedClientRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClientRequest', 'V2025ManagedClientRequest'] 
slug: /tools/sdk/powershell/v2025/models/managed-client-request
tags: ['SDK', 'Software Development Kit', 'ManagedClientRequest', 'V2025ManagedClientRequest']
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
$ManagedClientRequest = Initialize-V2025ManagedClientRequest  -ClusterId aClusterId `
 -Description A short description of the ManagedClient `
 -Name aName `
 -Type VA
```

- Convert the resource to JSON
```powershell
$ManagedClientRequest | ConvertTo-JSON
```


[[Back to top]](#) 

