---
id: workflow-library-operator
title: WorkflowLibraryOperator
pagination_label: WorkflowLibraryOperator
sidebar_label: WorkflowLibraryOperator
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowLibraryOperator', 'WorkflowLibraryOperator'] 
slug: /tools/sdk/powershell/v3/models/workflow-library-operator
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryOperator', 'WorkflowLibraryOperator']
---


# WorkflowLibraryOperator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Operator ID. | [optional] 
**Name** | **String** | Operator friendly name | [optional] 
**Type** | **String** | Operator type | [optional] 
**Description** | **String** | Description of the operator | [optional] 
**IsDynamicSchema** | **Boolean** | Determines whether the dynamic output schema is returned in place of the action's output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] 
**Deprecated** | **Boolean** |  | [optional] 
**DeprecatedBy** | **System.DateTime** |  | [optional] 
**IsSimulationEnabled** | **Boolean** |  | [optional] 
**FormFields** | [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the operator accepts | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowLibraryOperator = Initialize-PSSailpoint.V3WorkflowLibraryOperator  -Id sp:compare-boolean `
 -Name Compare Boolean Values `
 -Type OPERATOR `
 -Description Compare two boolean values and decide what happens based on the result. `
 -IsDynamicSchema false `
 -Deprecated null `
 -DeprecatedBy null `
 -IsSimulationEnabled null `
 -FormFields [{description=Enter the JSONPath to a value from the input to compare to Variable B., helpText=, label=Variable A, name=variableA.$, required=true, type=text}, {helpText=Select an operation., label=Operation, name=operator, options=[{label=Equals, value=BooleanEquals}], required=true, type=select}, {description=Enter the JSONPath to a value from the input to compare to Variable A., helpText=, label=Variable B, name=variableB.$, required=false, type=text}, {description=Enter True or False., helpText=, label=Variable B, name=variableB, required=false, type=text}]
```

- Convert the resource to JSON
```powershell
$WorkflowLibraryOperator | ConvertTo-JSON
```


[[Back to top]](#) 

