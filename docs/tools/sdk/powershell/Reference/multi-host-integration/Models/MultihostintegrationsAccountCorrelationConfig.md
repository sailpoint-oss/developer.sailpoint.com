---
id: multihostintegrations-account-correlation-config
title: MultihostintegrationsAccountCorrelationConfig
pagination_label: MultihostintegrationsAccountCorrelationConfig
sidebar_label: MultihostintegrationsAccountCorrelationConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultihostintegrationsAccountCorrelationConfig', 'MultihostintegrationsAccountCorrelationConfig'] 
slug: /tools/sdk/powershell/multihostintegration/models/multihostintegrations-account-correlation-config
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsAccountCorrelationConfig', 'MultihostintegrationsAccountCorrelationConfig']
---


# MultihostintegrationsAccountCorrelationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCOUNT_CORRELATION_CONFIG" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Account correlation config ID. | [optional] 
**Name** | **String** | Account correlation config's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultihostintegrationsAccountCorrelationConfig = Initialize-MultihostintegrationsAccountCorrelationConfig  -Type ACCOUNT_CORRELATION_CONFIG `
 -Id 2c9180855d191c59015d28583727245a `
 -Name Directory [source-62867] Account Correlation
```

- Convert the resource to JSON
```powershell
$MultihostintegrationsAccountCorrelationConfig | ConvertTo-JSON
```


[[Back to top]](#) 

