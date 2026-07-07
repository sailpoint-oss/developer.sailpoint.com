---
id: entitlementsourceresetbasereferencedto
title: Entitlementsourceresetbasereferencedto
pagination_label: Entitlementsourceresetbasereferencedto
sidebar_label: Entitlementsourceresetbasereferencedto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementsourceresetbasereferencedto', 'Entitlementsourceresetbasereferencedto'] 
slug: /tools/sdk/powershell/entitlements/models/entitlementsourceresetbasereferencedto
tags: ['SDK', 'Software Development Kit', 'Entitlementsourceresetbasereferencedto', 'Entitlementsourceresetbasereferencedto']
---


# Entitlementsourceresetbasereferencedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | The DTO type | [optional] 
**Id** | **String** | The task ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlementsourceresetbasereferencedto = Initialize-Entitlementsourceresetbasereferencedto  -Type TASK_RESULT `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Entitlement Source Reset
```

- Convert the resource to JSON
```powershell
$Entitlementsourceresetbasereferencedto | ConvertTo-JSON
```


[[Back to top]](#) 

