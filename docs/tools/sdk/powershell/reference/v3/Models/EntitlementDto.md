---
id: entitlement-dto
title: EntitlementDto
pagination_label: EntitlementDto
sidebar_label: EntitlementDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementDto', 'EntitlementDto'] 
slug: /tools/sdk/powershell/v3/models/entitlement-dto
tags: ['SDK', 'Software Development Kit', 'EntitlementDto', 'EntitlementDto']
---


# EntitlementDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** |  **String** | Name of the Object | [required]
**Created** |  Pointer to **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** |  Pointer to **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Attribute** |  Pointer to **String** | Name of the entitlement attribute | [optional] 
**Value** |  Pointer to **String** | Raw value of the entitlement | [optional] 
**Description** |  Pointer to **String** | Entitlment description | [optional] 
**Attributes** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Entitlement attributes | [optional] 
**SourceSchemaObjectType** |  Pointer to **String** | Schema objectType on the given application that maps to an Account Group | [optional] 
**Privileged** |  Pointer to **Boolean** | Determines if this Entitlement is privileged. | [optional] 
**CloudGoverned** |  Pointer to **Boolean** | Determines if this Entitlement is goverened in the cloud. | [optional] 
**Source** |  Pointer to [**EntitlementSource**](entitlement-source) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementDto = Initialize-PSSailpoint.V3EntitlementDto  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -Attribute authorizationType `
 -Value CN&#x3D;Users,dc&#x3D;sailpoint,dc&#x3D;com `
 -Description Active Directory DC `
 -Attributes {GroupType&#x3D;Security, sAMAccountName&#x3D;Buyer} `
 -SourceSchemaObjectType group `
 -Privileged false `
 -CloudGoverned false `
 -Source null
```

- Convert the resource to JSON
```powershell
$EntitlementDto | ConvertTo-JSON
```


[[Back to top]](#) 

