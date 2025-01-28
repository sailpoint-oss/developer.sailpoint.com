---
id: v2024-workflow-definition
title: WorkflowDefinition
pagination_label: WorkflowDefinition
sidebar_label: WorkflowDefinition
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowDefinition', 'V2024WorkflowDefinition'] 
slug: /tools/sdk/powershell/v2024/models/workflow-definition
tags: ['SDK', 'Software Development Kit', 'WorkflowDefinition', 'V2024WorkflowDefinition']
---


# WorkflowDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** |  Pointer to **String** | The name of the starting step. | [optional] 
**Steps** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | One or more step objects that comprise this workflow.  Please see the Workflow documentation to see the JSON schema for each step type. | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowDefinition = Initialize-PSSailpoint.V2024WorkflowDefinition  -Start Send Email Test `
 -Steps {Send Email&#x3D;{actionId&#x3D;sp:send-email, attributes&#x3D;{body&#x3D;This is a test, from&#x3D;sailpoint@sailpoint.com, recipientId.$&#x3D;$.identity.id, subject&#x3D;test}, nextStep&#x3D;success, selectResult&#x3D;null, type&#x3D;ACTION}, success&#x3D;{type&#x3D;success}}
```

- Convert the resource to JSON
```powershell
$WorkflowDefinition | ConvertTo-JSON
```


[[Back to top]](#) 

