---
id: get-org-config-v1429-response
title: GetOrgConfigV1429Response
pagination_label: GetOrgConfigV1429Response
sidebar_label: GetOrgConfigV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetOrgConfigV1429Response', 'GetOrgConfigV1429Response'] 
slug: /tools/sdk/powershell/orgconfig/models/get-org-config-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetOrgConfigV1429Response', 'GetOrgConfigV1429Response']
---


# GetOrgConfigV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetOrgConfigV1429Response = Initialize-GetOrgConfigV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetOrgConfigV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

