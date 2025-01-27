---
id: access-review-reassignment
title: AccessReviewReassignment
pagination_label: AccessReviewReassignment
sidebar_label: AccessReviewReassignment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessReviewReassignment'] 
slug: /tools/sdk/powershell/v2024/models/access-review-reassignment
tags: ['SDK', 'Software Development Kit', 'AccessReviewReassignment']
---


# AccessReviewReassignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reassign** |  [**[]ReassignReference**](reassign-reference) |  | [required]
**ReassignTo** |  **String** | The ID of the identity to which the certification is reassigned | [required]
**Reason** |  **String** | The reason comment for why the reassign was made | [required]

## Examples

- Prepare the resource
```powershell
$AccessReviewReassignment = Initialize-PSSailpoint.V2024AccessReviewReassignment  -Reassign null `
 -ReassignTo ef38f94347e94562b5bb8424a56397d8 `
 -Reason reassigned for some reason
```

- Convert the resource to JSON
```powershell
$AccessReviewReassignment | ConvertTo-JSON
```


[[Back to top]](#) 

