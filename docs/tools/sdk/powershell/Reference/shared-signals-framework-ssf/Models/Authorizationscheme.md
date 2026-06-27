---
id: authorizationscheme
title: Authorizationscheme
pagination_label: Authorizationscheme
sidebar_label: Authorizationscheme
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Authorizationscheme', 'Authorizationscheme'] 
slug: /tools/sdk/powershell/sharedsignalsframeworkssf/models/authorizationscheme
tags: ['SDK', 'Software Development Kit', 'Authorizationscheme', 'Authorizationscheme']
---


# Authorizationscheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SpecUrn** | **String** | URN describing the authorization specification. OAuth 2.0: `urn:ietf:rfc:6749`; Bearer token: `urn:ietf:rfc:6750`.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Authorizationscheme = Initialize-Authorizationscheme  -SpecUrn urn:ietf:rfc:6749
```

- Convert the resource to JSON
```powershell
$Authorizationscheme | ConvertTo-JSON
```


[[Back to top]](#) 

