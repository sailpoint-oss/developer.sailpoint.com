---
id: v2025-form-used-by
title: FormUsedBy
pagination_label: FormUsedBy
sidebar_label: FormUsedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormUsedBy', 'V2025FormUsedBy'] 
slug: /tools/sdk/powershell/v2025/models/form-used-by
tags: ['SDK', 'Software Development Kit', 'FormUsedBy', 'V2025FormUsedBy']
---


# FormUsedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "WORKFLOW",    "SOURCE",    "MySailPoint" ] | FormUsedByType value.  WORKFLOW FormUsedByTypeWorkflow SOURCE FormUsedByTypeSource MySailPoint FormUsedByType | [optional] 
**Id** | **String** | Unique identifier of the system using the form. | [optional] 
**Name** | **String** | Name of the system using the form. | [optional] 

## Examples

- Prepare the resource
```powershell
$FormUsedBy = Initialize-V2025FormUsedBy  -Type WORKFLOW `
 -Id 61940a92-5484-42bc-bc10-b9982b218cdf `
 -Name Access Request Form
```

- Convert the resource to JSON
```powershell
$FormUsedBy | ConvertTo-JSON
```


[[Back to top]](#) 

