---
id: v2024-work-items-form
title: WorkItemsForm
pagination_label: WorkItemsForm
sidebar_label: WorkItemsForm
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkItemsForm', 'V2024WorkItemsForm'] 
slug: /tools/sdk/powershell/v2024/models/work-items-form
tags: ['SDK', 'Software Development Kit', 'WorkItemsForm', 'V2024WorkItemsForm']
---


# WorkItemsForm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the form | [optional] 
**Name** | **String** | Name of the form | [optional] 
**Title** | **String** | The form title | [optional] 
**Subtitle** | **String** | The form subtitle. | [optional] 
**TargetUser** | **String** | The name of the user that should be shown this form | [optional] 
**Sections** | [**[]SectionDetails**](section-details) | Sections of the form | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkItemsForm = Initialize-V2024WorkItemsForm  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Name AccountSelection Form `
 -Title Account Selection for John.Doe `
 -Subtitle Please select from the following `
 -TargetUser Jane.Doe `
 -Sections null
```

- Convert the resource to JSON
```powershell
$WorkItemsForm | ConvertTo-JSON
```


[[Back to top]](#) 

