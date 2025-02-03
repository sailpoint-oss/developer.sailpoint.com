---
id: v2024-manually-updated-fields-dto
title: ManuallyUpdatedFieldsDTO
pagination_label: ManuallyUpdatedFieldsDTO
sidebar_label: ManuallyUpdatedFieldsDTO
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManuallyUpdatedFieldsDTO', 'V2024ManuallyUpdatedFieldsDTO'] 
slug: /tools/sdk/powershell/v2024/models/manually-updated-fields-dto
tags: ['SDK', 'Software Development Kit', 'ManuallyUpdatedFieldsDTO', 'V2024ManuallyUpdatedFieldsDTO']
---


# ManuallyUpdatedFieldsDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DISPLAYNAME** | **Boolean** | True if the entitlements name was updated manually via entitlement import csv or patch endpoint.  False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) > `name` property. | [optional] [default to $false]
**DESCRIPTION** | **Boolean** | True if the entitlement description was updated manually via entitlement import csv or patch endpoint.  False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) > `description` property. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ManuallyUpdatedFieldsDTO = Initialize-PSSailpoint.V2024ManuallyUpdatedFieldsDTO  -DISPLAYNAME true `
 -DESCRIPTION true
```

- Convert the resource to JSON
```powershell
$ManuallyUpdatedFieldsDTO | ConvertTo-JSON
```


[[Back to top]](#) 

