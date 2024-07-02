---
id: source-password-policies-inner
title: SourcePasswordPoliciesInner
pagination_label: SourcePasswordPoliciesInner
sidebar_label: SourcePasswordPoliciesInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SourcePasswordPoliciesInner'] 
slug: /tools/sdk/powershell/v3/models/source-password-policies-inner
tags: ['SDK', 'Software Development Kit', 'SourcePasswordPoliciesInner']
---


# SourcePasswordPoliciesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "PASSWORD_POLICY" ] | The type of object being referenced | [optional] 
**Id** |  Pointer to **String** | ID of the policy | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the policy | [optional] 

## Examples

- Prepare the resource
```powershell
$SourcePasswordPoliciesInner = Initialize-SourcePasswordPoliciesInner  -Type PASSWORD_POLICY `
 -Id 2c91808568c529c60168cca6f90c1777 `
 -Name My Password Policy
```

- Convert the resource to JSON
```powershell
$SourcePasswordPoliciesInner | ConvertTo-JSON
```


[[Back to top]](#) 

