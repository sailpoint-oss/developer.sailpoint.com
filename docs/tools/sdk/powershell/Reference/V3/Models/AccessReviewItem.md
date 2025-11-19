---
id: access-review-item
title: AccessReviewItem
pagination_label: AccessReviewItem
sidebar_label: AccessReviewItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessReviewItem', 'AccessReviewItem'] 
slug: /tools/sdk/powershell/v3/models/access-review-item
tags: ['SDK', 'Software Development Kit', 'AccessReviewItem', 'AccessReviewItem']
---


# AccessReviewItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessSummary** | [**AccessSummary**](access-summary) |  | [optional] 
**IdentitySummary** | [**CertificationIdentitySummary**](certification-identity-summary) |  | [optional] 
**Id** | **String** | The review item's id | [optional] 
**Completed** | **Boolean** | Whether the review item is complete | [optional] 
**NewAccess** | **Boolean** | Indicates whether the review item is for new access to a source | [optional] 
**Decision** | [**CertificationDecision**](certification-decision) |  | [optional] 
**Comments** | **String** | Comments for this review item | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessReviewItem = Initialize-AccessReviewItem  -AccessSummary null `
 -IdentitySummary null `
 -Id ef38f94347e94562b5bb8424a56397d8 `
 -Completed false `
 -NewAccess false `
 -Decision null `
 -Comments This user still needs access to this source
```

- Convert the resource to JSON
```powershell
$AccessReviewItem | ConvertTo-JSON
```


[[Back to top]](#) 

