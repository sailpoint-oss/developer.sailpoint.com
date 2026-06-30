---
id: createformdefinitionrequest
title: Createformdefinitionrequest
pagination_label: Createformdefinitionrequest
sidebar_label: Createformdefinitionrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Createformdefinitionrequest', 'Createformdefinitionrequest'] 
slug: /tools/sdk/powershell/customforms/models/createformdefinitionrequest
tags: ['SDK', 'Software Development Kit', 'Createformdefinitionrequest', 'Createformdefinitionrequest']
---


# Createformdefinitionrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | **String** | Description is the form definition description | [optional] 
**FormConditions** | [**[]Formcondition**](formcondition) | FormConditions is the conditional logic that modify the form dynamically modify the form as the recipient is interacting out the form | [optional] 
**FormElements** | [**[]Formelement**](formelement) | FormElements is a list of nested form elements | [optional] 
**FormInput** | [**[]Formdefinitioninput**](formdefinitioninput) | FormInput is a list of form inputs that are required when creating a form-instance object | [optional] 
**Name** | **String** | Name is the form definition name | [required]
**Owner** | [**Formowner**](formowner) |  | [required]
**UsedBy** | [**[]Formusedby**](formusedby) | UsedBy is a list of objects where when any system uses a particular form it reaches out to the form service to record it is currently being used | [optional] 

## Examples

- Prepare the resource
```powershell
$Createformdefinitionrequest = Initialize-Createformdefinitionrequest  -Description My form description `
 -FormConditions null `
 -FormElements null `
 -FormInput null `
 -Name My form `
 -Owner null `
 -UsedBy null
```

- Convert the resource to JSON
```powershell
$Createformdefinitionrequest | ConvertTo-JSON
```


[[Back to top]](#) 

