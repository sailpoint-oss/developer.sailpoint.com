---
id: beta-form-details
title: FormDetails
pagination_label: FormDetails
sidebar_label: FormDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormDetails', 'BetaFormDetails'] 
slug: /tools/sdk/powershell/beta/models/form-details
tags: ['SDK', 'Software Development Kit', 'FormDetails', 'BetaFormDetails']
---


# FormDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the form | [optional] 
**Name** | **String** | Name of the form | [optional] 
**Title** | **String** | The form title | [optional] 
**Subtitle** | **String** | The form subtitle. | [optional] 
**TargetUser** | **String** | The name of the user that should be shown this form | [optional] 
**Sections** | [**[]SectionDetails**](section-details) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$FormDetails = Initialize-BetaFormDetails  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Name AccountSelection Form `
 -Title Account Selection for John.Doe `
 -Subtitle Please select from the following `
 -TargetUser Jane.Doe `
 -Sections null
```

- Convert the resource to JSON
```powershell
$FormDetails | ConvertTo-JSON
```


[[Back to top]](#) 

