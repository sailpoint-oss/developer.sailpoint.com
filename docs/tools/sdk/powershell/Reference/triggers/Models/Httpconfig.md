---
id: httpconfig
title: Httpconfig
pagination_label: Httpconfig
sidebar_label: Httpconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Httpconfig', 'Httpconfig'] 
slug: /tools/sdk/powershell/triggers/models/httpconfig
tags: ['SDK', 'Software Development Kit', 'Httpconfig', 'Httpconfig']
---


# Httpconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** | **String** | URL of the external/custom integration. | [required]
**HttpDispatchMode** | [**Httpdispatchmode**](httpdispatchmode) |  | [required]
**HttpAuthenticationType** | [**Httpauthenticationtype**](httpauthenticationtype) |  | [optional] 
**BasicAuthConfig** | [**Basicauthconfig**](basicauthconfig) |  | [optional] 
**BearerTokenAuthConfig** | [**Bearertokenauthconfig**](bearertokenauthconfig) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Httpconfig = Initialize-Httpconfig  -Url https://www.example.com `
 -HttpDispatchMode null `
 -HttpAuthenticationType null `
 -BasicAuthConfig null `
 -BearerTokenAuthConfig null
```

- Convert the resource to JSON
```powershell
$Httpconfig | ConvertTo-JSON
```


[[Back to top]](#) 

