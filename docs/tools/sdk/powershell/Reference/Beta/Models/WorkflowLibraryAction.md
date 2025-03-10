---
id: beta-workflow-library-action
title: WorkflowLibraryAction
pagination_label: WorkflowLibraryAction
sidebar_label: WorkflowLibraryAction
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowLibraryAction', 'BetaWorkflowLibraryAction'] 
slug: /tools/sdk/powershell/beta/models/workflow-library-action
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryAction', 'BetaWorkflowLibraryAction']
---


# WorkflowLibraryAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Action ID. This is a static namespaced ID for the action | [optional] 
**Name** | **String** | Action Name | [optional] 
**Type** | **String** | Action type | [optional] 
**Description** | **String** | Action Description | [optional] 
**FormFields** | [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the action accepts | [optional] 
**ExampleOutput** | [**WorkflowLibraryActionExampleOutput**](workflow-library-action-example-output) |  | [optional] 
**Deprecated** | **Boolean** |  | [optional] 
**DeprecatedBy** | **System.DateTime** |  | [optional] 
**VersionNumber** | **Int32** | Version number | [optional] 
**IsSimulationEnabled** | **Boolean** |  | [optional] 
**IsDynamicSchema** | **Boolean** | Determines whether the dynamic output schema is returned in place of the action's output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] 
**OutputSchema** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Defines the output schema, if any, that this action produces. | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowLibraryAction = Initialize-PSSailpoint.BetaWorkflowLibraryAction  -Id sp:create-campaign `
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
 -OutputSchema {definitions={}, properties={autoRevokeAllowed={$id=#sp:create-campaign/autoRevokeAllowed, default=true, examples=[false], title=autoRevokeAllowed, type=boolean}, deadline={$id=#sp:create-campaign/deadline, default=, examples=[2020-12-25T06:00:00.468Z], format=date-time, pattern=^.*$, title=deadline, type=string}, description={$id=#sp:create-campaign/description, default=, examples=[A review of everyone's access by their manager.], pattern=^.*$, title=description, type=string}, emailNotificationEnabled={$id=#sp:create-campaign/emailNotificationEnabled, default=true, examples=[false], title=emailNotificationEnabled, type=boolean}, filter={$id=#sp:create-campaign/filter, properties={id={$id=#sp:create-campaign/filter/id, default=, examples=[e0adaae69852e8fe8b8a3d48e5ce757c], pattern=^.*$, title=id, type=string}, type={$id=#sp:create-campaign/filter/type, default=, examples=[CAMPAIGN_FILTER], pattern=^.*$, title=type, type=string}}, title=filter, type=object}, id={$id=#sp:create-campaign/id, default=, examples=[2c918086719eec070171a7e3355a360a], pattern=^.*$, title=id, type=string}, name={$id=#sp:create-campaign/name, default=, examples=[Manager Review], pattern=^.*$, title=name, type=string}, recommendationsEnabled={$id=#sp:create-campaign/recommendationsEnabled, default=true, examples=[false], title=recommendationEnabled, type=boolean}, type={$id=#sp:create-campaign/type, default=, examples=[MANAGER], pattern=^.*$, title=type, type=string}}, title=sp:create-campaign, type=object}
```

- Convert the resource to JSON
```powershell
$WorkflowLibraryAction | ConvertTo-JSON
```


[[Back to top]](#) 

