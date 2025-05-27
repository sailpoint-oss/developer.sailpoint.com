---
id: data-access-policies-inner
title: DataAccessPoliciesInner
pagination_label: DataAccessPoliciesInner
sidebar_label: DataAccessPoliciesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DataAccessPoliciesInner', 'DataAccessPoliciesInner'] 
slug: /tools/sdk/powershell/v3/models/data-access-policies-inner
tags: ['SDK', 'Software Development Kit', 'DataAccessPoliciesInner', 'DataAccessPoliciesInner']
---


# DataAccessPoliciesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | Value of the policy | [optional] 

## Examples

- Prepare the resource
```powershell
$DataAccessPoliciesInner = Initialize-DataAccessPoliciesInner  -Value GDPR-20
```

- Convert the resource to JSON
```powershell
$DataAccessPoliciesInner | ConvertTo-JSON
```


[[Back to top]](#) 

