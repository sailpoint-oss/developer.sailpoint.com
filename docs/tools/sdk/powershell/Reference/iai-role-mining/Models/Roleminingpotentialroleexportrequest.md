---
id: roleminingpotentialroleexportrequest
title: Roleminingpotentialroleexportrequest
pagination_label: Roleminingpotentialroleexportrequest
sidebar_label: Roleminingpotentialroleexportrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleminingpotentialroleexportrequest', 'Roleminingpotentialroleexportrequest'] 
slug: /tools/sdk/powershell/iairolemining/models/roleminingpotentialroleexportrequest
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialroleexportrequest', 'Roleminingpotentialroleexportrequest']
---


# Roleminingpotentialroleexportrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MinEntitlementPopularity** | **Int32** | The minimum popularity among identities in the role which an entitlement must have to be included in the report | [optional] 
**IncludeCommonAccess** | **Boolean** | If false, do not include entitlements that are highly popular among the entire orginization | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleminingpotentialroleexportrequest = Initialize-Roleminingpotentialroleexportrequest  -MinEntitlementPopularity 0 `
 -IncludeCommonAccess true
```

- Convert the resource to JSON
```powershell
$Roleminingpotentialroleexportrequest | ConvertTo-JSON
```


[[Back to top]](#) 

