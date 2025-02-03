---
id: beta-import-object
title: ImportObject
pagination_label: ImportObject
sidebar_label: ImportObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportObject', 'BetaImportObject'] 
slug: /tools/sdk/powershell/beta/models/import-object
tags: ['SDK', 'Software Development Kit', 'ImportObject', 'BetaImportObject']
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
$ImportObject = Initialize-PSSailpoint.BetaImportObject  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$ImportObject | ConvertTo-JSON
```


[[Back to top]](#) 

