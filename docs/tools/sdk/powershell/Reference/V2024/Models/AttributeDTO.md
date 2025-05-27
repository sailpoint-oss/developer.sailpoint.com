---
id: v2024-attribute-dto
title: AttributeDTO
pagination_label: AttributeDTO
sidebar_label: AttributeDTO
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeDTO', 'V2024AttributeDTO'] 
slug: /tools/sdk/powershell/v2024/models/attribute-dto
tags: ['SDK', 'Software Development Kit', 'AttributeDTO', 'V2024AttributeDTO']
---


# AttributeDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | Technical name of the Attribute. This is unique and cannot be changed after creation. | [optional] 
**Name** | **String** | The display name of the key. | [optional] 
**Multiselect** | **Boolean** | Indicates whether the attribute can have multiple values. | [optional] [default to $false]
**Status** | **String** | The status of the Attribute. | [optional] 
**Type** | **String** | The type of the Attribute. This can be either ""custom"" or ""governance"". | [optional] 
**ObjectTypes** | **[]String** | An array of object types this attributes values can be applied to. Possible values are ""all"" or ""entitlement"". Value ""all"" means this attribute can be used with all object types that are supported. | [optional] 
**Description** | **String** | The description of the Attribute. | [optional] 
**Values** | [**[]AttributeValueDTO**](attribute-value-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeDTO = Initialize-V2024AttributeDTO  -Key iscPrivacy `
 -Name Privacy `
 -Multiselect false `
 -Status active `
 -Type governance `
 -ObjectTypes [entitlement] `
 -Description Specifies the level of privacy associated with an access item. `
 -Values null
```

- Convert the resource to JSON
```powershell
$AttributeDTO | ConvertTo-JSON
```


[[Back to top]](#) 

