---
id: beta-violation-context-policy
title: ViolationContextPolicy
pagination_label: ViolationContextPolicy
sidebar_label: ViolationContextPolicy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ViolationContextPolicy', 'BetaViolationContextPolicy'] 
slug: /tools/sdk/powershell/beta/models/violation-context-policy
tags: ['SDK', 'Software Development Kit', 'ViolationContextPolicy', 'BetaViolationContextPolicy']
---


# ViolationContextPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ENTITLEMENT" ] | The type of object supported for SOD policy violations. | [optional] 
**Id** | **String** | SOD policy ID. | [optional] 
**Name** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ViolationContextPolicy = Initialize-PSSailpoint.BetaViolationContextPolicy  -Type ENTITLEMENT `
 -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Name A very cool policy name
```

- Convert the resource to JSON
```powershell
$ViolationContextPolicy | ConvertTo-JSON
```


[[Back to top]](#) 

