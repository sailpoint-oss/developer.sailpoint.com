---
id: v2024-reassign-reference
title: ReassignReference
pagination_label: ReassignReference
sidebar_label: ReassignReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReassignReference'] 
slug: /tools/sdk/powershell/v2024/models/reassign-reference
tags: ['SDK', 'Software Development Kit', 'ReassignReference']
---


# ReassignReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The ID of item or identity being reassigned. | [required]
**Type** |   **Enum** [  "TARGET_SUMMARY",    "ITEM",    "IDENTITY_SUMMARY" ] | The type of item or identity being reassigned. | [required]

## Examples

- Prepare the resource
```powershell
$ReassignReference = Initialize-PSSailpoint.V2024ReassignReference  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Type ITEM
```

- Convert the resource to JSON
```powershell
$ReassignReference | ConvertTo-JSON
```


[[Back to top]](#) 

