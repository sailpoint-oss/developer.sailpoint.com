---
id: updateidentitycollectorrequest
title: Updateidentitycollectorrequest
pagination_label: Updateidentitycollectorrequest
sidebar_label: Updateidentitycollectorrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Updateidentitycollectorrequest', 'Updateidentitycollectorrequest'] 
slug: /tools/sdk/powershell/dataaccesssecurity/models/updateidentitycollectorrequest
tags: ['SDK', 'Software Development Kit', 'Updateidentitycollectorrequest', 'Updateidentitycollectorrequest']
---


# Updateidentitycollectorrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The display name of the identity collector. Must be unique within the tenant. | [required]
**SourceId** | **String** | The identifier of the associated source, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. This value cannot be modified for an existing identity collector and must match the current value. | [required]
**Type** | **String** | The identity collector type. This value cannot be modified for an existing identity collector and must match the current value. | [required]

## Examples

- Prepare the resource
```powershell
$Updateidentitycollectorrequest = Initialize-Updateidentitycollectorrequest  -Name Active Directory Identity Collector `
 -SourceId 2c9180835d2e5168015d32f890ca1581 `
 -Type Active Directory
```

- Convert the resource to JSON
```powershell
$Updateidentitycollectorrequest | ConvertTo-JSON
```


[[Back to top]](#) 

