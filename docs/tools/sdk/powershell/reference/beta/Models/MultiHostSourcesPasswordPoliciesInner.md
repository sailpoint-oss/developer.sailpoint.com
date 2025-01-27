---
id: beta-multi-host-sources-password-policies-inner
title: MultiHostSourcesPasswordPoliciesInner
pagination_label: MultiHostSourcesPasswordPoliciesInner
sidebar_label: MultiHostSourcesPasswordPoliciesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostSourcesPasswordPoliciesInner'] 
slug: /tools/sdk/powershell/beta/models/multi-host-sources-password-policies-inner
tags: ['SDK', 'Software Development Kit', 'MultiHostSourcesPasswordPoliciesInner']
---


# MultiHostSourcesPasswordPoliciesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "PASSWORD_POLICY" ] | Type of object being referenced. | [optional] 
**Id** |  Pointer to **String** | Policy ID. | [optional] 
**Name** |  Pointer to **String** | Policy's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostSourcesPasswordPoliciesInner = Initialize-PSSailpoint.BetaMultiHostSourcesPasswordPoliciesInner  -Type PASSWORD_POLICY `
 -Id 2c91808568c529c60168cca6f90c1777 `
 -Name My Password Policy
```

- Convert the resource to JSON
```powershell
$MultiHostSourcesPasswordPoliciesInner | ConvertTo-JSON
```


[[Back to top]](#) 

