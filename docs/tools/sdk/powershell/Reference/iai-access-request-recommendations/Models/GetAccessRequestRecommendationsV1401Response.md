---
id: get-access-request-recommendations-v1401-response
title: GetAccessRequestRecommendationsV1401Response
pagination_label: GetAccessRequestRecommendationsV1401Response
sidebar_label: GetAccessRequestRecommendationsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetAccessRequestRecommendationsV1401Response', 'GetAccessRequestRecommendationsV1401Response'] 
slug: /tools/sdk/powershell/iaiaccessrequestrecommendations/models/get-access-request-recommendations-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetAccessRequestRecommendationsV1401Response', 'GetAccessRequestRecommendationsV1401Response']
---


# GetAccessRequestRecommendationsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAccessRequestRecommendationsV1401Response = Initialize-GetAccessRequestRecommendationsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetAccessRequestRecommendationsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

