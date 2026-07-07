---
id: reviewrecommendation
title: Reviewrecommendation
pagination_label: Reviewrecommendation
sidebar_label: Reviewrecommendation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reviewrecommendation', 'Reviewrecommendation'] 
slug: /tools/sdk/powershell/certifications/models/reviewrecommendation
tags: ['SDK', 'Software Development Kit', 'Reviewrecommendation', 'Reviewrecommendation']
---


# Reviewrecommendation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Recommendation** | **String** | The recommendation from IAI at the time of the decision. This field will be null if no recommendation was made. | [optional] 
**Reasons** | **[]String** | A list of reasons for the recommendation. | [optional] 
**Timestamp** | **System.DateTime** | The time at which the recommendation was recorded. | [optional] 

## Examples

- Prepare the resource
```powershell
$Reviewrecommendation = Initialize-Reviewrecommendation  -Recommendation null `
 -Reasons ["Reason 1","Reason 2"] `
 -Timestamp 2020-06-01T13:49:37.385Z
```

- Convert the resource to JSON
```powershell
$Reviewrecommendation | ConvertTo-JSON
```


[[Back to top]](#) 

