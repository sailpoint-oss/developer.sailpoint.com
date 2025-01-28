---
id: v2024-workflow-library-operator
title: WorkflowLibraryOperator
pagination_label: WorkflowLibraryOperator
sidebar_label: WorkflowLibraryOperator
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowLibraryOperator'] 
slug: /tools/sdk/powershell/v2024/models/workflow-library-operator
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
**IsDynamicSchema** |  Pointer to **Boolean** | Determines whether the dynamic output schema is returned in place of the action's output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] 
**Deprecated** |  Pointer to **Boolean** |  | [optional] 
**DeprecatedBy** |  Pointer to **System.DateTime** |  | [optional] 
**IsSimulationEnabled** |  Pointer to **Boolean** |  | [optional] 
**FormFields** |  Pointer to [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the operator accepts | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowLibraryOperator = Initialize-PSSailpoint.V2024WorkflowLibraryOperator  -Id sp:compare-boolean `
 -Name Compare Boolean Values `
 -Type OPERATOR `
 -Description Compare two boolean values and decide what happens based on the result. `
 -IsDynamicSchema false `
 -Deprecated null `
 -DeprecatedBy null `
 -IsSimulationEnabled null `
 -FormFields [{description&#x3D;Enter the JSONPath to a value from the input to compare to Variable B., helpText&#x3D;, label&#x3D;Variable A, name&#x3D;variableA.$, required&#x3D;true, type&#x3D;text}, {helpText&#x3D;Select an operation., label&#x3D;Operation, name&#x3D;operator, options&#x3D;[{label&#x3D;Equals, value&#x3D;BooleanEquals}], required&#x3D;true, type&#x3D;select}, {description&#x3D;Enter the JSONPath to a value from the input to compare to Variable A., helpText&#x3D;, label&#x3D;Variable B, name&#x3D;variableB.$, required&#x3D;false, type&#x3D;text}, {description&#x3D;Enter True or False., helpText&#x3D;, label&#x3D;Variable B, name&#x3D;variableB, required&#x3D;false, type&#x3D;text}]
```

- Convert the resource to JSON
```powershell
$WorkflowLibraryOperator | ConvertTo-JSON
```


[[Back to top]](#) 

