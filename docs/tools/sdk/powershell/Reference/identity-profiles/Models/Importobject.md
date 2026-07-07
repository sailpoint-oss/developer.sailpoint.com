---
id: importobject
title: Importobject
pagination_label: Importobject
sidebar_label: Importobject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Importobject', 'Importobject'] 
slug: /tools/sdk/powershell/identityprofiles/models/importobject
tags: ['SDK', 'Software Development Kit', 'Importobject', 'Importobject']
---


# Importobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "CONNECTOR_RULE",    "IDENTITY_OBJECT_CONFIG",    "IDENTITY_PROFILE",    "RULE",    "SOURCE",    "TRANSFORM",    "TRIGGER_SUBSCRIPTION" ] | DTO type of object created or updated by import. | [optional] 
**Id** | **String** | ID of object created or updated by import. | [optional] 
**Name** | **String** | Display name of object created or updated by import. | [optional] 

## Examples

- Prepare the resource
```powershell
$Importobject = Initialize-Importobject  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$Importobject | ConvertTo-JSON
```


[[Back to top]](#) 

