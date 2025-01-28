---
id: v2024-review-decision
title: ReviewDecision
pagination_label: ReviewDecision
sidebar_label: ReviewDecision
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReviewDecision'] 
slug: /tools/sdk/powershell/v2024/models/review-decision
tags: ['SDK', 'Software Development Kit', 'ReviewDecision']
---


# ReviewDecision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The id of the review decision | [required]
**Decision** |  [**CertificationDecision**](certification-decision) |  | [required]
**ProposedEndDate** |  Pointer to **System.DateTime** | The date at which a user's access should be taken away. Should only be set for `REVOKE` decisions. | [optional] 
**Bulk** |  **Boolean** | Indicates whether decision should be marked as part of a larger bulk decision | [required]
**Recommendation** |  Pointer to [**ReviewRecommendation**](review-recommendation) |  | [optional] 
**Comments** |  Pointer to **String** | Comments recorded when the decision was made | [optional] 

## Examples

- Prepare the resource
```powershell
$ReviewDecision = Initialize-PSSailpoint.V2024ReviewDecision  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Decision null `
 -ProposedEndDate 2017-07-11T18:45:37.098Z `
 -Bulk true `
 -Recommendation null `
 -Comments This user no longer needs access to this source
```

- Convert the resource to JSON
```powershell
$ReviewDecision | ConvertTo-JSON
```


[[Back to top]](#) 

