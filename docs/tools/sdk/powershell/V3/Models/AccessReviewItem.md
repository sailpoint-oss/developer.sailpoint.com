---
id: access-review-item
title: AccessReviewItem
pagination_label: AccessReviewItem
sidebar_label: AccessReviewItem
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessReviewItem'] 
slug: /tools/sdk/powershell/v3/models/access-review-item
tags: ['SDK', 'Software Development Kit', 'AccessReviewItem']
---


# AccessReviewItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessSummary** |  Pointer to [**AccessSummary**](access-summary) |  | [optional] 
**IdentitySummary** |  Pointer to [**CertificationIdentitySummary**](certification-identity-summary) |  | [optional] 
**Id** |  Pointer to **String** | The review item&#39;s id | [optional] 
**Completed** |  Pointer to **Boolean** | Whether the review item is complete | [optional] 
**NewAccess** |  Pointer to **Boolean** | Indicates whether the review item is for new access to a source | [optional] 
**Decision** |  Pointer to [**CertificationDecision**](certification-decision) |  | [optional] 
**Comments** |  Pointer to **String** | Comments for this review item | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessReviewItem = Initialize-PSSailpointAccessReviewItem  -AccessSummary null `
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

