---
id: segment-visibility-criteria
title: SegmentVisibilityCriteria
pagination_label: SegmentVisibilityCriteria
sidebar_label: SegmentVisibilityCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SegmentVisibilityCriteria', 'SegmentVisibilityCriteria'] 
slug: /tools/sdk/powershell/v3/models/segment-visibility-criteria
tags: ['SDK', 'Software Development Kit', 'SegmentVisibilityCriteria', 'SegmentVisibilityCriteria']
---


# SegmentVisibilityCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Expression** |  Pointer to [**Expression**](expression) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SegmentVisibilityCriteria = Initialize-PSSailpoint.V3SegmentVisibilityCriteria  -Expression null
```

- Convert the resource to JSON
```powershell
$SegmentVisibilityCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

