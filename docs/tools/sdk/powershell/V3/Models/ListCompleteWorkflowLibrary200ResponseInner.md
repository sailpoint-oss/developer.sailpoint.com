---
id: list-complete-workflow-library200-response-inner
title: ListCompleteWorkflowLibrary200ResponseInner
pagination_label: ListCompleteWorkflowLibrary200ResponseInner
sidebar_label: ListCompleteWorkflowLibrary200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ListCompleteWorkflowLibrary200ResponseInner'] 
slug: /tools/sdk/powershell/v3/models/list-complete-workflow-library200-response-inner
tags: ['SDK', 'Software Development Kit', 'ListCompleteWorkflowLibrary200ResponseInner']
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
**IsDynamicSchema** |  Pointer to **Boolean** | Determines whether the dynamic output schema is returned in place of the action&#39;s output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] [default to $false]
**OutputSchema** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Defines the output schema, if any, that this action produces. | [optional] 
**InputExample** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Example trigger payload if applicable | [optional] 

## Examples

- Prepare the resource
```powershell
$ListCompleteWorkflowLibrary200ResponseInner = Initialize-ListCompleteWorkflowLibrary200ResponseInner  -Id sp:compare-boolean `
 -Name Compare Boolean Values `
 -Type OPERATOR `
 -Description Compare two boolean values and decide what happens based on the result. `
 -FormFields [{description=Enter the JSONPath to a value from the input to compare to Variable B., helpText=, label=Variable A, name=variableA.$, required=true, type=text}, {helpText=Select an operation., label=Operation, name=operator, options=[{label=Equals, value=BooleanEquals}], required=true, type=select}, {description=Enter the JSONPath to a value from the input to compare to Variable A., helpText=, label=Variable B, name=variableB.$, required=false, type=text}, {description=Enter True or False., helpText=, label=Variable B, name=variableB, required=false, type=text}] `
 -IsDynamicSchema false `
 -OutputSchema {definitions={}, properties={autoRevokeAllowed={$id=#sp:create-campaign/autoRevokeAllowed, default=true, examples=[false], title=autoRevokeAllowed, type=boolean}, deadline={$id=#sp:create-campaign/deadline, default=, examples=[2020-12-25T06:00:00.468Z], format=date-time, pattern=^.*$, title=deadline, type=string}, description={$id=#sp:create-campaign/description, default=, examples=[A review of everyone's access by their manager.], pattern=^.*$, title=description, type=string}, emailNotificationEnabled={$id=#sp:create-campaign/emailNotificationEnabled, default=true, examples=[false], title=emailNotificationEnabled, type=boolean}, filter={$id=#sp:create-campaign/filter, properties={id={$id=#sp:create-campaign/filter/id, default=, examples=[e0adaae69852e8fe8b8a3d48e5ce757c], pattern=^.*$, title=id, type=string}, type={$id=#sp:create-campaign/filter/type, default=, examples=[CAMPAIGN_FILTER], pattern=^.*$, title=type, type=string}}, title=filter, type=object}, id={$id=#sp:create-campaign/id, default=, examples=[2c918086719eec070171a7e3355a360a], pattern=^.*$, title=id, type=string}, name={$id=#sp:create-campaign/name, default=, examples=[Manager Review], pattern=^.*$, title=name, type=string}, recommendationsEnabled={$id=#sp:create-campaign/recommendationsEnabled, default=true, examples=[false], title=recommendationEnabled, type=boolean}, type={$id=#sp:create-campaign/type, default=, examples=[MANAGER], pattern=^.*$, title=type, type=string}}, title=sp:create-campaign, type=object} `
 -InputExample {changes=[{attribute=department, newValue=marketing, oldValue=sales}, {attribute=manager, newValue={id=ee769173319b41d19ccec6c235423236c, name=mean.guy, type=IDENTITY}, oldValue={id=ee769173319b41d19ccec6c235423237b, name=nice.guy, type=IDENTITY}}, {attribute=email, newValue=john.doe@gmail.com, oldValue=john.doe@hotmail.com}], identity={id=ee769173319b41d19ccec6cea52f237b, name=john.doe, type=IDENTITY}}
```

- Convert the resource to JSON
```powershell
$ListCompleteWorkflowLibrary200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

