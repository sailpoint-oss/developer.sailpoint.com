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
**Name** | **String** | The name of the attribute. | [optional] 
**Transform** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The transform to apply to the field | [optional] 
**Attributes** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Attributes required for the transform | [optional] 
**IsRequired** | **Boolean** | Flag indicating whether or not the attribute is required. | [optional] [readonly] [default to $false]
**Type** |  **Enum** [  "string",    "int",    "long",    "date",    "boolean",    "secret" ] | The type of the attribute.  string: For text-based data.  int: For whole numbers.  long: For larger whole numbers.  date: For date and time values.  boolean: For true/false values.  secret: For sensitive data like passwords, which will be masked and encrypted.  | [optional] 
**IsMultiValued** | **Boolean** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$FieldDetailsDto = Initialize-V2024FieldDetailsDto  -Name userName `
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

