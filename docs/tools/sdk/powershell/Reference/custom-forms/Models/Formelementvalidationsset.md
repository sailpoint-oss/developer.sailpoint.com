---
id: formelementvalidationsset
title: Formelementvalidationsset
pagination_label: Formelementvalidationsset
sidebar_label: Formelementvalidationsset
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Formelementvalidationsset', 'Formelementvalidationsset'] 
slug: /tools/sdk/powershell/customforms/models/formelementvalidationsset
tags: ['SDK', 'Software Development Kit', 'Formelementvalidationsset', 'Formelementvalidationsset']
---


# Formelementvalidationsset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ValidationType** |  **Enum** [  "REQUIRED",    "MIN_LENGTH",    "MAX_LENGTH",    "REGEX",    "DATE",    "MAX_DATE",    "MIN_DATE",    "LESS_THAN_DATE",    "PHONE",    "EMAIL",    "DATA_SOURCE",    "TEXTAREA" ] | The type of data validation that you wish to enforce, e.g., a required field, a minimum length, etc. | [optional] 

## Examples

- Prepare the resource
```powershell
$Formelementvalidationsset = Initialize-Formelementvalidationsset  -ValidationType REQUIRED
```

- Convert the resource to JSON
```powershell
$Formelementvalidationsset | ConvertTo-JSON
```


[[Back to top]](#) 

