---
id: v2024-sod-violation-check-result
title: SodViolationCheckResult
pagination_label: SodViolationCheckResult
sidebar_label: SodViolationCheckResult
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodViolationCheckResult', 'V2024SodViolationCheckResult'] 
slug: /tools/sdk/powershell/v2024/models/sod-violation-check-result
tags: ['SDK', 'Software Development Kit', 'SodViolationCheckResult', 'V2024SodViolationCheckResult']
---


# SodViolationCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**ErrorMessageDto**](error-message-dto) |  | [optional] 
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 
**ViolationContexts** | [**[]SodViolationContext**](sod-violation-context) |  | [optional] 
**ViolatedPolicies** | [**[]SodPolicyDto**](sod-policy-dto) | A list of the SOD policies that were violated. | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationCheckResult = Initialize-PSSailpoint.V2024SodViolationCheckResult  -Message null `
 -ClientMetadata {requestedAppName=test-app, requestedAppId=2c91808f7892918f0178b78da4a305a1} `
 -ViolationContexts null `
 -ViolatedPolicies null
```

- Convert the resource to JSON
```powershell
$SodViolationCheckResult | ConvertTo-JSON
```


[[Back to top]](#) 

