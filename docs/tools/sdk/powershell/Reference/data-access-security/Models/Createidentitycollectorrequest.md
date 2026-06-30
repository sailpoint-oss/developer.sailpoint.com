---
id: createidentitycollectorrequest
title: Createidentitycollectorrequest
pagination_label: Createidentitycollectorrequest
sidebar_label: Createidentitycollectorrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Createidentitycollectorrequest', 'Createidentitycollectorrequest'] 
slug: /tools/sdk/powershell/dataaccesssecurity/models/createidentitycollectorrequest
tags: ['SDK', 'Software Development Kit', 'Createidentitycollectorrequest', 'Createidentitycollectorrequest']
---


# Createidentitycollectorrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The display name for the new identity collector. Must be unique within the tenant. | [required]
**SourceId** | **String** | The identifier of the source to create the identity collector for, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. The identity collector type is derived from this source. | [required]

## Examples

- Prepare the resource
```powershell
$Createidentitycollectorrequest = Initialize-Createidentitycollectorrequest  -Name Active Directory Identity Collector `
 -SourceId 2c9180835d2e5168015d32f890ca1581
```

- Convert the resource to JSON
```powershell
$Createidentitycollectorrequest | ConvertTo-JSON
```


[[Back to top]](#) 

