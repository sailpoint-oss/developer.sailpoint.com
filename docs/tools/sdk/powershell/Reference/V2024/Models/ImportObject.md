---
id: v2024-import-object
title: ImportObject
pagination_label: ImportObject
sidebar_label: ImportObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportObject', 'V2024ImportObject'] 
slug: /tools/sdk/powershell/v2024/models/import-object
tags: ['SDK', 'Software Development Kit', 'ImportObject', 'V2024ImportObject']
---


# ImportObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY_OBJECT_CONFIG",    "IDENTITY_PROFILE",    "RULE",    "SOURCE",    "TRANSFORM",    "TRIGGER_SUBSCRIPTION" ] | DTO type of object created or updated by import. | [optional] 
**Id** | **String** | ID of object created or updated by import. | [optional] 
**Name** | **String** | Display name of object created or updated by import. | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportObject = Initialize-PSSailpoint.V2024ImportObject  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$ImportObject | ConvertTo-JSON
```


[[Back to top]](#) 

