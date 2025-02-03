---
id: v2024-review-reassign
title: ReviewReassign
pagination_label: ReviewReassign
sidebar_label: ReviewReassign
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReviewReassign', 'V2024ReviewReassign'] 
slug: /tools/sdk/powershell/v2024/models/review-reassign
tags: ['SDK', 'Software Development Kit', 'ReviewReassign', 'V2024ReviewReassign']
---


# ReviewReassign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reassign** |  [**[]ReassignReference**](reassign-reference) |  | [required]
**ReassignTo** |  **String** | The ID of the identity to which the certification is reassigned | [required]
**Reason** |  **String** | The reason comment for why the reassign was made | [required]

## Examples

- Prepare the resource
```powershell
$ReviewReassign = Initialize-PSSailpoint.V2024ReviewReassign  -Reassign null `
 -ReassignTo ef38f94347e94562b5bb8424a56397d8 `
 -Reason reassigned for some reason
```

- Convert the resource to JSON
```powershell
$ReviewReassign | ConvertTo-JSON
```


[[Back to top]](#) 

