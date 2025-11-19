---
id: v2025-parameter-storage-parameter
title: ParameterStorageParameter
pagination_label: ParameterStorageParameter
sidebar_label: ParameterStorageParameter
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ParameterStorageParameter', 'V2025ParameterStorageParameter'] 
slug: /tools/sdk/powershell/v2025/models/parameter-storage-parameter
tags: ['SDK', 'Software Development Kit', 'ParameterStorageParameter', 'V2025ParameterStorageParameter']
---


# ParameterStorageParameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the reference | [required]
**OwnerId** | **String** | The ID of the user who owns the parameter. | [required]
**Type** | **String** | The type of the parameter. This cannot be changed after being set. Please see the types document for more information. | [optional] 
**Name** | **String** | The human-readable name of the parameter. | [required]
**PrimaryField** | **String** | The name of the primary field in the public fields. | [optional] 
**PublicFields** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The public fields stored for this parameter. See the types document for information about what can be stored. | [required]
**Description** | **String** | Describe the parameter | [optional] 
**LastModifiedAt** | **String** | ISO8606 format datetime of the last time any field of the parameter was changed. | [optional] 
**LastModifiedBy** | **String** | The ID of the user who last modified the parameter. Empty when identity is not known. | [optional] 
**PrivateFieldsLastModifiedAt** | **String** | ISO8606 format datetime of the time the secret fields were changed on the parameter. | [optional] 
**PrivateFieldsLastModifiedBy** | **String** | The ID of the user who last modified the private fields. Empty when identity is not known. | [optional] 

## Examples

- Prepare the resource
```powershell
$ParameterStorageParameter = Initialize-V2025ParameterStorageParameter  -Id 58de858b-83d9-4563-9e15-7393594c684a `
 -OwnerId c0b4568a4fe7458c434ee77d1fbt156b `
 -Type 1.1 `
 -Name Credentials for server `
 -PrimaryField username `
 -PublicFields {"username": "username"} `
 -Description Credentials for server. `
 -LastModifiedAt 2025-09-16T12:47:08Z `
 -LastModifiedBy c0b4568a4fe7458c434ee77d1fbt156b `
 -PrivateFieldsLastModifiedAt 2025-09-16T12:47:08Z `
 -PrivateFieldsLastModifiedBy c0b4568a4fe7458c434ee77d1fbt156b
```

- Convert the resource to JSON
```powershell
$ParameterStorageParameter | ConvertTo-JSON
```


[[Back to top]](#) 

