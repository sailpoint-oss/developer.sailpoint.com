---
id: v2024-section-details
title: SectionDetails
pagination_label: SectionDetails
sidebar_label: SectionDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SectionDetails', 'V2024SectionDetails'] 
slug: /tools/sdk/powershell/v2024/models/section-details
tags: ['SDK', 'Software Development Kit', 'SectionDetails', 'V2024SectionDetails']
---


# SectionDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the FormItem | [optional] 
**Label** | **String** | Label of the section | [optional] 
**FormItems** | [**[]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | List of FormItems. FormItems can be SectionDetails and/or FieldDetails | [optional] 

## Examples

- Prepare the resource
```powershell
$SectionDetails = Initialize-V2024SectionDetails  -Name Field1 `
 -Label Section 1 `
 -FormItems []
```

- Convert the resource to JSON
```powershell
$SectionDetails | ConvertTo-JSON
```


[[Back to top]](#) 

