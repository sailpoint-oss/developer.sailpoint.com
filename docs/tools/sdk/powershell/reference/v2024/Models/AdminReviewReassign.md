---
id: v2024-admin-review-reassign
title: AdminReviewReassign
pagination_label: AdminReviewReassign
sidebar_label: AdminReviewReassign
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AdminReviewReassign'] 
slug: /tools/sdk/powershell/v2024/models/admin-review-reassign
tags: ['SDK', 'Software Development Kit', 'AdminReviewReassign']
---


# AdminReviewReassign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificationIds** |  Pointer to **[]String** | List of certification IDs to reassign | [optional] 
**ReassignTo** |  Pointer to [**AdminReviewReassignReassignTo**](admin-review-reassign-reassign-to) |  | [optional] 
**Reason** |  Pointer to **String** | Comment to explain why the certification was reassigned | [optional] 

## Examples

- Prepare the resource
```powershell
$AdminReviewReassign = Initialize-PSSailpoint.V2024AdminReviewReassign  -CertificationIds [af3859464779471211bb8424a563abc1, af3859464779471211bb8424a563abc2, af3859464779471211bb8424a563abc3] `
 -ReassignTo null `
 -Reason reassigned for some reason
```

- Convert the resource to JSON
```powershell
$AdminReviewReassign | ConvertTo-JSON
```


[[Back to top]](#) 

