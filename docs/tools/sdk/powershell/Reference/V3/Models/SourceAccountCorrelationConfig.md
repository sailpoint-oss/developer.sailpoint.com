---
id: source-account-correlation-config
title: SourceAccountCorrelationConfig
pagination_label: SourceAccountCorrelationConfig
sidebar_label: SourceAccountCorrelationConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceAccountCorrelationConfig', 'SourceAccountCorrelationConfig'] 
slug: /tools/sdk/powershell/v3/models/source-account-correlation-config
tags: ['SDK', 'Software Development Kit', 'SourceAccountCorrelationConfig', 'SourceAccountCorrelationConfig']
---


# SourceAccountCorrelationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCOUNT_CORRELATION_CONFIG" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Account correlation config ID. | [optional] 
**Name** | **String** | Account correlation config's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceAccountCorrelationConfig = Initialize-SourceAccountCorrelationConfig  -Type ACCOUNT_CORRELATION_CONFIG `
 -Id 2c9180855d191c59015d28583727245a `
 -Name Directory [source-62867] Account Correlation
```

- Convert the resource to JSON
```powershell
$SourceAccountCorrelationConfig | ConvertTo-JSON
```


[[Back to top]](#) 

