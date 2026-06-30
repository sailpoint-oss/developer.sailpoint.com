---
id: get-access-request-config-v1429-response
title: GetAccessRequestConfigV1429Response
pagination_label: GetAccessRequestConfigV1429Response
sidebar_label: GetAccessRequestConfigV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetAccessRequestConfigV1429Response', 'GetAccessRequestConfigV1429Response'] 
slug: /tools/sdk/powershell/accessrequests/models/get-access-request-config-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetAccessRequestConfigV1429Response', 'GetAccessRequestConfigV1429Response']
---


# GetAccessRequestConfigV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAccessRequestConfigV1429Response = Initialize-GetAccessRequestConfigV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetAccessRequestConfigV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

