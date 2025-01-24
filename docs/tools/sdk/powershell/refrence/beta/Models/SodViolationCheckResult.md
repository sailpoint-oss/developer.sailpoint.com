---
id: sod-violation-check-result
title: SodViolationCheckResult
pagination_label: SodViolationCheckResult
sidebar_label: SodViolationCheckResult
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodViolationCheckResult'] 
slug: /tools/sdk/powershell/beta/models/sod-violation-check-result
tags: ['SDK', 'Software Development Kit', 'SodViolationCheckResult']
---


# SodViolationCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** |  Pointer to [**ErrorMessageDto**](error-message-dto) |  | [optional] 
**ClientMetadata** |  Pointer to **map[string]String** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 
**ViolationContexts** |  Pointer to [**[]SodViolationContext**](sod-violation-context) |  | [optional] 
**ViolatedPolicies** |  Pointer to [**[]SodPolicyDto**](sod-policy-dto) | A list of the SOD policies that were violated. | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationCheckResult = Initialize-PSSailpoint.BetaSodViolationCheckResult  -Message null `
 -ClientMetadata {requestedAppName&#x3D;test-app, requestedAppId&#x3D;2c91808f7892918f0178b78da4a305a1} `
 -ViolationContexts null `
 -ViolatedPolicies null
```

- Convert the resource to JSON
```powershell
$SodViolationCheckResult | ConvertTo-JSON
```


[[Back to top]](#) 

