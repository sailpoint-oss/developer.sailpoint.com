---
id: beta-search-attribute-config
title: SearchAttributeConfig
pagination_label: SearchAttributeConfig
sidebar_label: SearchAttributeConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchAttributeConfig', 'BetaSearchAttributeConfig'] 
slug: /tools/sdk/powershell/beta/models/search-attribute-config
tags: ['SDK', 'Software Development Kit', 'SearchAttributeConfig', 'BetaSearchAttributeConfig']
---


# SearchAttributeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the new attribute | [optional] 
**DisplayName** | **String** | The display name of the new attribute | [optional] 
**ApplicationAttributes** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Map of application id and their associated attribute. | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchAttributeConfig = Initialize-PSSailpoint.BetaSearchAttributeConfig  -Name newMailAttribute `
 -DisplayName New Mail Attribute `
 -ApplicationAttributes {2c91808b79fd2422017a0b35d30f3968=employeeNumber, 2c91808b79fd2422017a0b36008f396b=employeeNumber}
```

- Convert the resource to JSON
```powershell
$SearchAttributeConfig | ConvertTo-JSON
```


[[Back to top]](#) 

