---
id: workitems-form
title: WorkitemsForm
pagination_label: WorkitemsForm
sidebar_label: WorkitemsForm
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkitemsForm', 'WorkitemsForm'] 
slug: /tools/sdk/powershell/workitems/models/workitems-form
tags: ['SDK', 'Software Development Kit', 'WorkitemsForm', 'WorkitemsForm']
---


# WorkitemsForm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the form | [optional] 
**Name** | **String** | Name of the form | [optional] 
**Title** | **String** | The form title | [optional] 
**Subtitle** | **String** | The form subtitle. | [optional] 
**TargetUser** | **String** | The name of the user that should be shown this form | [optional] 
**Sections** | [**[]Sectiondetails**](sectiondetails) | Sections of the form | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkitemsForm = Initialize-WorkitemsForm  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Name AccountSelection Form `
 -Title Account Selection for John.Doe `
 -Subtitle Please select from the following `
 -TargetUser Jane.Doe `
 -Sections null
```

- Convert the resource to JSON
```powershell
$WorkitemsForm | ConvertTo-JSON
```


[[Back to top]](#) 

