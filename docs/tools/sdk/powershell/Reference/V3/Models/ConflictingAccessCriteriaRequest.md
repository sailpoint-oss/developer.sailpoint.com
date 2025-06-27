---
id: conflicting-access-criteria-request
title: ConflictingAccessCriteriaRequest
pagination_label: ConflictingAccessCriteriaRequest
sidebar_label: ConflictingAccessCriteriaRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConflictingAccessCriteriaRequest', 'ConflictingAccessCriteriaRequest'] 
slug: /tools/sdk/powershell/v3/models/conflicting-access-criteria-request
tags: ['SDK', 'Software Development Kit', 'ConflictingAccessCriteriaRequest', 'ConflictingAccessCriteriaRequest']
---


# ConflictingAccessCriteriaRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | [**AccessCriteriaRequest**](access-criteria-request) |  | [optional] 
**RightCriteria** | [**AccessCriteriaRequest**](access-criteria-request) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ConflictingAccessCriteriaRequest = Initialize-ConflictingAccessCriteriaRequest  -LeftCriteria null `
 -RightCriteria null
```

- Convert the resource to JSON
```powershell
$ConflictingAccessCriteriaRequest | ConvertTo-JSON
```


[[Back to top]](#) 

