---
id: list-access-profiles-v1401-response
title: ListAccessProfilesV1401Response
pagination_label: ListAccessProfilesV1401Response
sidebar_label: ListAccessProfilesV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListAccessProfilesV1401Response', 'ListAccessProfilesV1401Response'] 
slug: /tools/sdk/powershell/accessprofiles/models/list-access-profiles-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListAccessProfilesV1401Response', 'ListAccessProfilesV1401Response']
---


# ListAccessProfilesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListAccessProfilesV1401Response = Initialize-ListAccessProfilesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListAccessProfilesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

