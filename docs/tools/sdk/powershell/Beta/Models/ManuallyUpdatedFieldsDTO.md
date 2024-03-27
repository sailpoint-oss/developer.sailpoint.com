---
id: manually-updated-fields-dto
title: ManuallyUpdatedFieldsDTO
pagination_label: ManuallyUpdatedFieldsDTO
sidebar_label: ManuallyUpdatedFieldsDTO
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ManuallyUpdatedFieldsDTO'] 
slug: /tools/sdk/powershell/beta/models/manually-updated-fields-dto
tags: ['SDK', 'Software Development Kit', 'ManuallyUpdatedFieldsDTO']
---


# ManuallyUpdatedFieldsDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DISPLAYNAME** |  Pointer to **Boolean** | True if the entitlements name was updated manually via entitlement import csv or patch endpoint.  False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) &gt; &#x60;name&#x60; property. | [optional] [default to $false]
**DESCRIPTION** |  Pointer to **Boolean** | True if the entitlement description was updated manually via entitlement import csv or patch endpoint.  False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) &gt; &#x60;description&#x60; property. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ManuallyUpdatedFieldsDTO = Initialize-PSSailpointBetaManuallyUpdatedFieldsDTO  -DISPLAYNAME true `
 -DESCRIPTION true
```

- Convert the resource to JSON
```powershell
$ManuallyUpdatedFieldsDTO | ConvertTo-JSON
```


[[Back to top]](#) 

