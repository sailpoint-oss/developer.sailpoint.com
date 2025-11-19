---
id: v2025-parameter-storage-update-parameter
title: ParameterStorageUpdateParameter
pagination_label: ParameterStorageUpdateParameter
sidebar_label: ParameterStorageUpdateParameter
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ParameterStorageUpdateParameter', 'V2025ParameterStorageUpdateParameter'] 
slug: /tools/sdk/powershell/v2025/models/parameter-storage-update-parameter
tags: ['SDK', 'Software Development Kit', 'ParameterStorageUpdateParameter', 'V2025ParameterStorageUpdateParameter']
---


# ParameterStorageUpdateParameter

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
$ParameterStorageUpdateParameter = Initialize-V2025ParameterStorageUpdateParameter  -OwnerId c0b4568a4fe7458c434ee77d1fbt156b `
 -Name Credentials for server. `
 -PublicFields {"username": "username"} `
 -PrivateFields ZW5jcnlwdGVkIHBhc3N3b3JkIGhlcmUu `
 -Description Credentials for server.
```

- Convert the resource to JSON
```powershell
$ParameterStorageUpdateParameter | ConvertTo-JSON
```


[[Back to top]](#) 

