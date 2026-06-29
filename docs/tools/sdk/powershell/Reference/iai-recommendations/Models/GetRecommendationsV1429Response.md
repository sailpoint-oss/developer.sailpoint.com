---
id: get-recommendations-v1429-response
title: GetRecommendationsV1429Response
pagination_label: GetRecommendationsV1429Response
sidebar_label: GetRecommendationsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetRecommendationsV1429Response', 'GetRecommendationsV1429Response'] 
slug: /tools/sdk/powershell/iairecommendations/models/get-recommendations-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetRecommendationsV1429Response', 'GetRecommendationsV1429Response']
---


# GetRecommendationsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetRecommendationsV1429Response = Initialize-GetRecommendationsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetRecommendationsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

