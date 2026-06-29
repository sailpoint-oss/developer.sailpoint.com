---
id: forminstancecreatedby
title: Forminstancecreatedby
pagination_label: Forminstancecreatedby
sidebar_label: Forminstancecreatedby
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Forminstancecreatedby', 'Forminstancecreatedby'] 
slug: /tools/sdk/powershell/customforms/models/forminstancecreatedby
tags: ['SDK', 'Software Development Kit', 'Forminstancecreatedby', 'Forminstancecreatedby']
---


# Forminstancecreatedby

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID is a unique identifier | [optional] 
**Type** |  **Enum** [  "WORKFLOW_EXECUTION",    "SOURCE" ] | Type is a form instance created by type enum value WORKFLOW_EXECUTION FormInstanceCreatedByTypeWorkflowExecution SOURCE FormInstanceCreatedByTypeSource | [optional] 

## Examples

- Prepare the resource
```powershell
$Forminstancecreatedby = Initialize-Forminstancecreatedby  -Id 00000000-0000-0000-0000-000000000000 `
 -Type WORKFLOW_EXECUTION
```

- Convert the resource to JSON
```powershell
$Forminstancecreatedby | ConvertTo-JSON
```


[[Back to top]](#) 

