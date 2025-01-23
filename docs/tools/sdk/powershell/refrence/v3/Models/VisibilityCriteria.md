---
id: visibility-criteria
title: VisibilityCriteria
pagination_label: VisibilityCriteria
sidebar_label: VisibilityCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VisibilityCriteria'] 
slug: /tools/sdk/powershell/v3/models/visibility-criteria
tags: ['SDK', 'Software Development Kit', 'VisibilityCriteria']
---


# VisibilityCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Expression** |  Pointer to [**Expression**](expression) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$VisibilityCriteria = Initialize-PSSailpoint.V3VisibilityCriteria  -Expression null
```

- Convert the resource to JSON
```powershell
$VisibilityCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

