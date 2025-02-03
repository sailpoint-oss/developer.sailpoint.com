---
id: admin-review-reassign-reassign-to
title: AdminReviewReassignReassignTo
pagination_label: AdminReviewReassignReassignTo
sidebar_label: AdminReviewReassignReassignTo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AdminReviewReassignReassignTo', 'AdminReviewReassignReassignTo'] 
slug: /tools/sdk/powershell/v3/models/admin-review-reassign-reassign-to
tags: ['SDK', 'Software Development Kit', 'AdminReviewReassignReassignTo', 'AdminReviewReassignReassignTo']
---


# AdminReviewReassignReassignTo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The identity ID to which the review is being assigned. | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | The type of the ID provided. | [optional] 

## Examples

- Prepare the resource
```powershell
$AdminReviewReassignReassignTo = Initialize-PSSailpoint.V3AdminReviewReassignReassignTo  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$AdminReviewReassignReassignTo | ConvertTo-JSON
```


[[Back to top]](#) 

