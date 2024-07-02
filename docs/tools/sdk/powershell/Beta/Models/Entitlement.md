---
id: entitlement
title: Entitlement
pagination_label: Entitlement
sidebar_label: Entitlement
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Entitlement'] 
slug: /tools/sdk/powershell/beta/models/entitlement
tags: ['SDK', 'Software Development Kit', 'Entitlement']
---


# Entitlement

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
**Attributes** |  Pointer to [map[string] **Any**] | A map of free-form key-value pairs from the source system | [optional] 
**Source** |  Pointer to [**EntitlementSource**](entitlement-source) |  | [optional] 
**Owner** |  Pointer to [**EntitlementOwner**](entitlement-owner) |  | [optional] 
**DirectPermissions** |  Pointer to [**[]PermissionDto**](permission-dto) |  | [optional] 
**Segments** |  Pointer to **[]String** | List of IDs of segments, if any, to which this Entitlement is assigned. | [optional] 
**ManuallyUpdatedFields** |  Pointer to [**EntitlementManuallyUpdatedFields**](entitlement-manually-updated-fields) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlement = Initialize-BetaEntitlement  -Id 2c91808874ff91550175097daaec161c `
 -Name LauncherTest2 `
 -Created 2020-10-08T18:33:52.029Z `
 -Modified 2020-10-08T18:33:52.029Z `
 -Attribute memberOf `
 -Value CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local `
 -SourceSchemaObjectType group `
 -Privileged true `
 -CloudGoverned true `
 -Description CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local `
 -Requestable true `
 -Attributes {fieldName=fieldValue} `
 -Source null `
 -Owner null `
 -DirectPermissions null `
 -Segments [f7b1b8a3-5fed-4fd4-ad29-82014e137e19, 29cb6c06-1da8-43ea-8be4-b3125f248f2a] `
 -ManuallyUpdatedFields null
```

- Convert the resource to JSON
```powershell
$Entitlement | ConvertTo-JSON
```


[[Back to top]](#) 

