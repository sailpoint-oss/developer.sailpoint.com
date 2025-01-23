---
id: attributes-changed
title: AttributesChanged
pagination_label: AttributesChanged
sidebar_label: AttributesChanged
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributesChanged'] 
slug: /tools/sdk/powershell/beta/models/attributes-changed
tags: ['SDK', 'Software Development Kit', 'AttributesChanged']
---


# AttributesChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Changes** |  Pointer to [**[]AttributeChange**](attribute-change) |  | [optional] 
**EventType** |  Pointer to **String** | the event type | [optional] 
**IdentityId** |  Pointer to **String** | the identity id | [optional] 
**Dt** |  Pointer to **String** | the date of event | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributesChanged = Initialize-PSSailpoint.BetaAttributesChanged  -Changes null `
 -EventType null `
 -IdentityId null `
 -Dt null
```

- Convert the resource to JSON
```powershell
$AttributesChanged | ConvertTo-JSON
```


[[Back to top]](#) 

