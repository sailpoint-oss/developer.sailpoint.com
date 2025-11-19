---
id: beta-create-form-definition-request
title: CreateFormDefinitionRequest
pagination_label: CreateFormDefinitionRequest
sidebar_label: CreateFormDefinitionRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateFormDefinitionRequest', 'BetaCreateFormDefinitionRequest'] 
slug: /tools/sdk/powershell/beta/models/create-form-definition-request
tags: ['SDK', 'Software Development Kit', 'CreateFormDefinitionRequest', 'BetaCreateFormDefinitionRequest']
---


# CreateFormDefinitionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | **String** | Description is the form definition description | [optional] 
**FormConditions** | [**[]FormCondition**](form-condition) | FormConditions is the conditional logic that modify the form dynamically modify the form as the recipient is interacting out the form | [optional] 
**FormElements** | [**[]FormElement**](form-element) | FormElements is a list of nested form elements | [optional] 
**FormInput** | [**[]FormDefinitionInput**](form-definition-input) | FormInput is a list of form inputs that are required when creating a form-instance object | [optional] 
**Name** | **String** | Name is the form definition name | [required]
**Owner** | [**FormOwner**](form-owner) |  | [required]
**UsedBy** | [**[]FormUsedBy**](form-used-by) | UsedBy is a list of objects where when any system uses a particular form it reaches out to the form service to record it is currently being used | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateFormDefinitionRequest = Initialize-BetaCreateFormDefinitionRequest  -Description My form description `
 -FormConditions null `
 -FormElements null `
 -FormInput null `
 -Name My form `
 -Owner null `
 -UsedBy null
```

- Convert the resource to JSON
```powershell
$CreateFormDefinitionRequest | ConvertTo-JSON
```


[[Back to top]](#) 

