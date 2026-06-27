---
id: get-auth-org-network-config-v1401-response
title: GetAuthOrgNetworkConfigV1401Response
pagination_label: GetAuthOrgNetworkConfigV1401Response
sidebar_label: GetAuthOrgNetworkConfigV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetAuthOrgNetworkConfigV1401Response', 'GetAuthOrgNetworkConfigV1401Response'] 
slug: /tools/sdk/powershell/globaltenantsecuritysettings/models/get-auth-org-network-config-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetAuthOrgNetworkConfigV1401Response', 'GetAuthOrgNetworkConfigV1401Response']
---


# GetAuthOrgNetworkConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAuthOrgNetworkConfigV1401Response = Initialize-GetAuthOrgNetworkConfigV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetAuthOrgNetworkConfigV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

