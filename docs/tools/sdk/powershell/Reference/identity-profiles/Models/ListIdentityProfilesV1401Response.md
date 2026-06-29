---
id: list-identity-profiles-v1401-response
title: ListIdentityProfilesV1401Response
pagination_label: ListIdentityProfilesV1401Response
sidebar_label: ListIdentityProfilesV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListIdentityProfilesV1401Response', 'ListIdentityProfilesV1401Response'] 
slug: /tools/sdk/powershell/identityprofiles/models/list-identity-profiles-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListIdentityProfilesV1401Response', 'ListIdentityProfilesV1401Response']
---


# ListIdentityProfilesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListIdentityProfilesV1401Response = Initialize-ListIdentityProfilesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListIdentityProfilesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

