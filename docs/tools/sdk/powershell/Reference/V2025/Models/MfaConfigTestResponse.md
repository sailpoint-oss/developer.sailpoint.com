---
id: v2025-mfa-config-test-response
title: MfaConfigTestResponse
pagination_label: MfaConfigTestResponse
sidebar_label: MfaConfigTestResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MfaConfigTestResponse', 'V2025MfaConfigTestResponse'] 
slug: /tools/sdk/powershell/v2025/models/mfa-config-test-response
tags: ['SDK', 'Software Development Kit', 'MfaConfigTestResponse', 'V2025MfaConfigTestResponse']
---


# MfaConfigTestResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** |  **Enum** [  "SUCCESS",    "FAILED" ] | The configuration test result. | [optional] [readonly] 
**VarError** | **String** | The error message to indicate the failure of configuration test. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$MfaConfigTestResponse = Initialize-V2025MfaConfigTestResponse  -State SUCCESS `
 -VarError MFA Method is disabled.
```

- Convert the resource to JSON
```powershell
$MfaConfigTestResponse | ConvertTo-JSON
```


[[Back to top]](#) 

