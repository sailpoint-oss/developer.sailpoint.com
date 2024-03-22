---
id: mfa-config-test-response
title: MfaConfigTestResponse
pagination_label: MfaConfigTestResponse
sidebar_label: MfaConfigTestResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'MfaConfigTestResponse'] 
slug: /tools/sdk/powershell/beta/models/mfa-config-test-response
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
$MfaConfigTestResponse = Initialize-PSSailpointBetaMfaConfigTestResponse  -State SUCCESS `
 -VarError MFA Method is disabled.
```

- Convert the resource to JSON
```powershell
$MfaConfigTestResponse | ConvertTo-JSON
```


[[Back to top]](#) 

