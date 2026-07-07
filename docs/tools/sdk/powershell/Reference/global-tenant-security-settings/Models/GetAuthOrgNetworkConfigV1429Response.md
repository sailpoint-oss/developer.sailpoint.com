---
id: get-auth-org-network-config-v1429-response
title: GetAuthOrgNetworkConfigV1429Response
pagination_label: GetAuthOrgNetworkConfigV1429Response
sidebar_label: GetAuthOrgNetworkConfigV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetAuthOrgNetworkConfigV1429Response', 'GetAuthOrgNetworkConfigV1429Response'] 
slug: /tools/sdk/powershell/globaltenantsecuritysettings/models/get-auth-org-network-config-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetAuthOrgNetworkConfigV1429Response', 'GetAuthOrgNetworkConfigV1429Response']
---


# GetAuthOrgNetworkConfigV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAuthOrgNetworkConfigV1429Response = Initialize-GetAuthOrgNetworkConfigV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetAuthOrgNetworkConfigV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

