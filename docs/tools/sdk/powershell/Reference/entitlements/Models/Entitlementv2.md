---
id: entitlementv2
title: Entitlementv2
pagination_label: Entitlementv2
sidebar_label: Entitlementv2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementv2', 'Entitlementv2'] 
slug: /tools/sdk/powershell/entitlements/models/entitlementv2
tags: ['SDK', 'Software Development Kit', 'Entitlementv2', 'Entitlementv2']
---


# Entitlementv2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The entitlement id | [optional] 
**Name** | **String** | The entitlement name | [optional] 
**Attribute** | **String** | The entitlement attribute name | [optional] 
**Value** | **String** | The value of the entitlement | [optional] 
**SourceSchemaObjectType** | **String** | The object type of the entitlement from the source schema | [optional] 
**Description** | **String** | The description of the entitlement | [optional] 
**PrivilegeLevel** | [**Entitlementv2PrivilegeLevel**](entitlementv2-privilege-level) |  | [optional] 
**Tags** | **[]String** | List of tags assigned to the entitlement | [optional] 
**CloudGoverned** | **Boolean** | True if the entitlement is cloud governed | [optional] [default to $false]
**Requestable** | **Boolean** | True if the entitlement is able to be directly requested | [optional] [default to $false]
**Owner** | [**Entitlementv2Owner**](entitlementv2-owner) |  | [optional] 
**ManuallyUpdatedFields** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A map of entitlement fields that have been manually updated. The key is the field name in UPPER_SNAKE_CASE format, and the value is true or false to indicate if the field has been updated. | [optional] 
**AccessModelMetadata** | [**Entitlementv2AccessModelMetadata**](entitlementv2-access-model-metadata) |  | [optional] 
**Created** | **System.DateTime** | Time when the entitlement was created | [optional] 
**Modified** | **System.DateTime** | Time when the entitlement was last modified | [optional] 
**Source** | [**Entitlementv2Source**](entitlementv2-source) |  | [optional] 
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A map of free-form key-value pairs from the source system | [optional] 
**Segments** | **[]String** | List of IDs of segments, if any, to which this Entitlement is assigned. | [optional] 
**DirectPermissions** | [**[]Permissiondto**](permissiondto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlementv2 = Initialize-Entitlementv2  -Id 2c91808874ff91550175097daaec161c `
 -Name Account Payable `
 -Attribute memberOf `
 -Value CN=Account Payable,OU=Finance,DC=xyz company `
 -SourceSchemaObjectType group `
 -Description This entitlement allows users to access the accounts payable module of the organization's financial management system. Users can view, process, and approve invoices, manage vendor relationships, and perform other accounts payable-related tasks. `
 -PrivilegeLevel null `
 -Tags ["tag1","tag2"] `
 -CloudGoverned true `
 -Requestable true `
 -Owner null `
 -ManuallyUpdatedFields {"DISPLAY_NAME":true,"DESCRIPTION":true} `
 -AccessModelMetadata null `
 -Created 2020-10-08T18:33:52.029Z `
 -Modified 2020-10-08T18:33:52.029Z `
 -Source null `
 -Attributes {"fieldName":"fieldValue"} `
 -Segments ["f7b1b8a3-5fed-4fd4-ad29-82014e137e19","29cb6c06-1da8-43ea-8be4-b3125f248f2a"] `
 -DirectPermissions null
```

- Convert the resource to JSON
```powershell
$Entitlementv2 | ConvertTo-JSON
```


[[Back to top]](#) 

