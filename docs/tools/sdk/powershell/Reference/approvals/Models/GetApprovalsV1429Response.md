---
id: get-approvals-v1429-response
title: GetApprovalsV1429Response
pagination_label: GetApprovalsV1429Response
sidebar_label: GetApprovalsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetApprovalsV1429Response', 'GetApprovalsV1429Response'] 
slug: /tools/sdk/powershell/approvals/models/get-approvals-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetApprovalsV1429Response', 'GetApprovalsV1429Response']
---


# GetApprovalsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetApprovalsV1429Response = Initialize-GetApprovalsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetApprovalsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

