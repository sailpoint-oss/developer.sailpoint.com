---
id: roleminingentitlementref
title: Roleminingentitlementref
pagination_label: Roleminingentitlementref
sidebar_label: Roleminingentitlementref
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleminingentitlementref', 'Roleminingentitlementref'] 
slug: /tools/sdk/powershell/iairolemining/models/roleminingentitlementref
tags: ['SDK', 'Software Development Kit', 'Roleminingentitlementref', 'Roleminingentitlementref']
---


# Roleminingentitlementref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the entitlement | [optional] 
**Name** | **String** | Name of the entitlement | [optional] 
**Description** | **String** | Description forthe entitlement | [optional] 
**Attribute** | **String** | The entitlement attribute | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleminingentitlementref = Initialize-Roleminingentitlementref  -Id 2c91808a7e95e6e0017e96e2086206c8 `
 -Name App.entitlement.1 `
 -Description Entitlement 1 `
 -Attribute groups
```

- Convert the resource to JSON
```powershell
$Roleminingentitlementref | ConvertTo-JSON
```


[[Back to top]](#) 

