---
id: workflow-library-trigger
title: WorkflowLibraryTrigger
pagination_label: WorkflowLibraryTrigger
sidebar_label: WorkflowLibraryTrigger
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'WorkflowLibraryTrigger'] 
slug: /tools/sdk/powershell/beta/models/workflow-library-trigger
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryTrigger']
---


# WorkflowLibraryTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Trigger ID. This is a static namespaced ID for the trigger. | [optional] 
**Type** |  Pointer to  **Enum** [  "EVENT",    "SCHEDULED",    "EXTERNAL" ] | Trigger type | [optional] 
**Name** |  Pointer to **String** | Trigger Name | [optional] 
**Description** |  Pointer to **String** | Trigger Description | [optional] 
**IsDynamicSchema** |  Pointer to **Boolean** | Determines whether the dynamic output schema is returned in place of the action&#39;s output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] 
**InputExample** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Example trigger payload if applicable | [optional] 
**FormFields** |  Pointer to [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the trigger accepts | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowLibraryTrigger = Initialize-BetaWorkflowLibraryTrigger  -Id idn:identity-attributes-changed `
 -Type EVENT `
 -Name Identity Attributes Changed `
 -Description One or more identity attributes changed. `
 -IsDynamicSchema false `
 -InputExample {changes=[{attribute=department, newValue=marketing, oldValue=sales}, {attribute=manager, newValue={id=ee769173319b41d19ccec6c235423236c, name=mean.guy, type=IDENTITY}, oldValue={id=ee769173319b41d19ccec6c235423237b, name=nice.guy, type=IDENTITY}}, {attribute=email, newValue=john.doe@gmail.com, oldValue=john.doe@hotmail.com}], identity={id=ee769173319b41d19ccec6cea52f237b, name=john.doe, type=IDENTITY}} `
 -FormFields []
```

- Convert the resource to JSON
```powershell
$WorkflowLibraryTrigger | ConvertTo-JSON
```


[[Back to top]](#) 

