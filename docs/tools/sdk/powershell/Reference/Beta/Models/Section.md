---
id: beta-section
title: Section
pagination_label: Section
sidebar_label: Section
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Section', 'BetaSection'] 
slug: /tools/sdk/powershell/beta/models/section
tags: ['SDK', 'Software Development Kit', 'Section', 'BetaSection']
---


# Section

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the FormItem | [optional] 
**Label** | **String** | Label of the section | [optional] 
**FormItems** | [**[]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | List of FormItems. FormItems can be SectionDetails and/or FieldDetails | [optional] 

## Examples

- Prepare the resource
```powershell
$Section = Initialize-BetaSection  -Name Field1 `
 -Label Section 1 `
 -FormItems []
```

- Convert the resource to JSON
```powershell
$Section | ConvertTo-JSON
```


[[Back to top]](#) 

