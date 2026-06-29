---
id: list-identity-certifications-v1429-response
title: ListIdentityCertificationsV1429Response
pagination_label: ListIdentityCertificationsV1429Response
sidebar_label: ListIdentityCertificationsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListIdentityCertificationsV1429Response', 'ListIdentityCertificationsV1429Response'] 
slug: /tools/sdk/powershell/certifications/models/list-identity-certifications-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListIdentityCertificationsV1429Response', 'ListIdentityCertificationsV1429Response']
---


# ListIdentityCertificationsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListIdentityCertificationsV1429Response = Initialize-ListIdentityCertificationsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListIdentityCertificationsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

