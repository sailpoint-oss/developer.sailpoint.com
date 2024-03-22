---
id: sod-violation-check-result1
title: SodViolationCheckResult1
pagination_label: SodViolationCheckResult1
sidebar_label: SodViolationCheckResult1
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SodViolationCheckResult1'] 
slug: /tools/sdk/powershell/beta/models/sod-violation-check-result1
tags: ['SDK', 'Software Development Kit', 'SodViolationCheckResult1']
---


# SodViolationCheckResult1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** |  Pointer to [**ErrorMessageDto**](error-message-dto) |  | [optional] 
**ClientMetadata** |  Pointer to **map[string]String** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 
**ViolationContexts** |  Pointer to [**[]SodViolationContext1**](sod-violation-context1) |  | [optional] 
**ViolatedPolicies** |  Pointer to [**[]SodPolicyDto**](sod-policy-dto) | A list of the Policies that were violated. | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationCheckResult1 = Initialize-PSSailpointBetaSodViolationCheckResult1  -Message null `
 -ClientMetadata {requestedAppName&#x3D;test-app, requestedAppId&#x3D;2c91808f7892918f0178b78da4a305a1} `
 -ViolationContexts null `
 -ViolatedPolicies null
```

- Convert the resource to JSON
```powershell
$SodViolationCheckResult1 | ConvertTo-JSON
```


[[Back to top]](#) 

