---
id: get-branding-list-v1429-response
title: GetBrandingListV1429Response
pagination_label: GetBrandingListV1429Response
sidebar_label: GetBrandingListV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetBrandingListV1429Response', 'GetBrandingListV1429Response'] 
slug: /tools/sdk/powershell/branding/models/get-branding-list-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetBrandingListV1429Response', 'GetBrandingListV1429Response']
---


# GetBrandingListV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetBrandingListV1429Response = Initialize-GetBrandingListV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetBrandingListV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

