---
id: beta-attributes-changed
title: AttributesChanged
pagination_label: AttributesChanged
sidebar_label: AttributesChanged
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributesChanged', 'BetaAttributesChanged'] 
slug: /tools/sdk/powershell/beta/models/attributes-changed
tags: ['SDK', 'Software Development Kit', 'AttributesChanged', 'BetaAttributesChanged']
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
$AttributesChanged = Initialize-BetaAttributesChanged  -AttributeChanges null `
 -EventType AttributesChanged `
 -IdentityId 8a80828f643d484f01643e14202e206f `
 -DateTime 2019-03-08T22:37:33.901Z
```

- Convert the resource to JSON
```powershell
$AttributesChanged | ConvertTo-JSON
```


[[Back to top]](#) 

