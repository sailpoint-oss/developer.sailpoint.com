---
id: roleminingpotentialroleprovisionrequest
title: Roleminingpotentialroleprovisionrequest
pagination_label: Roleminingpotentialroleprovisionrequest
sidebar_label: Roleminingpotentialroleprovisionrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleminingpotentialroleprovisionrequest', 'Roleminingpotentialroleprovisionrequest'] 
slug: /tools/sdk/powershell/iairolemining/models/roleminingpotentialroleprovisionrequest
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialroleprovisionrequest', 'Roleminingpotentialroleprovisionrequest']
---


# Roleminingpotentialroleprovisionrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleName** | **String** | Name of the new role being created | [optional] 
**RoleDescription** | **String** | Short description of the new role being created | [optional] 
**OwnerId** | **String** | ID of the identity that will own this role | [optional] 
**IncludeIdentities** | **Boolean** | When true, create access requests for the identities associated with the potential role | [optional] [default to $false]
**DirectlyAssignedEntitlements** | **Boolean** | When true, assign entitlements directly to the role; otherwise, create access profiles containing the entitlements | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Roleminingpotentialroleprovisionrequest = Initialize-Roleminingpotentialroleprovisionrequest  -RoleName Finance - Accounting `
 -RoleDescription General access for accounting department `
 -OwnerId 2b568c65bc3c4c57a43bd97e3a8e41 `
 -IncludeIdentities true `
 -DirectlyAssignedEntitlements false
```

- Convert the resource to JSON
```powershell
$Roleminingpotentialroleprovisionrequest | ConvertTo-JSON
```


[[Back to top]](#) 

