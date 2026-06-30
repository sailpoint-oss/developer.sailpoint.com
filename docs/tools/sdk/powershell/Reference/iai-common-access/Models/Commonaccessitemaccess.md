---
id: commonaccessitemaccess
title: Commonaccessitemaccess
pagination_label: Commonaccessitemaccess
sidebar_label: Commonaccessitemaccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Commonaccessitemaccess', 'Commonaccessitemaccess'] 
slug: /tools/sdk/powershell/iaicommonaccess/models/commonaccessitemaccess
tags: ['SDK', 'Software Development Kit', 'Commonaccessitemaccess', 'Commonaccessitemaccess']
---


# Commonaccessitemaccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Common access ID | [optional] 
**Type** | [**Commonaccesstype**](commonaccesstype) |  | [optional] 
**Name** | **String** | Common access name | [optional] 
**Description** | **String** | Common access description | [optional] 
**OwnerName** | **String** | Common access owner name | [optional] 
**OwnerId** | **String** | Common access owner ID | [optional] 

## Examples

- Prepare the resource
```powershell
$Commonaccessitemaccess = Initialize-Commonaccessitemaccess  -Id null `
 -Type null `
 -Name null `
 -Description null `
 -OwnerName null `
 -OwnerId null
```

- Convert the resource to JSON
```powershell
$Commonaccessitemaccess | ConvertTo-JSON
```


[[Back to top]](#) 

