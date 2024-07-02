---
id: source-account-correlation-config
title: SourceAccountCorrelationConfig
pagination_label: SourceAccountCorrelationConfig
sidebar_label: SourceAccountCorrelationConfig
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SourceAccountCorrelationConfig'] 
slug: /tools/sdk/powershell/beta/models/source-account-correlation-config
tags: ['SDK', 'Software Development Kit', 'SourceAccountCorrelationConfig']
---


# SourceAccountCorrelationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "ACCOUNT_CORRELATION_CONFIG" ] | The type of object being referenced | [optional] 
**Id** |  Pointer to **String** | ID of the account correlation config | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the account correlation config | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceAccountCorrelationConfig = Initialize-BetaSourceAccountCorrelationConfig  -Type ACCOUNT_CORRELATION_CONFIG `
 -Id 2c9180855d191c59015d28583727245a `
 -Name Directory [source-62867] Account Correlation
```

- Convert the resource to JSON
```powershell
$SourceAccountCorrelationConfig | ConvertTo-JSON
```


[[Back to top]](#) 

