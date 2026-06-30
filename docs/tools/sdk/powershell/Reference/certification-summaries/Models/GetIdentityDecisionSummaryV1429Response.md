---
id: get-identity-decision-summary-v1429-response
title: GetIdentityDecisionSummaryV1429Response
pagination_label: GetIdentityDecisionSummaryV1429Response
sidebar_label: GetIdentityDecisionSummaryV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetIdentityDecisionSummaryV1429Response', 'GetIdentityDecisionSummaryV1429Response'] 
slug: /tools/sdk/powershell/certificationsummaries/models/get-identity-decision-summary-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetIdentityDecisionSummaryV1429Response', 'GetIdentityDecisionSummaryV1429Response']
---


# GetIdentityDecisionSummaryV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetIdentityDecisionSummaryV1429Response = Initialize-GetIdentityDecisionSummaryV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetIdentityDecisionSummaryV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

