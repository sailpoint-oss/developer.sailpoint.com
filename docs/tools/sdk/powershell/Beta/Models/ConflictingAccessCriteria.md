---
id: conflicting-access-criteria
title: ConflictingAccessCriteria
pagination_label: ConflictingAccessCriteria
sidebar_label: ConflictingAccessCriteria
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ConflictingAccessCriteria'] 
slug: /tools/sdk/powershell/beta/models/conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'ConflictingAccessCriteria']
---


# ConflictingAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** |  Pointer to [**AccessCriteria**](access-criteria) |  | [optional] 
**RightCriteria** |  Pointer to [**AccessCriteria**](access-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ConflictingAccessCriteria = Initialize-BetaConflictingAccessCriteria  -LeftCriteria null `
 -RightCriteria null
```

- Convert the resource to JSON
```powershell
$ConflictingAccessCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

