---
id: beta-form-definition-self-import-export-dto
title: FormDefinitionSelfImportExportDto
pagination_label: FormDefinitionSelfImportExportDto
sidebar_label: FormDefinitionSelfImportExportDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormDefinitionSelfImportExportDto'] 
slug: /tools/sdk/powershell/beta/models/form-definition-self-import-export-dto
tags: ['SDK', 'Software Development Kit', 'FormDefinitionSelfImportExportDto']
---


# FormDefinitionSelfImportExportDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "FORM_DEFINITION" ] | Imported/exported object's DTO type. | [optional] 
**Id** |  Pointer to **String** | Imported/exported object's ID. | [optional] 
**Name** |  Pointer to **String** | Imported/exported object's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$FormDefinitionSelfImportExportDto = Initialize-PSSailpoint.BetaFormDefinitionSelfImportExportDto  -Type FORM_DEFINITION `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name Temporary User Level Permissions - Requester
```

- Convert the resource to JSON
```powershell
$FormDefinitionSelfImportExportDto | ConvertTo-JSON
```


[[Back to top]](#) 

