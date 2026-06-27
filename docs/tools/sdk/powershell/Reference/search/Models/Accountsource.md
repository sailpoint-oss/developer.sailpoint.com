---
id: accountsource
title: Accountsource
pagination_label: Accountsource
sidebar_label: Accountsource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountsource', 'Accountsource'] 
slug: /tools/sdk/powershell/search/models/accountsource
tags: ['SDK', 'Software Development Kit', 'Accountsource', 'Accountsource']
---


# Accountsource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**Type** | **String** | Type of source returned. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accountsource = Initialize-Accountsource  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -Type Delimited File
```

- Convert the resource to JSON
```powershell
$Accountsource | ConvertTo-JSON
```


[[Back to top]](#) 

