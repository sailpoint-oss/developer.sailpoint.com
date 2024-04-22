---
id: workflow-definition
title: WorkflowDefinition
pagination_label: WorkflowDefinition
sidebar_label: WorkflowDefinition
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'WorkflowDefinition'] 
slug: /tools/sdk/powershell/beta/models/workflow-definition
tags: ['SDK', 'Software Development Kit', 'WorkflowDefinition']
---


# WorkflowDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** |  Pointer to **String** | The name of the starting step. | [optional] 
**Steps** |  Pointer to [map[string] **Any**] | One or more step objects that comprise this workflow.  Please see the Workflow documentation to see the JSON schema for each step type. | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowDefinition = Initialize-BetaWorkflowDefinition  -Start Send Email Test `
 -Steps {Send Email={actionId=sp:send-email, attributes={body=This is a test, from=sailpoint@sailpoint.com, recipientId.$=$.identity.id, subject=test}, nextStep=success, selectResult=null, type=ACTION}, success={type=success}}
```

- Convert the resource to JSON
```powershell
$WorkflowDefinition | ConvertTo-JSON
```


[[Back to top]](#) 

