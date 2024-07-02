---
id: field-details-dto
title: FieldDetailsDto
pagination_label: FieldDetailsDto
sidebar_label: FieldDetailsDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'FieldDetailsDto'] 
slug: /tools/sdk/powershell/v3/models/field-details-dto
tags: ['SDK', 'Software Development Kit', 'FieldDetailsDto']
---


# FieldDetailsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | The name of the attribute. | [optional] 
**Transform** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | The transform to apply to the field | [optional] 
**Attributes** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Attributes required for the transform | [optional] 
**IsRequired** |  Pointer to **Boolean** | Flag indicating whether or not the attribute is required. | [optional] [readonly] [default to $false]
**Type** |  Pointer to **String** | The type of the attribute. | [optional] 
**IsMultiValued** |  Pointer to **Boolean** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$FieldDetailsDto = Initialize-FieldDetailsDto  -Name userName `
 -Transform {type=rule, attributes={name=Create Unique LDAP Attribute}} `
 -Attributes {template=${firstname}.${lastname}${uniqueCounter}, cloudMaxUniqueChecks=50, cloudMaxSize=20, cloudRequired=true} `
 -IsRequired false `
 -Type string `
 -IsMultiValued false
```

- Convert the resource to JSON
```powershell
$FieldDetailsDto | ConvertTo-JSON
```


[[Back to top]](#) 

