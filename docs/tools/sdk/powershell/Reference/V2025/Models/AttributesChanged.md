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
**AttributeChanges** | [**[]AttributeChange**](attribute-change) |  | [required]
**EventType** | **String** | the event type | [optional] 
**IdentityId** | **String** | the identity id | [optional] 
**DateTime** | **String** | the date of event | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributesChanged = Initialize-V2025AttributesChanged  -AttributeChanges null `
 -EventType AttributesChanged `
 -IdentityId 8a80828f643d484f01643e14202e206f `
 -DateTime 2019-03-08T22:37:33.901Z
```

- Convert the resource to JSON
```powershell
$AttributesChanged | ConvertTo-JSON
```


[[Back to top]](#) 

