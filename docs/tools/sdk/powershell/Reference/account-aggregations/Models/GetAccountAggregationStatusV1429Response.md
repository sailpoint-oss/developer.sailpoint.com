---
id: get-account-aggregation-status-v1429-response
title: GetAccountAggregationStatusV1429Response
pagination_label: GetAccountAggregationStatusV1429Response
sidebar_label: GetAccountAggregationStatusV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetAccountAggregationStatusV1429Response', 'GetAccountAggregationStatusV1429Response'] 
slug: /tools/sdk/powershell/accountaggregations/models/get-account-aggregation-status-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetAccountAggregationStatusV1429Response', 'GetAccountAggregationStatusV1429Response']
---


# GetAccountAggregationStatusV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAccountAggregationStatusV1429Response = Initialize-GetAccountAggregationStatusV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetAccountAggregationStatusV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

