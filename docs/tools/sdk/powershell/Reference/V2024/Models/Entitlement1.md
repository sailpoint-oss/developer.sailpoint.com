---
id: v2024-entitlement1
title: Entitlement1
pagination_label: Entitlement1
sidebar_label: Entitlement1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlement1', 'V2024Entitlement1'] 
slug: /tools/sdk/powershell/v2024/models/entitlement1
tags: ['SDK', 'Software Development Kit', 'Entitlement1', 'V2024Entitlement1']
---


# Entitlement1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The entitlement id | [optional] 
**Name** |  Pointer to **String** | The entitlement name | [optional] 
**Created** |  Pointer to **System.DateTime** | Time when the entitlement was created | [optional] 
**Modified** |  Pointer to **System.DateTime** | Time when the entitlement was last modified | [optional] 
**Attribute** |  Pointer to **String** | The entitlement attribute name | [optional] 
**Value** |  Pointer to **String** | The value of the entitlement | [optional] 
**SourceSchemaObjectType** |  Pointer to **String** | The object type of the entitlement from the source schema | [optional] 
**Privileged** |  Pointer to **Boolean** | True if the entitlement is privileged | [optional] [default to $false]
**CloudGoverned** |  Pointer to **Boolean** | True if the entitlement is cloud governed | [optional] [default to $false]
**Description** |  Pointer to **String** | The description of the entitlement | [optional] 
**Requestable** |  Pointer to **Boolean** | True if the entitlement is requestable | [optional] [default to $false]
**Attributes** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A map of free-form key-value pairs from the source system | [optional] 
**Source** |  Pointer to [**Entitlement1Source**](entitlement1-source) |  | [optional] 
**Owner** |  Pointer to [**Entitlement1Owner**](entitlement1-owner) |  | [optional] 
**DirectPermissions** |  Pointer to [**[]PermissionDto**](permission-dto) |  | [optional] 
**Segments** |  Pointer to **[]String** | List of IDs of segments, if any, to which this Entitlement is assigned. | [optional] 
**ManuallyUpdatedFields** |  Pointer to [**Entitlement1ManuallyUpdatedFields**](entitlement1-manually-updated-fields) |  | [optional] 
**AccessModelMetadata** |  Pointer to [**Entitlement1AccessModelMetadata**](entitlement1-access-model-metadata) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlement1 = Initialize-PSSailpoint.V2024Entitlement1  -Id 2c91808874ff91550175097daaec161c `
 -Name LauncherTest2 `
 -Created 2020-10-08T18:33:52.029Z `
 -Modified 2020-10-08T18:33:52.029Z `
 -Attribute memberOf `
 -Value CN&#x3D;LauncherTest2,OU&#x3D;LauncherTestOrg,OU&#x3D;slpt-automation,DC&#x3D;TestAutomationAD,DC&#x3D;local `
 -SourceSchemaObjectType group `
 -Privileged true `
 -CloudGoverned true `
 -Description CN&#x3D;LauncherTest2,OU&#x3D;LauncherTestOrg,OU&#x3D;slpt-automation,DC&#x3D;TestAutomationAD,DC&#x3D;local `
 -Requestable true `
 -Attributes {fieldName&#x3D;fieldValue} `
 -Source null `
 -Owner null `
 -DirectPermissions null `
 -Segments [f7b1b8a3-5fed-4fd4-ad29-82014e137e19, 29cb6c06-1da8-43ea-8be4-b3125f248f2a] `
 -ManuallyUpdatedFields null `
 -AccessModelMetadata null
```

- Convert the resource to JSON
```powershell
$Entitlement1 | ConvertTo-JSON
```


[[Back to top]](#) 

