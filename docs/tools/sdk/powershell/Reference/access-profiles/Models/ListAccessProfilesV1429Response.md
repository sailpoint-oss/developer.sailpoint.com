---
id: list-access-profiles-v1429-response
title: ListAccessProfilesV1429Response
pagination_label: ListAccessProfilesV1429Response
sidebar_label: ListAccessProfilesV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListAccessProfilesV1429Response', 'ListAccessProfilesV1429Response'] 
slug: /tools/sdk/powershell/accessprofiles/models/list-access-profiles-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListAccessProfilesV1429Response', 'ListAccessProfilesV1429Response']
---


# ListAccessProfilesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListAccessProfilesV1429Response = Initialize-ListAccessProfilesV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListAccessProfilesV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

