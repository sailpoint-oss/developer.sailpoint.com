---
id: mfaconfigtestresponse
title: Mfaconfigtestresponse
pagination_label: Mfaconfigtestresponse
sidebar_label: Mfaconfigtestresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Mfaconfigtestresponse', 'Mfaconfigtestresponse'] 
slug: /tools/sdk/powershell/mfaconfiguration/models/mfaconfigtestresponse
tags: ['SDK', 'Software Development Kit', 'Mfaconfigtestresponse', 'Mfaconfigtestresponse']
---


# Mfaconfigtestresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** |  **Enum** [  "SUCCESS",    "FAILED" ] | The configuration test result. | [optional] [readonly] 
**VarError** | **String** | The error message to indicate the failure of configuration test. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$Mfaconfigtestresponse = Initialize-Mfaconfigtestresponse  -State SUCCESS `
 -VarError MFA Method is disabled.
```

- Convert the resource to JSON
```powershell
$Mfaconfigtestresponse | ConvertTo-JSON
```


[[Back to top]](#) 

