---
id: roleminingsessionscope
title: Roleminingsessionscope
pagination_label: Roleminingsessionscope
sidebar_label: Roleminingsessionscope
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleminingsessionscope', 'Roleminingsessionscope'] 
slug: /tools/sdk/powershell/iairolemining/models/roleminingsessionscope
tags: ['SDK', 'Software Development Kit', 'Roleminingsessionscope', 'Roleminingsessionscope']
---


# Roleminingsessionscope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityIds** | **[]String** | The list of identities for this role mining session. | [optional] 
**Criteria** | **String** | The ""search"" criteria that produces the list of identities for this role mining session. | [optional] 
**AttributeFilterCriteria** | [**[]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The filter criteria for this role mining session. | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleminingsessionscope = Initialize-Roleminingsessionscope  -IdentityIds ["2c918090761a5aac0176215c46a62d58","2c918090761a5aac01722015c46a62d42"] `
 -Criteria source.name:DataScienceDataset `
 -AttributeFilterCriteria {"displayName":{"untranslated":"Location: Miami"},"ariaLabel":{"untranslated":"Location: Miami"},"data":{"displayName":{"translateKey":"IDN.IDENTITY_ATTRIBUTES.LOCATION"},"name":"location","operator":"EQUALS","values":["Miami"]}}
```

- Convert the resource to JSON
```powershell
$Roleminingsessionscope | ConvertTo-JSON
```


[[Back to top]](#) 

