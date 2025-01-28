---
id: v2024-expansion-item
title: ExpansionItem
pagination_label: ExpansionItem
sidebar_label: ExpansionItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExpansionItem', 'V2024ExpansionItem'] 
slug: /tools/sdk/powershell/v2024/models/expansion-item
tags: ['SDK', 'Software Development Kit', 'ExpansionItem', 'V2024ExpansionItem']
---


# ExpansionItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** |  Pointer to **String** | The ID of the account | [optional] 
**Cause** |  Pointer to **String** |  | [optional] 
**Name** |  Pointer to **String** | The name of the item | [optional] 
**AttributeRequests** |  Pointer to [**[]AttributeRequest**](attribute-request) |  | [optional] 
**Source** |  Pointer to [**AccountSource**](account-source) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ExpansionItem = Initialize-PSSailpoint.V2024ExpansionItem  -AccountId 2c91808981f58ea601821c3e93482e6f `
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

