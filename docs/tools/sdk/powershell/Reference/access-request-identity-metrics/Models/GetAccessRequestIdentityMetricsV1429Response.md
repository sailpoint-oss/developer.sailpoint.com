---
id: get-access-request-identity-metrics-v1429-response
title: GetAccessRequestIdentityMetricsV1429Response
pagination_label: GetAccessRequestIdentityMetricsV1429Response
sidebar_label: GetAccessRequestIdentityMetricsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetAccessRequestIdentityMetricsV1429Response', 'GetAccessRequestIdentityMetricsV1429Response'] 
slug: /tools/sdk/powershell/accessrequestidentitymetrics/models/get-access-request-identity-metrics-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetAccessRequestIdentityMetricsV1429Response', 'GetAccessRequestIdentityMetricsV1429Response']
---


# GetAccessRequestIdentityMetricsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAccessRequestIdentityMetricsV1429Response = Initialize-GetAccessRequestIdentityMetricsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetAccessRequestIdentityMetricsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

