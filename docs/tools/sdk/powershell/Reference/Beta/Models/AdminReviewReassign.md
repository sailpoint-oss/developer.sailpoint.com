---
id: beta-admin-review-reassign
title: AdminReviewReassign
pagination_label: AdminReviewReassign
sidebar_label: AdminReviewReassign
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AdminReviewReassign', 'BetaAdminReviewReassign'] 
slug: /tools/sdk/powershell/beta/models/admin-review-reassign
tags: ['SDK', 'Software Development Kit', 'AdminReviewReassign', 'BetaAdminReviewReassign']
---


# AdminReviewReassign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificationIds** | **[]String** | List of certification IDs to reassign | [optional] 
**ReassignTo** | [**AdminReviewReassignReassignTo**](admin-review-reassign-reassign-to) |  | [optional] 
**Reason** | **String** | Comment to explain why the certification was reassigned | [optional] 

## Examples

- Prepare the resource
```powershell
$AdminReviewReassign = Initialize-BetaAdminReviewReassign  -CertificationIds [af3859464779471211bb8424a563abc1, af3859464779471211bb8424a563abc2, af3859464779471211bb8424a563abc3] `
 -ReassignTo null `
 -Reason reassigned for some reason
```

- Convert the resource to JSON
```powershell
$AdminReviewReassign | ConvertTo-JSON
```


[[Back to top]](#) 

