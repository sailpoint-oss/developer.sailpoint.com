---
id: beta-multi-host-sources-account-correlation-config
title: MultiHostSourcesAccountCorrelationConfig
pagination_label: MultiHostSourcesAccountCorrelationConfig
sidebar_label: MultiHostSourcesAccountCorrelationConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostSourcesAccountCorrelationConfig', 'BetaMultiHostSourcesAccountCorrelationConfig'] 
slug: /tools/sdk/powershell/beta/models/multi-host-sources-account-correlation-config
tags: ['SDK', 'Software Development Kit', 'MultiHostSourcesAccountCorrelationConfig', 'BetaMultiHostSourcesAccountCorrelationConfig']
---


# MultiHostSourcesAccountCorrelationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "ACCOUNT_CORRELATION_CONFIG" ] | Type of object being referenced. | [optional] 
**Id** |  Pointer to **String** | Account correlation config ID. | [optional] 
**Name** |  Pointer to **String** | Account correlation config's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostSourcesAccountCorrelationConfig = Initialize-PSSailpoint.BetaMultiHostSourcesAccountCorrelationConfig  -Type ACCOUNT_CORRELATION_CONFIG `
 -Id 2c9180855d191c59015d28583727245a `
 -Name Directory [source-62867] Account Correlation
```

- Convert the resource to JSON
```powershell
$MultiHostSourcesAccountCorrelationConfig | ConvertTo-JSON
```


[[Back to top]](#) 

