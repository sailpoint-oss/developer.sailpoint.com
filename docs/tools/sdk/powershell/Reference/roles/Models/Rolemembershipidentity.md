---
id: rolemembershipidentity
title: Rolemembershipidentity
pagination_label: Rolemembershipidentity
sidebar_label: Rolemembershipidentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Rolemembershipidentity', 'Rolemembershipidentity'] 
slug: /tools/sdk/powershell/roles/models/rolemembershipidentity
tags: ['SDK', 'Software Development Kit', 'Rolemembershipidentity', 'Rolemembershipidentity']
---


# Rolemembershipidentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | Identity id | [optional] 
**Name** | **String** | Human-readable display name of the Identity. | [optional] 
**AliasName** | **String** | User name of the Identity | [optional] 

## Examples

- Prepare the resource
```powershell
$Rolemembershipidentity = Initialize-Rolemembershipidentity  -Type null `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Thomas Edison `
 -AliasName t.edison
```

- Convert the resource to JSON
```powershell
$Rolemembershipidentity | ConvertTo-JSON
```


[[Back to top]](#) 

