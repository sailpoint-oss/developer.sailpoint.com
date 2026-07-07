---
id: parameterstorageupdateparameter
title: Parameterstorageupdateparameter
pagination_label: Parameterstorageupdateparameter
sidebar_label: Parameterstorageupdateparameter
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Parameterstorageupdateparameter', 'Parameterstorageupdateparameter'] 
slug: /tools/sdk/powershell/parameterstorage/models/parameterstorageupdateparameter
tags: ['SDK', 'Software Development Kit', 'Parameterstorageupdateparameter', 'Parameterstorageupdateparameter']
---


# Parameterstorageupdateparameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OwnerId** | **String** | The UUID of the parameter owner. | [optional] 
**Name** | **String** | The human-readable name for the parameter. | [optional] 
**PublicFields** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The public fields that can be stored with this parameter. | [optional] 
**PrivateFields** | **String** | The private fields that can be stored with this parameter. | [optional] 
**Description** | **String** | Describe the parameter | [optional] 

## Examples

- Prepare the resource
```powershell
$Parameterstorageupdateparameter = Initialize-Parameterstorageupdateparameter  -OwnerId c0b4568a4fe7458c434ee77d1fbt156b `
 -Name Credentials for server. `
 -PublicFields {"username": "username"} `
 -PrivateFields ZW5jcnlwdGVkIHBhc3N3b3JkIGhlcmUu `
 -Description Credentials for server.
```

- Convert the resource to JSON
```powershell
$Parameterstorageupdateparameter | ConvertTo-JSON
```


[[Back to top]](#) 

