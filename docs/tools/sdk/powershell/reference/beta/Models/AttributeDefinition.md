---
id: beta-attribute-definition
title: AttributeDefinition
pagination_label: AttributeDefinition
sidebar_label: AttributeDefinition
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeDefinition'] 
slug: /tools/sdk/powershell/beta/models/attribute-definition
tags: ['SDK', 'Software Development Kit', 'AttributeDefinition']
---


# AttributeDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | The name of the attribute. | [optional] 
**Type** |  Pointer to [**AttributeDefinitionType**](attribute-definition-type) |  | [optional] 
**Schema** |  Pointer to [**AttributeDefinitionSchema**](attribute-definition-schema) |  | [optional] 
**Description** |  Pointer to **String** | A human-readable description of the attribute. | [optional] 
**IsMulti** |  Pointer to **Boolean** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to $false]
**IsEntitlement** |  Pointer to **Boolean** | Flag indicating whether or not the attribute is an entitlement. | [optional] [default to $false]
**IsGroup** |  Pointer to **Boolean** | Flag indicating whether or not the attribute represents a group. This can only be `true` if `isEntitlement` is also `true` **and** there is a schema defined for the attribute.  | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$AttributeDefinition = Initialize-PSSailpoint.BetaAttributeDefinition  -Name sAMAccountName `
 -Type null `
 -Schema null `
 -Description The sAMAccountName attribute `
 -IsMulti false `
 -IsEntitlement false `
 -IsGroup false
```

- Convert the resource to JSON
```powershell
$AttributeDefinition | ConvertTo-JSON
```


[[Back to top]](#) 

