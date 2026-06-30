---
id: searchattributeconfig
title: Searchattributeconfig
pagination_label: Searchattributeconfig
sidebar_label: Searchattributeconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Searchattributeconfig', 'Searchattributeconfig'] 
slug: /tools/sdk/powershell/searchattributeconfiguration/models/searchattributeconfig
tags: ['SDK', 'Software Development Kit', 'Searchattributeconfig', 'Searchattributeconfig']
---


# Searchattributeconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the new attribute | [optional] 
**DisplayName** | **String** | The display name of the new attribute | [optional] 
**ApplicationAttributes** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Map of application id and their associated attribute. | [optional] 

## Examples

- Prepare the resource
```powershell
$Searchattributeconfig = Initialize-Searchattributeconfig  -Name newMailAttribute `
 -DisplayName New Mail Attribute `
 -ApplicationAttributes {"2c91808b79fd2422017a0b35d30f3968":"employeeNumber","2c91808b79fd2422017a0b36008f396b":"employeeNumber"}
```

- Convert the resource to JSON
```powershell
$Searchattributeconfig | ConvertTo-JSON
```


[[Back to top]](#) 

