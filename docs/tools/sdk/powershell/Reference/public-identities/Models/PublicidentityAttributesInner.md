---
id: publicidentity-attributes-inner
title: PublicidentityAttributesInner
pagination_label: PublicidentityAttributesInner
sidebar_label: PublicidentityAttributesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PublicidentityAttributesInner', 'PublicidentityAttributesInner'] 
slug: /tools/sdk/powershell/publicidentities/models/publicidentity-attributes-inner
tags: ['SDK', 'Software Development Kit', 'PublicidentityAttributesInner', 'PublicidentityAttributesInner']
---


# PublicidentityAttributesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | The attribute key | [optional] 
**Name** | **String** | Human-readable display name of the attribute | [optional] 
**Value** | **String** | The attribute value | [optional] 

## Examples

- Prepare the resource
```powershell
$PublicidentityAttributesInner = Initialize-PublicidentityAttributesInner  -Key country `
 -Name Country `
 -Value US
```

- Convert the resource to JSON
```powershell
$PublicidentityAttributesInner | ConvertTo-JSON
```


[[Back to top]](#) 

