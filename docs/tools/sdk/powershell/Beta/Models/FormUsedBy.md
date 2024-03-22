---
id: form-used-by
title: FormUsedBy
pagination_label: FormUsedBy
sidebar_label: FormUsedBy
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'FormUsedBy'] 
slug: /tools/sdk/powershell/beta/models/form-used-by
tags: ['SDK', 'Software Development Kit', 'FormUsedBy']
---


# FormUsedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "WORKFLOW",    "SOURCE" ] | FormUsedByType value.  WORKFLOW FormUsedByTypeWorkflow SOURCE FormUsedByTypeSource | [optional] 
**Id** |  Pointer to **String** | Unique identifier of the system using the form. | [optional] 

## Examples

- Prepare the resource
```powershell
$FormUsedBy = Initialize-PSSailpointBetaFormUsedBy  -Type WORKFLOW `
 -Id 00000000-0000-0000-0000-000000000000
```

- Convert the resource to JSON
```powershell
$FormUsedBy | ConvertTo-JSON
```


[[Back to top]](#) 

