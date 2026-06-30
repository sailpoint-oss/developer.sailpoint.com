---
id: start-predict-sod-violations-v1429-response
title: StartPredictSodViolationsV1429Response
pagination_label: StartPredictSodViolationsV1429Response
sidebar_label: StartPredictSodViolationsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'StartPredictSodViolationsV1429Response', 'StartPredictSodViolationsV1429Response'] 
slug: /tools/sdk/powershell/sodviolations/models/start-predict-sod-violations-v1429-response
tags: ['SDK', 'Software Development Kit', 'StartPredictSodViolationsV1429Response', 'StartPredictSodViolationsV1429Response']
---


# StartPredictSodViolationsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$StartPredictSodViolationsV1429Response = Initialize-StartPredictSodViolationsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$StartPredictSodViolationsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

