---
id: v2024-source-account-correlation-config
title: SourceAccountCorrelationConfig
pagination_label: SourceAccountCorrelationConfig
sidebar_label: SourceAccountCorrelationConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceAccountCorrelationConfig', 'V2024SourceAccountCorrelationConfig'] 
slug: /tools/sdk/powershell/v2024/models/source-account-correlation-config
tags: ['SDK', 'Software Development Kit', 'SourceAccountCorrelationConfig', 'V2024SourceAccountCorrelationConfig']
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
$SourceAccountCorrelationConfig = Initialize-PSSailpoint.V2024SourceAccountCorrelationConfig  -Type ACCOUNT_CORRELATION_CONFIG `
 -Id 2c9180855d191c59015d28583727245a `
 -Name Directory [source-62867] Account Correlation
```

- Convert the resource to JSON
```powershell
$SourceAccountCorrelationConfig | ConvertTo-JSON
```


[[Back to top]](#) 

