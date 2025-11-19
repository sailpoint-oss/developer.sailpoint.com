---
id: beta-sod-violation-check-result
title: SodViolationCheckResult
pagination_label: SodViolationCheckResult
sidebar_label: SodViolationCheckResult
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodViolationCheckResult', 'BetaSodViolationCheckResult'] 
slug: /tools/sdk/powershell/beta/models/sod-violation-check-result
tags: ['SDK', 'Software Development Kit', 'SodViolationCheckResult', 'BetaSodViolationCheckResult']
---


# SodViolationCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**ErrorMessageDto**](error-message-dto) |  | [optional] 
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 
**ViolationContexts** | [**[]SodViolationContext**](sod-violation-context) |  | [optional] 
**ViolatedPolicies** | [**[]SodPolicyDto1**](sod-policy-dto1) | A list of the SOD policies that were violated. | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationCheckResult = Initialize-BetaSodViolationCheckResult  -Message null `
 -ClientMetadata {requestedAppName=test-app, requestedAppId=2c91808f7892918f0178b78da4a305a1} `
 -ViolationContexts null `
 -ViolatedPolicies null
```

- Convert the resource to JSON
```powershell
$SodViolationCheckResult | ConvertTo-JSON
```


[[Back to top]](#) 

