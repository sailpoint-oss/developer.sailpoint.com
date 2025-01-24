---
id: section
title: Section
pagination_label: Section
sidebar_label: Section
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Section'] 
slug: /tools/sdk/powershell/beta/models/section
tags: ['SDK', 'Software Development Kit', 'Section']
---


# Section

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | Name of the FormItem | [optional] 
**Label** |  Pointer to **String** | Label of the section | [optional] 
**FormItems** |  Pointer to [**[]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | List of FormItems. FormItems can be SectionDetails and/or FieldDetails | [optional] 

## Examples

- Prepare the resource
```powershell
$Section = Initialize-PSSailpoint.BetaSection  -Name Field1 `
 -Label Section 1 `
 -FormItems []
```

- Convert the resource to JSON
```powershell
$Section | ConvertTo-JSON
```


[[Back to top]](#) 

