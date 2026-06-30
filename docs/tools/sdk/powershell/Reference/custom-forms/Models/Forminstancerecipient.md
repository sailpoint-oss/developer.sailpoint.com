---
id: forminstancerecipient
title: Forminstancerecipient
pagination_label: Forminstancerecipient
sidebar_label: Forminstancerecipient
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Forminstancerecipient', 'Forminstancerecipient'] 
slug: /tools/sdk/powershell/customforms/models/forminstancerecipient
tags: ['SDK', 'Software Development Kit', 'Forminstancerecipient', 'Forminstancerecipient']
---


# Forminstancerecipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID is a unique identifier | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | Type is a FormInstanceRecipientType value IDENTITY FormInstanceRecipientIdentity | [optional] 

## Examples

- Prepare the resource
```powershell
$Forminstancerecipient = Initialize-Forminstancerecipient  -Id 00000000-0000-0000-0000-000000000000 `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$Forminstancerecipient | ConvertTo-JSON
```


[[Back to top]](#) 

