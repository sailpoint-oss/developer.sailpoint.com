---
id: review-reassign
title: ReviewReassign
pagination_label: ReviewReassign
sidebar_label: ReviewReassign
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ReviewReassign'] 
slug: /tools/sdk/powershell/beta/models/review-reassign
tags: ['SDK', 'Software Development Kit', 'ReviewReassign']
---


# ReviewReassign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reassign** |  [**[]ReassignReference**](reassign-reference) |  | 
**ReassignTo** |  **String** | The ID of the identity to which the certification is reassigned | 
**Reason** |  **String** | The reason comment for why the reassign was made | 

## Examples

- Prepare the resource
```powershell
$ReviewReassign = Initialize-PSSailpointBetaReviewReassign  -Reassign null `
 -ReassignTo ef38f94347e94562b5bb8424a56397d8 `
 -Reason reassigned for some reason
```

- Convert the resource to JSON
```powershell
$ReviewReassign | ConvertTo-JSON
```


[[Back to top]](#) 

