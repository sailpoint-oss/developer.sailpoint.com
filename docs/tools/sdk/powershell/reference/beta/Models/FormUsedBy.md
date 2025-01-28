---
id: beta-form-used-by
title: FormUsedBy
pagination_label: FormUsedBy
sidebar_label: FormUsedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormUsedBy', 'BetaFormUsedBy'] 
slug: /tools/sdk/powershell/beta/models/form-used-by
tags: ['SDK', 'Software Development Kit', 'FormUsedBy', 'BetaFormUsedBy']
---


# FormUsedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "WORKFLOW",    "SOURCE",    "MySailPoint" ] | FormUsedByType value.  WORKFLOW FormUsedByTypeWorkflow SOURCE FormUsedByTypeSource MySailPoint FormUsedByType | [optional] 
**Id** |  Pointer to **String** | Unique identifier of the system using the form. | [optional] 
**Name** |  Pointer to **String** | Name of the system using the form. | [optional] 

## Examples

- Prepare the resource
```powershell
$FormUsedBy = Initialize-PSSailpoint.BetaFormUsedBy  -Type WORKFLOW `
 -Id 61940a92-5484-42bc-bc10-b9982b218cdf `
 -Name Access Request Form
```

- Convert the resource to JSON
```powershell
$FormUsedBy | ConvertTo-JSON
```


[[Back to top]](#) 

