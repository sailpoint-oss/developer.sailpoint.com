---
id: multi-host-integrations-create-sources
title: MultiHostIntegrationsCreateSources
pagination_label: MultiHostIntegrationsCreateSources
sidebar_label: MultiHostIntegrationsCreateSources
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrationsCreateSources'] 
slug: /tools/sdk/powershell/beta/models/multi-host-integrations-create-sources
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsCreateSources']
---


# MultiHostIntegrationsCreateSources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | Source's human-readable name. | [required]
**Description** |  Pointer to **String** | Source's human-readable description. | [optional] 
**ConnectorAttributes** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Connector specific configuration. This configuration will differ from type to type. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsCreateSources = Initialize-PSSailpoint.BetaMultiHostIntegrationsCreateSources  -Name My Source `
 -Description This is the corporate directory. `
 -ConnectorAttributes {authType&#x3D;SQLAuthentication, url&#x3D;jdbc:sqlserver://178.18.41.118:1433, user&#x3D;username, driverClass&#x3D;com.microsoft.sqlserver.jdbc.SQLServerDriver, maxSourcesPerAggGroup&#x3D;10, maxAllowedSources&#x3D;300}
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsCreateSources | ConvertTo-JSON
```


[[Back to top]](#) 

