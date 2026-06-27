---
id: roleminingpotentialroleexportresponse
title: Roleminingpotentialroleexportresponse
pagination_label: Roleminingpotentialroleexportresponse
sidebar_label: Roleminingpotentialroleexportresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleminingpotentialroleexportresponse', 'Roleminingpotentialroleexportresponse'] 
slug: /tools/sdk/powershell/iairolemining/models/roleminingpotentialroleexportresponse
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialroleexportresponse', 'Roleminingpotentialroleexportresponse']
---


# Roleminingpotentialroleexportresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MinEntitlementPopularity** | **Int32** | The minimum popularity among identities in the role which an entitlement must have to be included in the report | [optional] 
**IncludeCommonAccess** | **Boolean** | If false, do not include entitlements that are highly popular among the entire orginization | [optional] 
**ExportId** | **String** | ID used to reference this export | [optional] 
**Status** | [**Roleminingpotentialroleexportstate**](roleminingpotentialroleexportstate) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleminingpotentialroleexportresponse = Initialize-Roleminingpotentialroleexportresponse  -MinEntitlementPopularity 0 `
 -IncludeCommonAccess true `
 -ExportId 0c6cdb76-1227-4aaf-af21-192dbdfbfa04 `
 -Status null
```

- Convert the resource to JSON
```powershell
$Roleminingpotentialroleexportresponse | ConvertTo-JSON
```


[[Back to top]](#) 

