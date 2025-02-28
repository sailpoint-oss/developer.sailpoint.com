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
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Attribute** | **String** | Name of the entitlement attribute | [optional] 
**Value** | **String** | Raw value of the entitlement | [optional] 
**Description** | **String** | Entitlment description | [optional] 
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Entitlement attributes | [optional] 
**SourceSchemaObjectType** | **String** | Schema objectType on the given application that maps to an Account Group | [optional] 
**Privileged** | **Boolean** | Determines if this Entitlement is privileged. | [optional] 
**CloudGoverned** | **Boolean** | Determines if this Entitlement is goverened in the cloud. | [optional] 
**Source** | [**EntitlementSource**](entitlement-source) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementDto = Initialize-PSSailpoint.V3EntitlementDto  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -Attribute authorizationType `
 -Value CN=Users,dc=sailpoint,dc=com `
 -Description Active Directory DC `
 -Attributes {GroupType=Security, sAMAccountName=Buyer} `
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

