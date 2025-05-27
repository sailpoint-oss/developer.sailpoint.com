---
id: v2025-source-password-policies-inner
title: SourcePasswordPoliciesInner
pagination_label: SourcePasswordPoliciesInner
sidebar_label: SourcePasswordPoliciesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourcePasswordPoliciesInner', 'V2025SourcePasswordPoliciesInner'] 
slug: /tools/sdk/powershell/v2025/models/source-password-policies-inner
tags: ['SDK', 'Software Development Kit', 'SourcePasswordPoliciesInner', 'V2025SourcePasswordPoliciesInner']
---


# SourcePasswordPoliciesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "PASSWORD_POLICY" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Policy ID. | [optional] 
**Name** | **String** | Policy's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourcePasswordPoliciesInner = Initialize-V2025SourcePasswordPoliciesInner  -Type PASSWORD_POLICY `
 -Id 2c91808568c529c60168cca6f90c1777 `
 -Name My Password Policy
```

- Convert the resource to JSON
```powershell
$SourcePasswordPoliciesInner | ConvertTo-JSON
```


[[Back to top]](#) 

