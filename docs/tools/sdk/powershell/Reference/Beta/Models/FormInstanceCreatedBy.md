---
id: beta-form-instance-created-by
title: FormInstanceCreatedBy
pagination_label: FormInstanceCreatedBy
sidebar_label: FormInstanceCreatedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormInstanceCreatedBy', 'BetaFormInstanceCreatedBy'] 
slug: /tools/sdk/powershell/beta/models/form-instance-created-by
tags: ['SDK', 'Software Development Kit', 'FormInstanceCreatedBy', 'BetaFormInstanceCreatedBy']
---


# FormInstanceCreatedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID is a unique identifier | [optional] 
**Type** |  **Enum** [  "WORKFLOW_EXECUTION",    "SOURCE" ] | Type is a form instance created by type enum value WORKFLOW_EXECUTION FormInstanceCreatedByTypeWorkflowExecution SOURCE FormInstanceCreatedByTypeSource | [optional] 

## Examples

- Prepare the resource
```powershell
$FormInstanceCreatedBy = Initialize-BetaFormInstanceCreatedBy  -Id 00000000-0000-0000-0000-000000000000 `
 -Type WORKFLOW_EXECUTION
```

- Convert the resource to JSON
```powershell
$FormInstanceCreatedBy | ConvertTo-JSON
```


[[Back to top]](#) 

