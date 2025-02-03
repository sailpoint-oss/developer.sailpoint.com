---
id: beta-list-complete-workflow-library200-response-inner
title: ListCompleteWorkflowLibrary200ResponseInner
pagination_label: ListCompleteWorkflowLibrary200ResponseInner
sidebar_label: ListCompleteWorkflowLibrary200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListCompleteWorkflowLibrary200ResponseInner', 'BetaListCompleteWorkflowLibrary200ResponseInner'] 
slug: /tools/sdk/powershell/beta/models/list-complete-workflow-library200-response-inner
tags: ['SDK', 'Software Development Kit', 'ListCompleteWorkflowLibrary200ResponseInner', 'BetaListCompleteWorkflowLibrary200ResponseInner']
---


# ListCompleteWorkflowLibrary200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Operator ID. | [optional] 
**Name** | **String** | Operator friendly name | [optional] 
**Type** | **String** | Operator type | [optional] 
**Description** | **String** | Description of the operator | [optional] 
**FormFields** | [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the operator accepts | [optional] 
**ExampleOutput** | [**WorkflowLibraryActionExampleOutput**](workflow-library-action-example-output) |  | [optional] 
**Deprecated** | **Boolean** |  | [optional] 
**DeprecatedBy** | **System.DateTime** |  | [optional] 
**VersionNumber** | **Int32** | Version number | [optional] 
**IsSimulationEnabled** | **Boolean** |  | [optional] 
**IsDynamicSchema** | **Boolean** | Determines whether the dynamic output schema is returned in place of the action's output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] 
**OutputSchema** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Example output schema | [optional] 
**InputExample** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Example trigger payload if applicable | [optional] 

## Examples

- Prepare the resource
```powershell
$ListCompleteWorkflowLibrary200ResponseInner = Initialize-PSSailpoint.BetaListCompleteWorkflowLibrary200ResponseInner  -Id sp:compare-boolean `
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

