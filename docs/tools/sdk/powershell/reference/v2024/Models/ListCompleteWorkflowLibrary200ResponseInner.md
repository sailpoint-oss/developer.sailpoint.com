---
id: v2024-list-complete-workflow-library200-response-inner
title: ListCompleteWorkflowLibrary200ResponseInner
pagination_label: ListCompleteWorkflowLibrary200ResponseInner
sidebar_label: ListCompleteWorkflowLibrary200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListCompleteWorkflowLibrary200ResponseInner', 'V2024ListCompleteWorkflowLibrary200ResponseInner'] 
slug: /tools/sdk/powershell/v2024/models/list-complete-workflow-library200-response-inner
tags: ['SDK', 'Software Development Kit', 'ListCompleteWorkflowLibrary200ResponseInner', 'V2024ListCompleteWorkflowLibrary200ResponseInner']
---


# ListCompleteWorkflowLibrary200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Operator ID. | [optional] 
**Name** |  Pointer to **String** | Operator friendly name | [optional] 
**Type** |  Pointer to **String** | Operator type | [optional] 
**Description** |  Pointer to **String** | Description of the operator | [optional] 
**FormFields** |  Pointer to [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the operator accepts | [optional] 
**ExampleOutput** |  Pointer to [**WorkflowLibraryActionExampleOutput**](workflow-library-action-example-output) |  | [optional] 
**Deprecated** |  Pointer to **Boolean** |  | [optional] 
**DeprecatedBy** |  Pointer to **System.DateTime** |  | [optional] 
**VersionNumber** |  Pointer to **Int32** | Version number | [optional] 
**IsSimulationEnabled** |  Pointer to **Boolean** |  | [optional] 
**IsDynamicSchema** |  Pointer to **Boolean** | Determines whether the dynamic output schema is returned in place of the action's output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] 
**OutputSchema** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Example output schema | [optional] 
**InputExample** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Example trigger payload if applicable | [optional] 

## Examples

- Prepare the resource
```powershell
$ListCompleteWorkflowLibrary200ResponseInner = Initialize-PSSailpoint.V2024ListCompleteWorkflowLibrary200ResponseInner  -Id sp:compare-boolean `
 -Name Compare Boolean Values `
 -Type OPERATOR `
 -Description Compare two boolean values and decide what happens based on the result. `
 -FormFields [{description&#x3D;Enter the JSONPath to a value from the input to compare to Variable B., helpText&#x3D;, label&#x3D;Variable A, name&#x3D;variableA.$, required&#x3D;true, type&#x3D;text}, {helpText&#x3D;Select an operation., label&#x3D;Operation, name&#x3D;operator, options&#x3D;[{label&#x3D;Equals, value&#x3D;BooleanEquals}], required&#x3D;true, type&#x3D;select}, {description&#x3D;Enter the JSONPath to a value from the input to compare to Variable A., helpText&#x3D;, label&#x3D;Variable B, name&#x3D;variableB.$, required&#x3D;false, type&#x3D;text}, {description&#x3D;Enter True or False., helpText&#x3D;, label&#x3D;Variable B, name&#x3D;variableB, required&#x3D;false, type&#x3D;text}] `
 -ExampleOutput null `
 -Deprecated null `
 -DeprecatedBy null `
 -VersionNumber null `
 -IsSimulationEnabled null `
 -IsDynamicSchema false `
 -OutputSchema null `
 -InputExample {changes&#x3D;[{attribute&#x3D;department, newValue&#x3D;marketing, oldValue&#x3D;sales}, {attribute&#x3D;manager, newValue&#x3D;{id&#x3D;ee769173319b41d19ccec6c235423236c, name&#x3D;mean.guy, type&#x3D;IDENTITY}, oldValue&#x3D;{id&#x3D;ee769173319b41d19ccec6c235423237b, name&#x3D;nice.guy, type&#x3D;IDENTITY}}, {attribute&#x3D;email, newValue&#x3D;john.doe@gmail.com, oldValue&#x3D;john.doe@hotmail.com}], identity&#x3D;{id&#x3D;ee769173319b41d19ccec6cea52f237b, name&#x3D;john.doe, type&#x3D;IDENTITY}}
```

- Convert the resource to JSON
```powershell
$ListCompleteWorkflowLibrary200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

