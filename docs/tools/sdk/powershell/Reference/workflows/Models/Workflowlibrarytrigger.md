---
id: workflowlibrarytrigger
title: Workflowlibrarytrigger
pagination_label: Workflowlibrarytrigger
sidebar_label: Workflowlibrarytrigger
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workflowlibrarytrigger', 'Workflowlibrarytrigger'] 
slug: /tools/sdk/powershell/workflows/models/workflowlibrarytrigger
tags: ['SDK', 'Software Development Kit', 'Workflowlibrarytrigger', 'Workflowlibrarytrigger']
---


# Workflowlibrarytrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Trigger ID. This is a static namespaced ID for the trigger. | [optional] 
**Type** |  **Enum** [  "EVENT",    "SCHEDULED",    "EXTERNAL",    "AccessRequestTrigger" ] | Trigger type | [optional] 
**Deprecated** | **Boolean** | Whether the trigger is deprecated. | [optional] [default to $false]
**DeprecatedBy** | **System.DateTime** | Date the trigger was deprecated, if applicable. | [optional] 
**IsSimulationEnabled** | **Boolean** | Whether the trigger can be simulated. | [optional] [default to $false]
**OutputSchema** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Example output schema | [optional] 
**Name** | **String** | Trigger Name | [optional] 
**Description** | **String** | Trigger Description | [optional] 
**IsDynamicSchema** | **Boolean** | Determines whether the dynamic output schema is returned in place of the action's output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] [default to $false]
**InputExample** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Example trigger payload if applicable | [optional] 
**FormFields** | [**[]Workflowlibraryformfields**](workflowlibraryformfields) | One or more inputs that the trigger accepts | [optional] 

## Examples

- Prepare the resource
```powershell
$Workflowlibrarytrigger = Initialize-Workflowlibrarytrigger  -Id idn:identity-attributes-changed `
 -Type EVENT `
 -Deprecated false `
 -DeprecatedBy 2023-01-01T00:00Z `
 -IsSimulationEnabled false `
 -OutputSchema {} `
 -Name Identity Attributes Changed `
 -Description One or more identity attributes changed. `
 -IsDynamicSchema false `
 -InputExample {"changes":[{"attribute":"department","newValue":"marketing","oldValue":"sales"},{"attribute":"manager","newValue":{"id":"ee769173319b41d19ccec6c235423236c","name":"mean.guy","type":"IDENTITY"},"oldValue":{"id":"ee769173319b41d19ccec6c235423237b","name":"nice.guy","type":"IDENTITY"}},{"attribute":"email","newValue":"john.doe@gmail.com","oldValue":"john.doe@hotmail.com"}],"identity":{"id":"ee769173319b41d19ccec6cea52f237b","name":"john.doe","type":"IDENTITY"}} `
 -FormFields []
```

- Convert the resource to JSON
```powershell
$Workflowlibrarytrigger | ConvertTo-JSON
```


[[Back to top]](#) 

