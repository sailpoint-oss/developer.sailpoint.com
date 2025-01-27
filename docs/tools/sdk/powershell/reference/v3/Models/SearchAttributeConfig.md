---
id: search-attribute-config
title: SearchAttributeConfig
pagination_label: SearchAttributeConfig
sidebar_label: SearchAttributeConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchAttributeConfig'] 
slug: /tools/sdk/powershell/v3/models/search-attribute-config
tags: ['SDK', 'Software Development Kit', 'SearchAttributeConfig']
---


# SearchAttributeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | Name of the new attribute | [optional] 
**DisplayName** |  Pointer to **String** | The display name of the new attribute | [optional] 
**ApplicationAttributes** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Map of application id and their associated attribute. | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchAttributeConfig = Initialize-PSSailpoint.V3SearchAttributeConfig  -Name newMailAttribute `
 -DisplayName New Mail Attribute `
 -ApplicationAttributes {2c91808b79fd2422017a0b35d30f3968&#x3D;employeeNumber, 2c91808b79fd2422017a0b36008f396b&#x3D;employeeNumber}
```

- Convert the resource to JSON
```powershell
$SearchAttributeConfig | ConvertTo-JSON
```


[[Back to top]](#) 

