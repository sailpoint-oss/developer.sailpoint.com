---
id: v2024-public-identity-attributes-inner
title: PublicIdentityAttributesInner
pagination_label: PublicIdentityAttributesInner
sidebar_label: PublicIdentityAttributesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PublicIdentityAttributesInner', 'V2024PublicIdentityAttributesInner'] 
slug: /tools/sdk/powershell/v2024/models/public-identity-attributes-inner
tags: ['SDK', 'Software Development Kit', 'PublicIdentityAttributesInner', 'V2024PublicIdentityAttributesInner']
---


# PublicIdentityAttributesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | The attribute key | [optional] 
**Name** | **String** | Human-readable display name of the attribute | [optional] 
**Value** | **String** | The attribute value | [optional] 

## Examples

- Prepare the resource
```powershell
$PublicIdentityAttributesInner = Initialize-V2024PublicIdentityAttributesInner  -Key country `
 -Name Country `
 -Value US
```

- Convert the resource to JSON
```powershell
$PublicIdentityAttributesInner | ConvertTo-JSON
```


[[Back to top]](#) 

