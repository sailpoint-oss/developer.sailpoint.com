---
id: beta-visibility-criteria
title: VisibilityCriteria
pagination_label: VisibilityCriteria
sidebar_label: VisibilityCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VisibilityCriteria', 'BetaVisibilityCriteria'] 
slug: /tools/sdk/powershell/beta/models/visibility-criteria
tags: ['SDK', 'Software Development Kit', 'VisibilityCriteria', 'BetaVisibilityCriteria']
---


# VisibilityCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Expression** |  Pointer to [**Expression**](expression) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$VisibilityCriteria = Initialize-PSSailpoint.BetaVisibilityCriteria  -Expression null
```

- Convert the resource to JSON
```powershell
$VisibilityCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

