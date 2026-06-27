---
id: transformdefinition
title: Transformdefinition
pagination_label: Transformdefinition
sidebar_label: Transformdefinition
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Transformdefinition', 'Transformdefinition'] 
slug: /tools/sdk/powershell/identityprofiles/models/transformdefinition
tags: ['SDK', 'Software Development Kit', 'Transformdefinition', 'Transformdefinition']
---


# Transformdefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Transform definition type. | [optional] 
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Arbitrary key-value pairs to store any metadata for the object | [optional] 

## Examples

- Prepare the resource
```powershell
$Transformdefinition = Initialize-Transformdefinition  -Type accountAttribute `
 -Attributes {"attributeName":"e-mail","sourceName":"MySource","sourceId":"2c9180877a826e68017a8c0b03da1a53"}
```

- Convert the resource to JSON
```powershell
$Transformdefinition | ConvertTo-JSON
```


[[Back to top]](#) 

