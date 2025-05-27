---
id: beta-admin-review-reassign-reassign-to
title: AdminReviewReassignReassignTo
pagination_label: AdminReviewReassignReassignTo
sidebar_label: AdminReviewReassignReassignTo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AdminReviewReassignReassignTo', 'BetaAdminReviewReassignReassignTo'] 
slug: /tools/sdk/powershell/beta/models/admin-review-reassign-reassign-to
tags: ['SDK', 'Software Development Kit', 'AdminReviewReassignReassignTo', 'BetaAdminReviewReassignReassignTo']
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
$AdminReviewReassignReassignTo = Initialize-BetaAdminReviewReassignReassignTo  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$AdminReviewReassignReassignTo | ConvertTo-JSON
```


[[Back to top]](#) 

