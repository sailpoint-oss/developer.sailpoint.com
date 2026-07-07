---
id: multihostintegrations-password-policies-inner
title: MultihostintegrationsPasswordPoliciesInner
pagination_label: MultihostintegrationsPasswordPoliciesInner
sidebar_label: MultihostintegrationsPasswordPoliciesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultihostintegrationsPasswordPoliciesInner', 'MultihostintegrationsPasswordPoliciesInner'] 
slug: /tools/sdk/powershell/multihostintegration/models/multihostintegrations-password-policies-inner
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsPasswordPoliciesInner', 'MultihostintegrationsPasswordPoliciesInner']
---


# MultihostintegrationsPasswordPoliciesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "PASSWORD_POLICY" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Policy ID. | [optional] 
**Name** | **String** | Policy's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultihostintegrationsPasswordPoliciesInner = Initialize-MultihostintegrationsPasswordPoliciesInner  -Type PASSWORD_POLICY `
 -Id 2c91808568c529c60168cca6f90c1777 `
 -Name My Password Policy
```

- Convert the resource to JSON
```powershell
$MultihostintegrationsPasswordPoliciesInner | ConvertTo-JSON
```


[[Back to top]](#) 

