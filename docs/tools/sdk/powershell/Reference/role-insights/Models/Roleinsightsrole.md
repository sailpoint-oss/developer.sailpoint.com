---
id: roleinsightsrole
title: Roleinsightsrole
pagination_label: Roleinsightsrole
sidebar_label: Roleinsightsrole
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleinsightsrole', 'Roleinsightsrole'] 
slug: /tools/sdk/powershell/roleinsights/models/roleinsightsrole
tags: ['SDK', 'Software Development Kit', 'Roleinsightsrole', 'Roleinsightsrole']
---


# Roleinsightsrole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Role name | [optional] 
**Id** | **String** | Role id | [optional] 
**Description** | **String** | Role description | [optional] 
**OwnerName** | **String** | Role owner name | [optional] 
**OwnerId** | **String** | Role owner id | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleinsightsrole = Initialize-Roleinsightsrole  -Name Software Engineer `
 -Id 1467e61e-f284-439c-ba2d-c6cc11cf0941 `
 -Description Person who develops software `
 -OwnerName Bob `
 -OwnerId 1467e61e-f284-439c-ba2d-c6cc11cf0941
```

- Convert the resource to JSON
```powershell
$Roleinsightsrole | ConvertTo-JSON
```


[[Back to top]](#) 

