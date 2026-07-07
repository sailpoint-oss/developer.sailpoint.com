---
id: get-access-request-recommendations-v1429-response
title: GetAccessRequestRecommendationsV1429Response
pagination_label: GetAccessRequestRecommendationsV1429Response
sidebar_label: GetAccessRequestRecommendationsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetAccessRequestRecommendationsV1429Response', 'GetAccessRequestRecommendationsV1429Response'] 
slug: /tools/sdk/powershell/iaiaccessrequestrecommendations/models/get-access-request-recommendations-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetAccessRequestRecommendationsV1429Response', 'GetAccessRequestRecommendationsV1429Response']
---


# GetAccessRequestRecommendationsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAccessRequestRecommendationsV1429Response = Initialize-GetAccessRequestRecommendationsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetAccessRequestRecommendationsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

