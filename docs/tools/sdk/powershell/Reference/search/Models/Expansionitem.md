---
id: expansionitem
title: Expansionitem
pagination_label: Expansionitem
sidebar_label: Expansionitem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Expansionitem', 'Expansionitem'] 
slug: /tools/sdk/powershell/search/models/expansionitem
tags: ['SDK', 'Software Development Kit', 'Expansionitem', 'Expansionitem']
---


# Expansionitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | **String** | The ID of the account | [optional] 
**Cause** | **String** | Cause of the expansion item. | [optional] 
**Name** | **String** | The name of the item | [optional] 
**AttributeRequest** | [**Attributerequest**](attributerequest) |  | [optional] 
**Source** | [**Accountsource**](accountsource) |  | [optional] 
**Id** | **String** | ID of the expansion item | [optional] 
**State** | **String** | State of the expansion item | [optional] 

## Examples

- Prepare the resource
```powershell
$Expansionitem = Initialize-Expansionitem  -AccountId 2c91808981f58ea601821c3e93482e6f `
 -Cause Role `
 -Name smartsheet-role `
 -AttributeRequest null `
 -Source null `
 -Id ac2887ffe0e7435a8c18c73f7ae94c7b `
 -State EXECUTING
```

- Convert the resource to JSON
```powershell
$Expansionitem | ConvertTo-JSON
```


[[Back to top]](#) 

