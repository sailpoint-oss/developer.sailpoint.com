---
id: form
title: Form
pagination_label: Form
sidebar_label: Form
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Form'] 
slug: /tools/sdk/powershell/beta/models/form
tags: ['SDK', 'Software Development Kit', 'Form']
---


# Form

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | ID of the form | [optional] 
**Name** |  Pointer to **String** | Name of the form | [optional] 
**Title** |  Pointer to **String** | The form title | [optional] 
**Subtitle** |  Pointer to **String** | The form subtitle. | [optional] 
**TargetUser** |  Pointer to **String** | The name of the user that should be shown this form | [optional] 
**Sections** |  Pointer to [**SectionDetails**](section-details) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Form = Initialize-BetaForm  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Name AccountSelection Form `
 -Title Account Selection for John.Doe `
 -Subtitle Please select from the following `
 -TargetUser Jane.Doe `
 -Sections null
```

- Convert the resource to JSON
```powershell
$Form | ConvertTo-JSON
```


[[Back to top]](#) 

