---
id: beta-entitlement-manually-updated-fields
title: EntitlementManuallyUpdatedFields
pagination_label: EntitlementManuallyUpdatedFields
sidebar_label: EntitlementManuallyUpdatedFields
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementManuallyUpdatedFields', 'BetaEntitlementManuallyUpdatedFields'] 
slug: /tools/sdk/powershell/beta/models/entitlement-manually-updated-fields
tags: ['SDK', 'Software Development Kit', 'EntitlementManuallyUpdatedFields', 'BetaEntitlementManuallyUpdatedFields']
---


# EntitlementManuallyUpdatedFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DISPLAYNAME** |  Pointer to **Boolean** | True if the entitlements name was updated manually via entitlement import csv or patch endpoint.  False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) > `name` property. | [optional] [default to $false]
**DESCRIPTION** |  Pointer to **Boolean** | True if the entitlement description was updated manually via entitlement import csv or patch endpoint.  False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) > `description` property. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$EntitlementManuallyUpdatedFields = Initialize-PSSailpoint.BetaEntitlementManuallyUpdatedFields  -DISPLAYNAME true `
 -DESCRIPTION true
```

- Convert the resource to JSON
```powershell
$EntitlementManuallyUpdatedFields | ConvertTo-JSON
```


[[Back to top]](#) 

