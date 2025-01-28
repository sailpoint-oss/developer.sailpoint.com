---
id: workflow-library-action
title: WorkflowLibraryAction
pagination_label: WorkflowLibraryAction
sidebar_label: WorkflowLibraryAction
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowLibraryAction', 'WorkflowLibraryAction'] 
slug: /tools/sdk/powershell/v3/models/workflow-library-action
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryAction', 'WorkflowLibraryAction']
---


# WorkflowLibraryAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Action ID. This is a static namespaced ID for the action | [optional] 
**Name** |  Pointer to **String** | Action Name | [optional] 
**Type** |  Pointer to **String** | Action type | [optional] 
**Description** |  Pointer to **String** | Action Description | [optional] 
**FormFields** |  Pointer to [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the action accepts | [optional] 
**ExampleOutput** |  Pointer to [**WorkflowLibraryActionExampleOutput**](workflow-library-action-example-output) |  | [optional] 
**Deprecated** |  Pointer to **Boolean** |  | [optional] 
**DeprecatedBy** |  Pointer to **System.DateTime** |  | [optional] 
**VersionNumber** |  Pointer to **Int32** | Version number | [optional] 
**IsSimulationEnabled** |  Pointer to **Boolean** |  | [optional] 
**IsDynamicSchema** |  Pointer to **Boolean** | Determines whether the dynamic output schema is returned in place of the action's output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] [default to $false]
**OutputSchema** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Defines the output schema, if any, that this action produces. | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowLibraryAction = Initialize-PSSailpoint.V3WorkflowLibraryAction  -Id sp:create-campaign `
 -Name Create Certification Campaign `
 -Type ACTION `
 -Description Generates a certification campaign. `
 -FormFields null `
 -ExampleOutput null `
 -Deprecated null `
 -DeprecatedBy null `
 -VersionNumber null `
 -IsSimulationEnabled null `
 -IsDynamicSchema false `
 -OutputSchema {definitions&#x3D;{}, properties&#x3D;{autoRevokeAllowed&#x3D;{$id&#x3D;#sp:create-campaign/autoRevokeAllowed, default&#x3D;true, examples&#x3D;[false], title&#x3D;autoRevokeAllowed, type&#x3D;boolean}, deadline&#x3D;{$id&#x3D;#sp:create-campaign/deadline, default&#x3D;, examples&#x3D;[2020-12-25T06:00:00.468Z], format&#x3D;date-time, pattern&#x3D;^.*$, title&#x3D;deadline, type&#x3D;string}, description&#x3D;{$id&#x3D;#sp:create-campaign/description, default&#x3D;, examples&#x3D;[A review of everyone&#39;s access by their manager.], pattern&#x3D;^.*$, title&#x3D;description, type&#x3D;string}, emailNotificationEnabled&#x3D;{$id&#x3D;#sp:create-campaign/emailNotificationEnabled, default&#x3D;true, examples&#x3D;[false], title&#x3D;emailNotificationEnabled, type&#x3D;boolean}, filter&#x3D;{$id&#x3D;#sp:create-campaign/filter, properties&#x3D;{id&#x3D;{$id&#x3D;#sp:create-campaign/filter/id, default&#x3D;, examples&#x3D;[e0adaae69852e8fe8b8a3d48e5ce757c], pattern&#x3D;^.*$, title&#x3D;id, type&#x3D;string}, type&#x3D;{$id&#x3D;#sp:create-campaign/filter/type, default&#x3D;, examples&#x3D;[CAMPAIGN_FILTER], pattern&#x3D;^.*$, title&#x3D;type, type&#x3D;string}}, title&#x3D;filter, type&#x3D;object}, id&#x3D;{$id&#x3D;#sp:create-campaign/id, default&#x3D;, examples&#x3D;[2c918086719eec070171a7e3355a360a], pattern&#x3D;^.*$, title&#x3D;id, type&#x3D;string}, name&#x3D;{$id&#x3D;#sp:create-campaign/name, default&#x3D;, examples&#x3D;[Manager Review], pattern&#x3D;^.*$, title&#x3D;name, type&#x3D;string}, recommendationsEnabled&#x3D;{$id&#x3D;#sp:create-campaign/recommendationsEnabled, default&#x3D;true, examples&#x3D;[false], title&#x3D;recommendationEnabled, type&#x3D;boolean}, type&#x3D;{$id&#x3D;#sp:create-campaign/type, default&#x3D;, examples&#x3D;[MANAGER], pattern&#x3D;^.*$, title&#x3D;type, type&#x3D;string}}, title&#x3D;sp:create-campaign, type&#x3D;object}
```

- Convert the resource to JSON
```powershell
$WorkflowLibraryAction | ConvertTo-JSON
```


[[Back to top]](#) 

