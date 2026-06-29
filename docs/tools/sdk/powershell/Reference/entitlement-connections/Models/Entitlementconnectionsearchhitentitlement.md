---
id: entitlementconnectionsearchhitentitlement
title: Entitlementconnectionsearchhitentitlement
pagination_label: Entitlementconnectionsearchhitentitlement
sidebar_label: Entitlementconnectionsearchhitentitlement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementconnectionsearchhitentitlement', 'Entitlementconnectionsearchhitentitlement'] 
slug: /tools/sdk/powershell/entitlementconnections/models/entitlementconnectionsearchhitentitlement
tags: ['SDK', 'Software Development Kit', 'Entitlementconnectionsearchhitentitlement', 'Entitlementconnectionsearchhitentitlement']
---


# Entitlementconnectionsearchhitentitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Entitlement identifier. | [optional] 
**Name** | **String** | Entitlement name. | [optional] 
**DisplayName** | **String** | Human-readable entitlement label. | [optional] 
**Description** | **String** | Entitlement description. | [optional] 
**Attribute** | **String** | Source attribute carrying entitlement values. | [optional] 
**Value** | **String** | Source entitlement value. | [optional] 
**SourceSchemaObjectType** | **String** | Source schema object type for the entitlement. | [optional] 
**PrivilegeLevel** | [**EntitlementconnectionsearchhitentitlementPrivilegeLevel**](entitlementconnectionsearchhitentitlement-privilege-level) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlementconnectionsearchhitentitlement = Initialize-Entitlementconnectionsearchhitentitlement  -Id 2c918085804e1a0601806289c30a66de `
 -Name Launcher `
 -DisplayName Launcher `
 -Description description of launcher entitlement `
 -Attribute memberOf `
 -Value CN=productivity-bryants-org-1,OU=Groups,dc=flatfile,dc=endtoend,dc=com `
 -SourceSchemaObjectType ENTITLEMENT `
 -PrivilegeLevel null
```

- Convert the resource to JSON
```powershell
$Entitlementconnectionsearchhitentitlement | ConvertTo-JSON
```


[[Back to top]](#) 

