---
id: accessprofileentitlement
title: Accessprofileentitlement
pagination_label: Accessprofileentitlement
sidebar_label: Accessprofileentitlement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessprofileentitlement', 'Accessprofileentitlement'] 
slug: /tools/sdk/powershell/search/models/accessprofileentitlement
tags: ['SDK', 'Software Development Kit', 'Accessprofileentitlement', 'Accessprofileentitlement']
---


# Accessprofileentitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** | **String** |  | [optional] 
**Description** | **String** | Description of access item. | [optional] 
**Source** | [**Reference**](reference) |  | [optional] 
**Type** | **String** | Type of the access item. | [optional] 
**Privileged** | **Boolean** |  | [optional] 
**Attribute** | **String** |  | [optional] 
**Value** | **String** |  | [optional] 
**Standalone** | **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessprofileentitlement = Initialize-Accessprofileentitlement  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe `
 -Description null `
 -Source null `
 -Type ENTITLEMENT `
 -Privileged false `
 -Attribute memberOf `
 -Value CN=Buyer,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com `
 -Standalone false
```

- Convert the resource to JSON
```powershell
$Accessprofileentitlement | ConvertTo-JSON
```


[[Back to top]](#) 

