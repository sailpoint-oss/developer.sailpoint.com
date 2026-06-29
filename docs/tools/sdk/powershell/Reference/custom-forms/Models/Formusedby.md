---
id: formusedby
title: Formusedby
pagination_label: Formusedby
sidebar_label: Formusedby
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Formusedby', 'Formusedby'] 
slug: /tools/sdk/powershell/customforms/models/formusedby
tags: ['SDK', 'Software Development Kit', 'Formusedby', 'Formusedby']
---


# Formusedby

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "WORKFLOW",    "SOURCE",    "MySailPoint" ] | FormUsedByType value.  WORKFLOW FormUsedByTypeWorkflow SOURCE FormUsedByTypeSource MySailPoint FormUsedByType | [optional] 
**Id** | **String** | Unique identifier of the system using the form. | [optional] 
**Name** | **String** | Name of the system using the form. | [optional] 

## Examples

- Prepare the resource
```powershell
$Formusedby = Initialize-Formusedby  -Type WORKFLOW `
 -Id 61940a92-5484-42bc-bc10-b9982b218cdf `
 -Name Access Request Form
```

- Convert the resource to JSON
```powershell
$Formusedby | ConvertTo-JSON
```


[[Back to top]](#) 

