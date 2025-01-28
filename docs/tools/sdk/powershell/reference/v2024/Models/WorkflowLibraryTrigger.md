---
id: v2024-workflow-library-trigger
title: WorkflowLibraryTrigger
pagination_label: WorkflowLibraryTrigger
sidebar_label: WorkflowLibraryTrigger
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowLibraryTrigger', 'V2024WorkflowLibraryTrigger'] 
slug: /tools/sdk/powershell/v2024/models/workflow-library-trigger
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryTrigger', 'V2024WorkflowLibraryTrigger']
---


# WorkflowLibraryTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Trigger ID. This is a static namespaced ID for the trigger. | [optional] 
**Type** |  Pointer to  **Enum** [  "EVENT",    "SCHEDULED",    "EXTERNAL" ] | Trigger type | [optional] 
**Deprecated** |  Pointer to **Boolean** |  | [optional] 
**DeprecatedBy** |  Pointer to **System.DateTime** |  | [optional] 
**IsSimulationEnabled** |  Pointer to **Boolean** |  | [optional] 
**OutputSchema** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Example output schema | [optional] 
**Name** |  Pointer to **String** | Trigger Name | [optional] 
**Description** |  Pointer to **String** | Trigger Description | [optional] 
**IsDynamicSchema** |  Pointer to **Boolean** | Determines whether the dynamic output schema is returned in place of the action's output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] [default to $false]
**InputExample** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Example trigger payload if applicable | [optional] 
**FormFields** |  Pointer to [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the trigger accepts | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowLibraryTrigger = Initialize-PSSailpoint.V2024WorkflowLibraryTrigger  -Id idn:identity-attributes-changed `
 -Type EVENT `
 -Deprecated null `
 -DeprecatedBy null `
 -IsSimulationEnabled null `
 -OutputSchema null `
 -Name Identity Attributes Changed `
 -Description One or more identity attributes changed. `
 -IsDynamicSchema false `
 -InputExample {changes&#x3D;[{attribute&#x3D;department, newValue&#x3D;marketing, oldValue&#x3D;sales}, {attribute&#x3D;manager, newValue&#x3D;{id&#x3D;ee769173319b41d19ccec6c235423236c, name&#x3D;mean.guy, type&#x3D;IDENTITY}, oldValue&#x3D;{id&#x3D;ee769173319b41d19ccec6c235423237b, name&#x3D;nice.guy, type&#x3D;IDENTITY}}, {attribute&#x3D;email, newValue&#x3D;john.doe@gmail.com, oldValue&#x3D;john.doe@hotmail.com}], identity&#x3D;{id&#x3D;ee769173319b41d19ccec6cea52f237b, name&#x3D;john.doe, type&#x3D;IDENTITY}} `
 -FormFields []
```

- Convert the resource to JSON
```powershell
$WorkflowLibraryTrigger | ConvertTo-JSON
```


[[Back to top]](#) 

