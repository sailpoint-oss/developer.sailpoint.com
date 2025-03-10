---
id: entitlement-owner
title: EntitlementOwner
pagination_label: EntitlementOwner
sidebar_label: EntitlementOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementOwner', 'EntitlementOwner'] 
slug: /tools/sdk/powershell/v3/models/entitlement-owner
tags: ['SDK', 'Software Development Kit', 'EntitlementOwner', 'EntitlementOwner']
---


# EntitlementOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The identity ID | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | The type of object | [optional] 
**Name** | **String** | The display name of the identity | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementOwner = Initialize-PSSailpoint.V3EntitlementOwner  -Id 2c9180827ca885d7017ca8ce28a000eb `
 -Type IDENTITY `
 -Name john.doe
```

- Convert the resource to JSON
```powershell
$EntitlementOwner | ConvertTo-JSON
```


[[Back to top]](#) 

