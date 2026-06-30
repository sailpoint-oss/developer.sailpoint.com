---
id: attrsyncsourceconfig
title: Attrsyncsourceconfig
pagination_label: Attrsyncsourceconfig
sidebar_label: Attrsyncsourceconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Attrsyncsourceconfig', 'Attrsyncsourceconfig'] 
slug: /tools/sdk/powershell/sources/models/attrsyncsourceconfig
tags: ['SDK', 'Software Development Kit', 'Attrsyncsourceconfig', 'Attrsyncsourceconfig']
---


# Attrsyncsourceconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**Attrsyncsource**](attrsyncsource) |  | [required]
**Attributes** | [**[]Attrsyncsourceattributeconfig**](attrsyncsourceattributeconfig) | Attribute synchronization configuration for specific identity attributes in the context of a source | [required]

## Examples

- Prepare the resource
```powershell
$Attrsyncsourceconfig = Initialize-Attrsyncsourceconfig  -Source null `
 -Attributes [{"name":"email","displayName":"Email","enabled":true,"target":"mail"},{"name":"firstname","displayName":"First Name","enabled":false,"target":"givenName"}]
```

- Convert the resource to JSON
```powershell
$Attrsyncsourceconfig | ConvertTo-JSON
```


[[Back to top]](#) 

