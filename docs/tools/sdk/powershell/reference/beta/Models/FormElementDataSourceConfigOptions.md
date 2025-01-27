---
id: form-element-data-source-config-options
title: FormElementDataSourceConfigOptions
pagination_label: FormElementDataSourceConfigOptions
sidebar_label: FormElementDataSourceConfigOptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormElementDataSourceConfigOptions'] 
slug: /tools/sdk/powershell/beta/models/form-element-data-source-config-options
tags: ['SDK', 'Software Development Kit', 'FormElementDataSourceConfigOptions']
---


# FormElementDataSourceConfigOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Label** |  Pointer to **String** | Label is the main label to display to the user when selecting this option | [optional] 
**SubLabel** |  Pointer to **String** | SubLabel is the sub label to display below the label in diminutive styling to help describe or identify this option | [optional] 
**Value** |  Pointer to **String** | Value is the value to save as an entry when the user selects this option | [optional] 

## Examples

- Prepare the resource
```powershell
$FormElementDataSourceConfigOptions = Initialize-PSSailpoint.BetaFormElementDataSourceConfigOptions  -Label regression-test-access-request-07c55dd6-3056-430a-86b5-fccc395bb6c5 `
 -SubLabel  `
 -Value e96674448eba4ca1ba04eee999a8f3cd
```

- Convert the resource to JSON
```powershell
$FormElementDataSourceConfigOptions | ConvertTo-JSON
```


[[Back to top]](#) 

