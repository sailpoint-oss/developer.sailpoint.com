---
id: review-decision
title: ReviewDecision
pagination_label: ReviewDecision
sidebar_label: ReviewDecision
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ReviewDecision'] 
slug: /tools/sdk/powershell/v3/models/review-decision
tags: ['SDK', 'Software Development Kit', 'ReviewDecision']
---


# ReviewDecision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The id of the review decision | 
**Decision** |  [**CertificationDecision**](certification-decision) |  | 
**ProposedEndDate** |  Pointer to **System.DateTime** | The date at which a user&#39;s access should be taken away. Should only be set for &#x60;REVOKE&#x60; decisions. | [optional] 
**Bulk** |  **Boolean** | Indicates whether decision should be marked as part of a larger bulk decision | 
**Recommendation** |  Pointer to [**ReviewRecommendation**](review-recommendation) |  | [optional] 
**Comments** |  Pointer to **String** | Comments recorded when the decision was made | [optional] 

## Examples

- Prepare the resource
```powershell
$ReviewDecision = Initialize-ReviewDecision  -Id ef38f94347e94562b5bb8424a56397d8 `
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

