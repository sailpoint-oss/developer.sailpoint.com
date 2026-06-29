---
id: workflowdefinition
title: Workflowdefinition
pagination_label: Workflowdefinition
sidebar_label: Workflowdefinition
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workflowdefinition', 'Workflowdefinition'] 
slug: /tools/sdk/powershell/workflows/models/workflowdefinition
tags: ['SDK', 'Software Development Kit', 'Workflowdefinition', 'Workflowdefinition']
---


# Workflowdefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** | **String** | The name of the starting step. | [optional] 
**Steps** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | One or more step objects that comprise this workflow.  Please see the Workflow documentation to see the JSON schema for each step type. | [optional] 

## Examples

- Prepare the resource
```powershell
$Workflowdefinition = Initialize-Workflowdefinition  -Start Send Email Test `
 -Steps {"Send Email":{"actionId":"sp:send-email","attributes":{"body":"This is a test","from":"sailpoint@sailpoint.com","recipientId.$":"$.identity.id","subject":"test"},"nextStep":"success","selectResult":null,"type":"ACTION"},"success":{"type":"success"}}
```

- Convert the resource to JSON
```powershell
$Workflowdefinition | ConvertTo-JSON
```


[[Back to top]](#) 

