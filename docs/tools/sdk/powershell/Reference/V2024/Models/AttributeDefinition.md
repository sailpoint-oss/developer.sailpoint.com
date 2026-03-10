---
id: v2024-attribute-definition
title: AttributeDefinition
pagination_label: AttributeDefinition
sidebar_label: AttributeDefinition
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeDefinition', 'V2024AttributeDefinition'] 
slug: /tools/sdk/powershell/v2024/models/attribute-definition
tags: ['SDK', 'Software Development Kit', 'AttributeDefinition', 'V2024AttributeDefinition']
---


# AttributeDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the attribute. | [optional] 
**NativeName** | **String** | Attribute name in the native system. | [optional] 
**Type** | [**AttributeDefinitionType**](attribute-definition-type) |  | [optional] 
**Schema** | [**AttributeDefinitionSchema**](attribute-definition-schema) |  | [optional] 
**Description** | **String** | A human-readable description of the attribute. | [optional] 
**IsMulti** | **Boolean** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to $false]
**IsEntitlement** | **Boolean** | Flag indicating whether or not the attribute is an entitlement. | [optional] [default to $false]
**IsGroup** | **Boolean** | Flag indicating whether or not the attribute represents a group. This can only be `true` if `isEntitlement` is also `true` **and** there is a schema defined for the attribute..  | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$AttributeDefinition = Initialize-V2024AttributeDefinition  -Name sAMAccountName `
 -NativeName sAMAccountName `
 -Type null `
 -Schema null `
 -Description SAM Account Name `
 -IsMulti false `
 -IsEntitlement false `
 -IsGroup false
```

- Convert the resource to JSON
```powershell
$AttributeDefinition | ConvertTo-JSON
```


[[Back to top]](#) 

