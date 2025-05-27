---
id: v2024-form-definition-self-import-export-dto
title: FormDefinitionSelfImportExportDto
pagination_label: FormDefinitionSelfImportExportDto
sidebar_label: FormDefinitionSelfImportExportDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormDefinitionSelfImportExportDto', 'V2024FormDefinitionSelfImportExportDto'] 
slug: /tools/sdk/powershell/v2024/models/form-definition-self-import-export-dto
tags: ['SDK', 'Software Development Kit', 'FormDefinitionSelfImportExportDto', 'V2024FormDefinitionSelfImportExportDto']
---


# FormDefinitionSelfImportExportDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "FORM_DEFINITION" ] | Imported/exported object's DTO type. | [optional] 
**Id** | **String** | Imported/exported object's ID. | [optional] 
**Name** | **String** | Imported/exported object's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$FormDefinitionSelfImportExportDto = Initialize-V2024FormDefinitionSelfImportExportDto  -Type FORM_DEFINITION `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name Temporary User Level Permissions - Requester
```

- Convert the resource to JSON
```powershell
$FormDefinitionSelfImportExportDto | ConvertTo-JSON
```


[[Back to top]](#) 

