---
id: v2024-reassignment-reference
title: ReassignmentReference
pagination_label: ReassignmentReference
sidebar_label: ReassignmentReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReassignmentReference', 'V2024ReassignmentReference'] 
slug: /tools/sdk/powershell/v2024/models/reassignment-reference
tags: ['SDK', 'Software Development Kit', 'ReassignmentReference', 'V2024ReassignmentReference']
---


# ReassignmentReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of item or identity being reassigned. | [required]
**Type** |  **Enum** [  "TARGET_SUMMARY",    "ITEM",    "IDENTITY_SUMMARY" ] | The type of item or identity being reassigned. | [required]

## Examples

- Prepare the resource
```powershell
$ReassignmentReference = Initialize-V2024ReassignmentReference  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Type ITEM
```

- Convert the resource to JSON
```powershell
$ReassignmentReference | ConvertTo-JSON
```


[[Back to top]](#) 

