---
id: beta-multi-host-integrations-create-sources
title: MultiHostIntegrationsCreateSources
pagination_label: MultiHostIntegrationsCreateSources
sidebar_label: MultiHostIntegrationsCreateSources
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrationsCreateSources', 'BetaMultiHostIntegrationsCreateSources'] 
slug: /tools/sdk/powershell/beta/models/multi-host-integrations-create-sources
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsCreateSources', 'BetaMultiHostIntegrationsCreateSources']
---


# MultiHostIntegrationsCreateSources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Source's human-readable name. | [required]
**Description** | **String** | Source's human-readable description. | [optional] 
**ConnectorAttributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Connector specific configuration. This configuration will differ from type to type. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsCreateSources = Initialize-BetaMultiHostIntegrationsCreateSources  -Name My Source `
 -Description This is the corporate directory. `
 -ConnectorAttributes {authType=SQLAuthentication, url=jdbc:sqlserver://178.18.41.118:1433, user=username, driverClass=com.microsoft.sqlserver.jdbc.SQLServerDriver, maxSourcesPerAggGroup=10, maxAllowedSources=300}
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsCreateSources | ConvertTo-JSON
```


[[Back to top]](#) 

