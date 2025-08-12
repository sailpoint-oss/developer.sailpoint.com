---
id: sod-policy-request-all-of-conflicting-access-criteria
title: SodPolicyRequestAllOfConflictingAccessCriteria
pagination_label: SodPolicyRequestAllOfConflictingAccessCriteria
sidebar_label: SodPolicyRequestAllOfConflictingAccessCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodPolicyRequestAllOfConflictingAccessCriteria', 'SodPolicyRequestAllOfConflictingAccessCriteria'] 
slug: /tools/sdk/powershell/v3/models/sod-policy-request-all-of-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodPolicyRequestAllOfConflictingAccessCriteria', 'SodPolicyRequestAllOfConflictingAccessCriteria']
---


# SodPolicyRequestAllOfConflictingAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | [**AccessCriteriaRequest**](access-criteria-request) |  | [optional] 
**RightCriteria** | [**AccessCriteriaRequest**](access-criteria-request) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodPolicyRequestAllOfConflictingAccessCriteria = Initialize-SodPolicyRequestAllOfConflictingAccessCriteria  -LeftCriteria null `
 -RightCriteria null
```

- Convert the resource to JSON
```powershell
$SodPolicyRequestAllOfConflictingAccessCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

