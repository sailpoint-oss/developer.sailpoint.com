---
id: section-details
title: SectionDetails
pagination_label: SectionDetails
sidebar_label: SectionDetails
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SectionDetails'] 
slug: /tools/sdk/powershell/beta/models/section-details
tags: ['SDK', 'Software Development Kit', 'SectionDetails']
---


# SectionDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | Name of the FormItem | [optional] 
**Label** |  Pointer to **String** | Label of the section | [optional] 
**FormItems** |  Pointer to [**[]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | List of FormItems. FormItems can be SectionDetails and/or FieldDetails | [optional] 

## Examples

- Prepare the resource
```powershell
$SectionDetails = Initialize-BetaSectionDetails  -Name Field1 `
 -Label Section 1 `
 -FormItems []
```

- Convert the resource to JSON
```powershell
$SectionDetails | ConvertTo-JSON
```


[[Back to top]](#) 

