---
id: jitconfiguration
title: Jitconfiguration
pagination_label: Jitconfiguration
sidebar_label: Jitconfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Jitconfiguration', 'Jitconfiguration'] 
slug: /tools/sdk/powershell/globaltenantsecuritysettings/models/jitconfiguration
tags: ['SDK', 'Software Development Kit', 'Jitconfiguration', 'Jitconfiguration']
---


# Jitconfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | The indicator for just-in-time provisioning enabled | [optional] [default to $false]
**SourceId** | **String** | the sourceId that mapped to just-in-time provisioning configuration | [optional] 
**SourceAttributeMappings** | **map[string]String** | A mapping of identity profile attribute names to SAML assertion attribute names | [optional] 

## Examples

- Prepare the resource
```powershell
$Jitconfiguration = Initialize-Jitconfiguration  -Enabled false `
 -SourceId 2c9180857377ed2901739c12a2da5ac8 `
 -SourceAttributeMappings {"firstName":"okta.firstName","lastName":"okta.lastName","email":"okta.email"}
```

- Convert the resource to JSON
```powershell
$Jitconfiguration | ConvertTo-JSON
```


[[Back to top]](#) 

