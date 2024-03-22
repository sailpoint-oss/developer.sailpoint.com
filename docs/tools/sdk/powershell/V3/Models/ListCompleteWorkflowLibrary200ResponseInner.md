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
**OutputSchema** |  Pointer to [**SystemCollectionsHashtable**](system-collections-hashtable) | Defines the output schema, if any, that this action produces. | [optional] 
**InputExample** |  Pointer to [**SystemCollectionsHashtable**](system-collections-hashtable) | Example trigger payload if applicable | [optional] 

## Examples

- Prepare the resource
```powershell
$ListCompleteWorkflowLibrary200ResponseInner = Initialize-PSSailpointListCompleteWorkflowLibrary200ResponseInner  -Id sp:compare-boolean `
 -Name Compare Boolean Values `
 -Type OPERATOR `
 -Description Compare two boolean values and decide what happens based on the result. `
 -FormFields [{description&#x3D;Enter the JSONPath to a value from the input to compare to Variable B., helpText&#x3D;, label&#x3D;Variable A, name&#x3D;variableA.$, required&#x3D;true, type&#x3D;text}, {helpText&#x3D;Select an operation., label&#x3D;Operation, name&#x3D;operator, options&#x3D;[{label&#x3D;Equals, value&#x3D;BooleanEquals}], required&#x3D;true, type&#x3D;select}, {description&#x3D;Enter the JSONPath to a value from the input to compare to Variable A., helpText&#x3D;, label&#x3D;Variable B, name&#x3D;variableB.$, required&#x3D;false, type&#x3D;text}, {description&#x3D;Enter True or False., helpText&#x3D;, label&#x3D;Variable B, name&#x3D;variableB, required&#x3D;false, type&#x3D;text}] `
 -IsDynamicSchema false `
 -OutputSchema {definitions&#x3D;{}, properties&#x3D;{autoRevokeAllowed&#x3D;{$id&#x3D;#sp:create-campaign/autoRevokeAllowed, default&#x3D;true, examples&#x3D;[false], title&#x3D;autoRevokeAllowed, type&#x3D;boolean}, deadline&#x3D;{$id&#x3D;#sp:create-campaign/deadline, default&#x3D;, examples&#x3D;[2020-12-25T06:00:00.468Z], format&#x3D;date-time, pattern&#x3D;^.*$, title&#x3D;deadline, type&#x3D;string}, description&#x3D;{$id&#x3D;#sp:create-campaign/description, default&#x3D;, examples&#x3D;[A review of everyone&#39;s access by their manager.], pattern&#x3D;^.*$, title&#x3D;description, type&#x3D;string}, emailNotificationEnabled&#x3D;{$id&#x3D;#sp:create-campaign/emailNotificationEnabled, default&#x3D;true, examples&#x3D;[false], title&#x3D;emailNotificationEnabled, type&#x3D;boolean}, filter&#x3D;{$id&#x3D;#sp:create-campaign/filter, properties&#x3D;{id&#x3D;{$id&#x3D;#sp:create-campaign/filter/id, default&#x3D;, examples&#x3D;[e0adaae69852e8fe8b8a3d48e5ce757c], pattern&#x3D;^.*$, title&#x3D;id, type&#x3D;string}, type&#x3D;{$id&#x3D;#sp:create-campaign/filter/type, default&#x3D;, examples&#x3D;[CAMPAIGN_FILTER], pattern&#x3D;^.*$, title&#x3D;type, type&#x3D;string}}, title&#x3D;filter, type&#x3D;object}, id&#x3D;{$id&#x3D;#sp:create-campaign/id, default&#x3D;, examples&#x3D;[2c918086719eec070171a7e3355a360a], pattern&#x3D;^.*$, title&#x3D;id, type&#x3D;string}, name&#x3D;{$id&#x3D;#sp:create-campaign/name, default&#x3D;, examples&#x3D;[Manager Review], pattern&#x3D;^.*$, title&#x3D;name, type&#x3D;string}, recommendationsEnabled&#x3D;{$id&#x3D;#sp:create-campaign/recommendationsEnabled, default&#x3D;true, examples&#x3D;[false], title&#x3D;recommendationEnabled, type&#x3D;boolean}, type&#x3D;{$id&#x3D;#sp:create-campaign/type, default&#x3D;, examples&#x3D;[MANAGER], pattern&#x3D;^.*$, title&#x3D;type, type&#x3D;string}}, title&#x3D;sp:create-campaign, type&#x3D;object} `
 -InputExample {changes&#x3D;[{attribute&#x3D;department, newValue&#x3D;marketing, oldValue&#x3D;sales}, {attribute&#x3D;manager, newValue&#x3D;{id&#x3D;ee769173319b41d19ccec6c235423236c, name&#x3D;mean.guy, type&#x3D;IDENTITY}, oldValue&#x3D;{id&#x3D;ee769173319b41d19ccec6c235423237b, name&#x3D;nice.guy, type&#x3D;IDENTITY}}, {attribute&#x3D;email, newValue&#x3D;john.doe@gmail.com, oldValue&#x3D;john.doe@hotmail.com}], identity&#x3D;{id&#x3D;ee769173319b41d19ccec6cea52f237b, name&#x3D;john.doe, type&#x3D;IDENTITY}}
```

- Convert the resource to JSON
```powershell
$ListCompleteWorkflowLibrary200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

