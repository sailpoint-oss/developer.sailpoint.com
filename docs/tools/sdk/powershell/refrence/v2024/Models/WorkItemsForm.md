---
id: work-items-form
title: WorkItemsForm
pagination_label: WorkItemsForm
sidebar_label: WorkItemsForm
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkItemsForm'] 
slug: /tools/sdk/powershell/v2024/models/work-items-form
tags: ['SDK', 'Software Development Kit', 'WorkItemsForm']
---


# WorkItemsForm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | ID of the form | [optional] 
**Name** |  Pointer to **String** | Name of the form | [optional] 
**Title** |  Pointer to **String** | The form title | [optional] 
**Subtitle** |  Pointer to **String** | The form subtitle. | [optional] 
**TargetUser** |  Pointer to **String** | The name of the user that should be shown this form | [optional] 
**Sections** |  Pointer to [**[]SectionDetails**](section-details) | Sections of the form | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkItemsForm = Initialize-PSSailpoint.V2024WorkItemsForm  -Id 2c9180835d2e5168015d32f890ca1581 `
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

