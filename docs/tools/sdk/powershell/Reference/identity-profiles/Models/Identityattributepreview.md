---
id: identityattributepreview
title: Identityattributepreview
pagination_label: Identityattributepreview
sidebar_label: Identityattributepreview
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityattributepreview', 'Identityattributepreview'] 
slug: /tools/sdk/powershell/identityprofiles/models/identityattributepreview
tags: ['SDK', 'Software Development Kit', 'Identityattributepreview', 'Identityattributepreview']
---


# Identityattributepreview

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the attribute that is being previewed. | [optional] 
**Value** | **String** | Value that was derived during the preview. | [optional] 
**PreviousValue** | **String** | The value of the attribute before the preview. | [optional] 
**ErrorMessages** | [**[]Errormessagedto**](errormessagedto) | List of error messages | [optional] 

## Examples

- Prepare the resource
```powershell
$Identityattributepreview = Initialize-Identityattributepreview  -Name email `
 -Value email@mail.com `
 -PreviousValue oldEmail@mail.com `
 -ErrorMessages {"locale":"en-US","localeOrigin":"DEFAULT","text":"Error Message"}
```

- Convert the resource to JSON
```powershell
$Identityattributepreview | ConvertTo-JSON
```


[[Back to top]](#) 

