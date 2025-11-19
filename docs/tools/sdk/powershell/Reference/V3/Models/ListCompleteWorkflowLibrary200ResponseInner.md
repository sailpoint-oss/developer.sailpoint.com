---
id: list-complete-workflow-library200-response-inner
title: ListCompleteWorkflowLibrary200ResponseInner
pagination_label: ListCompleteWorkflowLibrary200ResponseInner
sidebar_label: ListCompleteWorkflowLibrary200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListCompleteWorkflowLibrary200ResponseInner', 'ListCompleteWorkflowLibrary200ResponseInner'] 
slug: /tools/sdk/powershell/v3/models/list-complete-workflow-library200-response-inner
tags: ['SDK', 'Software Development Kit', 'ListCompleteWorkflowLibrary200ResponseInner', 'ListCompleteWorkflowLibrary200ResponseInner']
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
$ListCompleteWorkflowLibrary200ResponseInner = Initialize-ListCompleteWorkflowLibrary200ResponseInner  -Id sp:compare-boolean `
 -Name Compare Boolean Values `
 -Type OPERATOR `
 -Description Compare two boolean values and decide what happens based on the result. `
 -FormFields [{description=Enter the JSONPath to a value from the input to compare to Variable B., helpText=, label=Variable A, name=variableA.$, required=true, type=text}, {helpText=Select an operation., label=Operation, name=operator, options=[{label=Equals, value=BooleanEquals}], required=true, type=select}, {description=Enter the JSONPath to a value from the input to compare to Variable A., helpText=, label=Variable B, name=variableB.$, required=false, type=text}, {description=Enter True or False., helpText=, label=Variable B, name=variableB, required=false, type=text}] `
 -ExampleOutput null `
 -Deprecated null `
 -DeprecatedBy null `
 -VersionNumber null `
 -IsSimulationEnabled null `
 -IsDynamicSchema false `
 -OutputSchema null `
 -InputExample {changes=[{attribute=department, newValue=marketing, oldValue=sales}, {attribute=manager, newValue={id=ee769173319b41d19ccec6c235423236c, name=mean.guy, type=IDENTITY}, oldValue={id=ee769173319b41d19ccec6c235423237b, name=nice.guy, type=IDENTITY}}, {attribute=email, newValue=john.doe@gmail.com, oldValue=john.doe@hotmail.com}], identity={id=ee769173319b41d19ccec6cea52f237b, name=john.doe, type=IDENTITY}}
```

- Convert the resource to JSON
```powershell
$ListCompleteWorkflowLibrary200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

