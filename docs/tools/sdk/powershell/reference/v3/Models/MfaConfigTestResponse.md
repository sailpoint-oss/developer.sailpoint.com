---
id: mfa-config-test-response
title: MfaConfigTestResponse
pagination_label: MfaConfigTestResponse
sidebar_label: MfaConfigTestResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MfaConfigTestResponse'] 
slug: /tools/sdk/powershell/v3/models/mfa-config-test-response
tags: ['SDK', 'Software Development Kit', 'MfaConfigTestResponse']
---


# MfaConfigTestResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** |  Pointer to  **Enum** [  "SUCCESS",    "FAILED" ] | The configuration test result. | [optional] [readonly] 
**VarError** |  Pointer to **String** | The error message to indicate the failure of configuration test. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$MfaConfigTestResponse = Initialize-PSSailpoint.V3MfaConfigTestResponse  -State SUCCESS `
 -VarError MFA Method is disabled.
```

- Convert the resource to JSON
```powershell
$MfaConfigTestResponse | ConvertTo-JSON
```


[[Back to top]](#) 

