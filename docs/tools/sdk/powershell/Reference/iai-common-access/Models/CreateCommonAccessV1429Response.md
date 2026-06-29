---
id: create-common-access-v1429-response
title: CreateCommonAccessV1429Response
pagination_label: CreateCommonAccessV1429Response
sidebar_label: CreateCommonAccessV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateCommonAccessV1429Response', 'CreateCommonAccessV1429Response'] 
slug: /tools/sdk/powershell/iaicommonaccess/models/create-common-access-v1429-response
tags: ['SDK', 'Software Development Kit', 'CreateCommonAccessV1429Response', 'CreateCommonAccessV1429Response']
---


# CreateCommonAccessV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateCommonAccessV1429Response = Initialize-CreateCommonAccessV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$CreateCommonAccessV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

