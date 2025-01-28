---
id: v2024-field-details-dto
title: FieldDetailsDto
pagination_label: FieldDetailsDto
sidebar_label: FieldDetailsDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FieldDetailsDto', 'V2024FieldDetailsDto'] 
slug: /tools/sdk/powershell/v2024/models/field-details-dto
tags: ['SDK', 'Software Development Kit', 'FieldDetailsDto', 'V2024FieldDetailsDto']
---


# FieldDetailsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | The name of the attribute. | [optional] 
**Transform** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The transform to apply to the field | [optional] 
**Attributes** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Attributes required for the transform | [optional] 
**IsRequired** |  Pointer to **Boolean** | Flag indicating whether or not the attribute is required. | [optional] [readonly] [default to $false]
**Type** |  Pointer to **String** | The type of the attribute. | [optional] 
**IsMultiValued** |  Pointer to **Boolean** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$FieldDetailsDto = Initialize-PSSailpoint.V2024FieldDetailsDto  -Name userName `
 -Transform {type&#x3D;rule, attributes&#x3D;{name&#x3D;Create Unique LDAP Attribute}} `
 -Attributes {template&#x3D;${firstname}.${lastname}${uniqueCounter}, cloudMaxUniqueChecks&#x3D;50, cloudMaxSize&#x3D;20, cloudRequired&#x3D;true} `
 -IsRequired false `
 -Type string `
 -IsMultiValued false
```

- Convert the resource to JSON
```powershell
$FieldDetailsDto | ConvertTo-JSON
```


[[Back to top]](#) 

