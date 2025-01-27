---
id: entitlement
title: Entitlement
pagination_label: Entitlement
sidebar_label: Entitlement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlement'] 
slug: /tools/sdk/powershell/v3/models/entitlement
tags: ['SDK', 'Software Development Kit', 'Entitlement']
---


# Entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The entitlement id | [optional] 
**Name** |  Pointer to **String** | The entitlement name | [optional] 
**Attribute** |  Pointer to **String** | The entitlement attribute name | [optional] 
**Value** |  Pointer to **String** | The value of the entitlement | [optional] 
**SourceSchemaObjectType** |  Pointer to **String** | The object type of the entitlement from the source schema | [optional] 
**Description** |  Pointer to **String** | The description of the entitlement | [optional] 
**Privileged** |  Pointer to **Boolean** | True if the entitlement is privileged | [optional] 
**CloudGoverned** |  Pointer to **Boolean** | True if the entitlement is cloud governed | [optional] 
**Created** |  Pointer to **System.DateTime** | Time when the entitlement was created | [optional] 
**Modified** |  Pointer to **System.DateTime** | Time when the entitlement was last modified | [optional] 
**Source** |  Pointer to [**EntitlementSource**](entitlement-source) |  | [optional] 
**Attributes** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A map of free-form key-value pairs from the source system | [optional] 
**Segments** |  Pointer to **[]String** | List of IDs of segments, if any, to which this Entitlement is assigned. | [optional] 
**DirectPermissions** |  Pointer to [**[]PermissionDto**](permission-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlement = Initialize-PSSailpoint.V3Entitlement  -Id 2c91808874ff91550175097daaec161c `
 -Name LauncherTest2 `
 -Attribute memberOf `
 -Value CN&#x3D;LauncherTest2,OU&#x3D;LauncherTestOrg,OU&#x3D;slpt-automation,DC&#x3D;TestAutomationAD,DC&#x3D;local `
 -SourceSchemaObjectType group `
 -Description CN&#x3D;LauncherTest2,OU&#x3D;LauncherTestOrg,OU&#x3D;slpt-automation,DC&#x3D;TestAutomationAD,DC&#x3D;local `
 -Privileged true `
 -CloudGoverned true `
 -Created 2020-10-08T18:33:52.029Z `
 -Modified 2020-10-08T18:33:52.029Z `
 -Source null `
 -Attributes {fieldName&#x3D;fieldValue} `
 -Segments [f7b1b8a3-5fed-4fd4-ad29-82014e137e19, 29cb6c06-1da8-43ea-8be4-b3125f248f2a] `
 -DirectPermissions null
```

- Convert the resource to JSON
```powershell
$Entitlement | ConvertTo-JSON
```


[[Back to top]](#) 

