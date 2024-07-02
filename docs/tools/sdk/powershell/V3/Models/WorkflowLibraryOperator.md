---
id: workflow-library-operator
title: WorkflowLibraryOperator
pagination_label: WorkflowLibraryOperator
sidebar_label: WorkflowLibraryOperator
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'WorkflowLibraryOperator'] 
slug: /tools/sdk/powershell/v3/models/workflow-library-operator
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryOperator']
---


# WorkflowLibraryOperator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Operator ID. | [optional] 
**Name** |  Pointer to **String** | Operator friendly name | [optional] 
**Type** |  Pointer to **String** | Operator type | [optional] 
**Description** |  Pointer to **String** | Description of the operator | [optional] 
**FormFields** |  Pointer to [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the operator accepts | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowLibraryOperator = Initialize-WorkflowLibraryOperator  -Id sp:compare-boolean `
 -Name Compare Boolean Values `
 -Type OPERATOR `
 -Description Compare two boolean values and decide what happens based on the result. `
 -FormFields [{description=Enter the JSONPath to a value from the input to compare to Variable B., helpText=, label=Variable A, name=variableA.$, required=true, type=text}, {helpText=Select an operation., label=Operation, name=operator, options=[{label=Equals, value=BooleanEquals}], required=true, type=select}, {description=Enter the JSONPath to a value from the input to compare to Variable A., helpText=, label=Variable B, name=variableB.$, required=false, type=text}, {description=Enter True or False., helpText=, label=Variable B, name=variableB, required=false, type=text}]
```

- Convert the resource to JSON
```powershell
$WorkflowLibraryOperator | ConvertTo-JSON
```


[[Back to top]](#) 

