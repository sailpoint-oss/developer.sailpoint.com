---
id: v2024-form-instance-created-by
title: FormInstanceCreatedBy
pagination_label: FormInstanceCreatedBy
sidebar_label: FormInstanceCreatedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormInstanceCreatedBy', 'V2024FormInstanceCreatedBy'] 
slug: /tools/sdk/powershell/v2024/models/form-instance-created-by
tags: ['SDK', 'Software Development Kit', 'FormInstanceCreatedBy', 'V2024FormInstanceCreatedBy']
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
$FormInstanceCreatedBy = Initialize-V2024FormInstanceCreatedBy  -Id 00000000-0000-0000-0000-000000000000 `
 -Type WORKFLOW_EXECUTION
```

- Convert the resource to JSON
```powershell
$FormInstanceCreatedBy | ConvertTo-JSON
```


[[Back to top]](#) 

