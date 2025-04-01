---
id: v2025-workflow-definition
title: WorkflowDefinition
pagination_label: WorkflowDefinition
sidebar_label: WorkflowDefinition
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowDefinition', 'V2025WorkflowDefinition'] 
slug: /tools/sdk/powershell/v2025/models/workflow-definition
tags: ['SDK', 'Software Development Kit', 'WorkflowDefinition', 'V2025WorkflowDefinition']
---


# WorkflowDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** | **String** | The name of the starting step. | [optional] 
**Steps** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | One or more step objects that comprise this workflow.  Please see the Workflow documentation to see the JSON schema for each step type. | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowDefinition = Initialize-PSSailpoint.V2025WorkflowDefinition  -Start Send Email Test `
 -Steps {Send Email={actionId=sp:send-email, attributes={body=This is a test, from=sailpoint@sailpoint.com, recipientId.$=$.identity.id, subject=test}, nextStep=success, selectResult=null, type=ACTION}, success={type=success}}
```

- Convert the resource to JSON
```powershell
$WorkflowDefinition | ConvertTo-JSON
```


[[Back to top]](#) 

