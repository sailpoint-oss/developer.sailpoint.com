---
id: get-password-org-config-v1429-response
title: GetPasswordOrgConfigV1429Response
pagination_label: GetPasswordOrgConfigV1429Response
sidebar_label: GetPasswordOrgConfigV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetPasswordOrgConfigV1429Response', 'GetPasswordOrgConfigV1429Response'] 
slug: /tools/sdk/powershell/passwordconfiguration/models/get-password-org-config-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetPasswordOrgConfigV1429Response', 'GetPasswordOrgConfigV1429Response']
---


# GetPasswordOrgConfigV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPasswordOrgConfigV1429Response = Initialize-GetPasswordOrgConfigV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetPasswordOrgConfigV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

