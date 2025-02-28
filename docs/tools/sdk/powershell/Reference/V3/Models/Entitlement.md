---
id: entitlement
title: Entitlement
pagination_label: Entitlement
sidebar_label: Entitlement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlement', 'Entitlement'] 
slug: /tools/sdk/powershell/v3/models/entitlement
tags: ['SDK', 'Software Development Kit', 'Entitlement', 'Entitlement']
---


# Entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The entitlement id | [optional] 
**Name** | **String** | The entitlement name | [optional] 
**Attribute** | **String** | The entitlement attribute name | [optional] 
**Value** | **String** | The value of the entitlement | [optional] 
**SourceSchemaObjectType** | **String** | The object type of the entitlement from the source schema | [optional] 
**Description** | **String** | The description of the entitlement | [optional] 
**Privileged** | **Boolean** | True if the entitlement is privileged | [optional] 
**CloudGoverned** | **Boolean** | True if the entitlement is cloud governed | [optional] 
**Created** | **System.DateTime** | Time when the entitlement was created | [optional] 
**Modified** | **System.DateTime** | Time when the entitlement was last modified | [optional] 
**Source** | [**EntitlementSource**](entitlement-source) |  | [optional] 
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A map of free-form key-value pairs from the source system | [optional] 
**Segments** | **[]String** | List of IDs of segments, if any, to which this Entitlement is assigned. | [optional] 
**DirectPermissions** | [**[]PermissionDto**](permission-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlement = Initialize-PSSailpoint.V3Entitlement  -Id 2c91808874ff91550175097daaec161c `
 -Name LauncherTest2 `
 -Attribute memberOf `
 -Value CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local `
 -SourceSchemaObjectType group `
 -Description CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local `
 -Privileged true `
 -CloudGoverned true `
 -Created 2020-10-08T18:33:52.029Z `
 -Modified 2020-10-08T18:33:52.029Z `
 -Source null `
 -Attributes {fieldName=fieldValue} `
 -Segments [f7b1b8a3-5fed-4fd4-ad29-82014e137e19, 29cb6c06-1da8-43ea-8be4-b3125f248f2a] `
 -DirectPermissions null
```

- Convert the resource to JSON
```powershell
$Entitlement | ConvertTo-JSON
```


[[Back to top]](#) 

