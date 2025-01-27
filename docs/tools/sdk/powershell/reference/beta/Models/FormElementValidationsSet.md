---
id: beta-form-element-validations-set
title: FormElementValidationsSet
pagination_label: FormElementValidationsSet
sidebar_label: FormElementValidationsSet
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormElementValidationsSet'] 
slug: /tools/sdk/powershell/beta/models/form-element-validations-set
tags: ['SDK', 'Software Development Kit', 'FormElementValidationsSet']
---


# FormElementValidationsSet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ValidationType** |  Pointer to  **Enum** [  "REQUIRED",    "MIN_LENGTH",    "MAX_LENGTH",    "REGEX",    "DATE",    "MAX_DATE",    "MIN_DATE",    "LESS_THAN_DATE",    "PHONE",    "EMAIL",    "DATA_SOURCE",    "TEXTAREA" ] | The type of data validation that you wish to enforce, e.g., a required field, a minimum length, etc. | [optional] 

## Examples

- Prepare the resource
```powershell
$FormElementValidationsSet = Initialize-PSSailpoint.BetaFormElementValidationsSet  -ValidationType REQUIRED
```

- Convert the resource to JSON
```powershell
$FormElementValidationsSet | ConvertTo-JSON
```


[[Back to top]](#) 

