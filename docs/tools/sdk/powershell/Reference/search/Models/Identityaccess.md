---
id: identityaccess
title: Identityaccess
pagination_label: Identityaccess
sidebar_label: Identityaccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityaccess', 'Identityaccess'] 
slug: /tools/sdk/powershell/search/models/identityaccess
tags: ['SDK', 'Software Development Kit', 'Identityaccess', 'Identityaccess']
---


# Identityaccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** | **String** |  | [optional] 
**Description** | **String** | Description of access item. | [optional] 
**Type** | **String** | Type of the access item. | [optional] 
**Source** | [**Reference**](reference) |  | [optional] 
**Owner** | [**Displayreference**](displayreference) |  | [optional] 
**Revocable** | **Boolean** |  | [optional] 
**Privileged** | **Boolean** |  | [optional] 
**Attribute** | **String** |  | [optional] 
**Value** | **String** |  | [optional] 
**Standalone** | **Boolean** |  | [optional] 
**Disabled** | **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Identityaccess = Initialize-Identityaccess  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe `
 -Description null `
 -Type ROLE `
 -Source null `
 -Owner null `
 -Revocable null `
 -Privileged false `
 -Attribute memberOf `
 -Value CN=Buyer,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com `
 -Standalone false `
 -Disabled null
```

- Convert the resource to JSON
```powershell
$Identityaccess | ConvertTo-JSON
```


[[Back to top]](#) 

