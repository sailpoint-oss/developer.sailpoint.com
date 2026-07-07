---
id: attributeschanged
title: Attributeschanged
pagination_label: Attributeschanged
sidebar_label: Attributeschanged
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Attributeschanged', 'Attributeschanged'] 
slug: /tools/sdk/powershell/identityhistory/models/attributeschanged
tags: ['SDK', 'Software Development Kit', 'Attributeschanged', 'Attributeschanged']
---


# Attributeschanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeChanges** | [**[]Attributechange**](attributechange) |  | [required]
**EventType** | **String** | the event type | [optional] 
**IdentityId** | **String** | the identity id | [optional] 
**DateTime** | **String** | the date of event | [optional] 

## Examples

- Prepare the resource
```powershell
$Attributeschanged = Initialize-Attributeschanged  -AttributeChanges null `
 -EventType AttributesChanged `
 -IdentityId 8a80828f643d484f01643e14202e206f `
 -DateTime 2019-03-08T22:37:33.901Z
```

- Convert the resource to JSON
```powershell
$Attributeschanged | ConvertTo-JSON
```


[[Back to top]](#) 

