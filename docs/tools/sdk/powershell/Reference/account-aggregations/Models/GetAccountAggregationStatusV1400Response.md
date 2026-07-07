---
id: get-account-aggregation-status-v1400-response
title: GetAccountAggregationStatusV1400Response
pagination_label: GetAccountAggregationStatusV1400Response
sidebar_label: GetAccountAggregationStatusV1400Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetAccountAggregationStatusV1400Response', 'GetAccountAggregationStatusV1400Response'] 
slug: /tools/sdk/powershell/accountaggregations/models/get-account-aggregation-status-v1400-response
tags: ['SDK', 'Software Development Kit', 'GetAccountAggregationStatusV1400Response', 'GetAccountAggregationStatusV1400Response']
---


# GetAccountAggregationStatusV1400Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAccountAggregationStatusV1400Response = Initialize-GetAccountAggregationStatusV1400Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetAccountAggregationStatusV1400Response | ConvertTo-JSON
```


[[Back to top]](#) 

