---
id: v2025-attributes-changed
title: AttributesChanged
pagination_label: AttributesChanged
sidebar_label: AttributesChanged
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributesChanged', 'V2025AttributesChanged'] 
slug: /tools/sdk/powershell/v2025/models/attributes-changed
tags: ['SDK', 'Software Development Kit', 'AttributesChanged', 'V2025AttributesChanged']
---


# AttributesChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Changes** | [**[]AttributeChange**](attribute-change) |  | [optional] 
**EventType** | **String** | the event type | [optional] 
**IdentityId** | **String** | the identity id | [optional] 
**Dt** | **String** | the date of event | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributesChanged = Initialize-PSSailpoint.V2025AttributesChanged  -Changes null `
 -EventType null `
 -IdentityId null `
 -Dt null
```

- Convert the resource to JSON
```powershell
$AttributesChanged | ConvertTo-JSON
```


[[Back to top]](#) 

