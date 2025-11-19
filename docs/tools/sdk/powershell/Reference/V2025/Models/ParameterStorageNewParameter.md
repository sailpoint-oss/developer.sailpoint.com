---
id: v2025-parameter-storage-new-parameter
title: ParameterStorageNewParameter
pagination_label: ParameterStorageNewParameter
sidebar_label: ParameterStorageNewParameter
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ParameterStorageNewParameter', 'V2025ParameterStorageNewParameter'] 
slug: /tools/sdk/powershell/v2025/models/parameter-storage-new-parameter
tags: ['SDK', 'Software Development Kit', 'ParameterStorageNewParameter', 'V2025ParameterStorageNewParameter']
---


# ParameterStorageNewParameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OwnerId** | **String** | The UUID of the parameter owner. | [required]
**Name** | **String** | The human-readable name for the parameter. | [required]
**Type** | **String** | The type of the parameter. This cannot be changed after being set. Please see the types document for more information. | [required]
**PublicFields** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The content must be a JSON object containing the public fields that can be stored with this parameter. | [optional] 
**PrivateFields** | **String** | Must be a JWE AES256 encrypted blob. The content of the blob must be a JSON object containing the private fields that can be stored with this parameter.  | [optional] 
**Description** | **String** | Describe the parameter | [optional] 

## Examples

- Prepare the resource
```powershell
$ParameterStorageNewParameter = Initialize-V2025ParameterStorageNewParameter  -OwnerId c0b4568a4fe7458c434ee77d1fbt156b `
 -Name Credentials for server. `
 -Type 1.1 `
 -PublicFields {"username": "username"} `
 -PrivateFields ZW5jcnlwdGVkIHBhc3N3b3JkIGhlcmUu `
 -Description Credentials for server.
```

- Convert the resource to JSON
```powershell
$ParameterStorageNewParameter | ConvertTo-JSON
```


[[Back to top]](#) 

