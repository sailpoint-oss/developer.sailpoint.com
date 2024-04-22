---
id: access-review-reassignment
title: AccessReviewReassignment
pagination_label: AccessReviewReassignment
sidebar_label: AccessReviewReassignment
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessReviewReassignment'] 
slug: /tools/sdk/powershell/v3/models/access-review-reassignment
tags: ['SDK', 'Software Development Kit', 'AccessReviewReassignment']
---


# AccessReviewReassignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reassign** |  [**[]ReassignReference**](reassign-reference) |  | 
**ReassignTo** |  **String** | The ID of the identity to which the certification is reassigned | 
**Reason** |  **String** | The reason comment for why the reassign was made | 

## Examples

- Prepare the resource
```powershell
$AccessReviewReassignment = Initialize-AccessReviewReassignment  -Reassign null `
 -ReassignTo ef38f94347e94562b5bb8424a56397d8 `
 -Reason reassigned for some reason
```

- Convert the resource to JSON
```powershell
$AccessReviewReassignment | ConvertTo-JSON
```


[[Back to top]](#) 

