---
id: jit-configuration
title: JITConfiguration
pagination_label: JITConfiguration
sidebar_label: JITConfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'JITConfiguration'] 
slug: /tools/sdk/powershell/v3/models/jit-configuration
tags: ['SDK', 'Software Development Kit', 'JITConfiguration']
---


# JITConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** |  Pointer to **Boolean** | The indicator for just-in-time provisioning enabled | [optional] [default to $false]
**SourceId** |  Pointer to **String** | the sourceId that mapped to just-in-time provisioning configuration | [optional] 
**SourceAttributeMappings** |  Pointer to **map[string]String** | A mapping of identity profile attribute names to SAML assertion attribute names | [optional] 

## Examples

- Prepare the resource
```powershell
$JITConfiguration = Initialize-PSSailpoint.V3JITConfiguration  -Enabled false `
 -SourceId 2c9180857377ed2901739c12a2da5ac8 `
 -SourceAttributeMappings {firstName&#x3D;okta.firstName, lastName&#x3D;okta.lastName, email&#x3D;okta.email}
```

- Convert the resource to JSON
```powershell
$JITConfiguration | ConvertTo-JSON
```


[[Back to top]](#) 

