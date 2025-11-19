---
id: review-recommendation
title: ReviewRecommendation
pagination_label: ReviewRecommendation
sidebar_label: ReviewRecommendation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReviewRecommendation', 'ReviewRecommendation'] 
slug: /tools/sdk/powershell/v3/models/review-recommendation
tags: ['SDK', 'Software Development Kit', 'ReviewRecommendation', 'ReviewRecommendation']
---


# ReviewRecommendation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Recommendation** | **String** | The recommendation from IAI at the time of the decision. This field will be null if no recommendation was made. | [optional] 
**Reasons** | **[]String** | A list of reasons for the recommendation. | [optional] 
**Timestamp** | **System.DateTime** | The time at which the recommendation was recorded. | [optional] 

## Examples

- Prepare the resource
```powershell
$ReviewRecommendation = Initialize-ReviewRecommendation  -Recommendation null `
 -Reasons [Reason 1, Reason 2] `
 -Timestamp 2020-06-01T13:49:37.385Z
```

- Convert the resource to JSON
```powershell
$ReviewRecommendation | ConvertTo-JSON
```


[[Back to top]](#) 

