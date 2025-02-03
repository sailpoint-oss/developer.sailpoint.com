---
id: expansion-item
title: ExpansionItem
pagination_label: ExpansionItem
sidebar_label: ExpansionItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExpansionItem', 'ExpansionItem'] 
slug: /tools/sdk/powershell/v3/models/expansion-item
tags: ['SDK', 'Software Development Kit', 'ExpansionItem', 'ExpansionItem']
---


# ExpansionItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | **String** | The ID of the account | [optional] 
**Cause** | **String** |  | [optional] 
**Name** | **String** | The name of the item | [optional] 
**AttributeRequests** | [**[]AttributeRequest**](attribute-request) |  | [optional] 
**Source** | [**AccountSource**](account-source) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ExpansionItem = Initialize-PSSailpoint.V3ExpansionItem  -AccountId 2c91808981f58ea601821c3e93482e6f `
 -Cause Role `
 -Name smartsheet-role `
 -AttributeRequests null `
 -Source null
```

- Convert the resource to JSON
```powershell
$ExpansionItem | ConvertTo-JSON
```


[[Back to top]](#) 

