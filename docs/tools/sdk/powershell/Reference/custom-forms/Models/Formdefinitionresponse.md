---
id: formdefinitionresponse
title: Formdefinitionresponse
pagination_label: Formdefinitionresponse
sidebar_label: Formdefinitionresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Formdefinitionresponse', 'Formdefinitionresponse'] 
slug: /tools/sdk/powershell/customforms/models/formdefinitionresponse
tags: ['SDK', 'Software Development Kit', 'Formdefinitionresponse', 'Formdefinitionresponse']
---


# Formdefinitionresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique guid identifying the form definition. | [optional] 
**Name** | **String** | Name of the form definition. | [optional] 
**Description** | **String** | Form definition's description. | [optional] 
**Owner** | [**Formowner**](formowner) |  | [optional] 
**UsedBy** | [**[]Formusedby**](formusedby) | List of objects using the form definition. Whenever a system uses a form, the API reaches out to the form service to record that the system is currently using it. | [optional] 
**FormInput** | [**[]Formdefinitioninput**](formdefinitioninput) | List of form inputs required to create a form-instance object. | [optional] 
**FormElements** | [**[]Formelement**](formelement) | List of nested form elements. | [optional] 
**FormConditions** | [**[]Formcondition**](formcondition) | Conditional logic that can dynamically modify the form as the recipient is interacting with it. | [optional] 
**Created** | **System.DateTime** | Created is the date the form definition was created | [optional] 
**Modified** | **System.DateTime** | Modified is the last date the form definition was modified | [optional] 

## Examples

- Prepare the resource
```powershell
$Formdefinitionresponse = Initialize-Formdefinitionresponse  -Id 00000000-0000-0000-0000-000000000000 `
 -Name My form `
 -Description My form description `
 -Owner null `
 -UsedBy null `
 -FormInput null `
 -FormElements null `
 -FormConditions null `
 -Created 2023-07-12T20:14:57.744860Z `
 -Modified 2023-07-12T20:14:57.744860Z
```

- Convert the resource to JSON
```powershell
$Formdefinitionresponse | ConvertTo-JSON
```


[[Back to top]](#) 

