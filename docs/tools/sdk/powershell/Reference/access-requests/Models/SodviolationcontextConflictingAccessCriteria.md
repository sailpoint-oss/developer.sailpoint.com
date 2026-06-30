---
id: sodviolationcontext-conflicting-access-criteria
title: SodviolationcontextConflictingAccessCriteria
pagination_label: SodviolationcontextConflictingAccessCriteria
sidebar_label: SodviolationcontextConflictingAccessCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodviolationcontextConflictingAccessCriteria', 'SodviolationcontextConflictingAccessCriteria'] 
slug: /tools/sdk/powershell/accessrequests/models/sodviolationcontext-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodviolationcontextConflictingAccessCriteria', 'SodviolationcontextConflictingAccessCriteria']
---


# SodviolationcontextConflictingAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | [**SodviolationcontextConflictingAccessCriteriaLeftCriteria**](sodviolationcontext-conflicting-access-criteria-left-criteria) |  | [optional] 
**RightCriteria** | [**SodviolationcontextConflictingAccessCriteriaLeftCriteria**](sodviolationcontext-conflicting-access-criteria-left-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodviolationcontextConflictingAccessCriteria = Initialize-SodviolationcontextConflictingAccessCriteria  -LeftCriteria null `
 -RightCriteria null
```

- Convert the resource to JSON
```powershell
$SodviolationcontextConflictingAccessCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

