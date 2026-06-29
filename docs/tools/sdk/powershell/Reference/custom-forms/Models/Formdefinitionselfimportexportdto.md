---
id: formdefinitionselfimportexportdto
title: Formdefinitionselfimportexportdto
pagination_label: Formdefinitionselfimportexportdto
sidebar_label: Formdefinitionselfimportexportdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Formdefinitionselfimportexportdto', 'Formdefinitionselfimportexportdto'] 
slug: /tools/sdk/powershell/customforms/models/formdefinitionselfimportexportdto
tags: ['SDK', 'Software Development Kit', 'Formdefinitionselfimportexportdto', 'Formdefinitionselfimportexportdto']
---


# Formdefinitionselfimportexportdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "FORM_DEFINITION" ] | Imported/exported object's DTO type. | [optional] 
**Id** | **String** | Imported/exported object's ID. | [optional] 
**Name** | **String** | Imported/exported object's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Formdefinitionselfimportexportdto = Initialize-Formdefinitionselfimportexportdto  -Type FORM_DEFINITION `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name Temporary User Level Permissions - Requester
```

- Convert the resource to JSON
```powershell
$Formdefinitionselfimportexportdto | ConvertTo-JSON
```


[[Back to top]](#) 

