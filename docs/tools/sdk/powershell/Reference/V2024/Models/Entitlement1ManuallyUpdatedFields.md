---
id: v2024-entitlement1-manually-updated-fields
title: Entitlement1ManuallyUpdatedFields
pagination_label: Entitlement1ManuallyUpdatedFields
sidebar_label: Entitlement1ManuallyUpdatedFields
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlement1ManuallyUpdatedFields', 'V2024Entitlement1ManuallyUpdatedFields'] 
slug: /tools/sdk/powershell/v2024/models/entitlement1-manually-updated-fields
tags: ['SDK', 'Software Development Kit', 'Entitlement1ManuallyUpdatedFields', 'V2024Entitlement1ManuallyUpdatedFields']
---


# Entitlement1ManuallyUpdatedFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DISPLAYNAME** | **Boolean** | True if the entitlements name was updated manually via entitlement import csv or patch endpoint.  False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) > `name` property. | [optional] [default to $false]
**DESCRIPTION** | **Boolean** | True if the entitlement description was updated manually via entitlement import csv or patch endpoint.  False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) > `description` property. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Entitlement1ManuallyUpdatedFields = Initialize-PSSailpoint.V2024Entitlement1ManuallyUpdatedFields  -DISPLAYNAME true `
 -DESCRIPTION true
```

- Convert the resource to JSON
```powershell
$Entitlement1ManuallyUpdatedFields | ConvertTo-JSON
```


[[Back to top]](#) 

