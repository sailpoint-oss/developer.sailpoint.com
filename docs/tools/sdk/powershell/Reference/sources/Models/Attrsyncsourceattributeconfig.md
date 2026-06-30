---
id: attrsyncsourceattributeconfig
title: Attrsyncsourceattributeconfig
pagination_label: Attrsyncsourceattributeconfig
sidebar_label: Attrsyncsourceattributeconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Attrsyncsourceattributeconfig', 'Attrsyncsourceattributeconfig'] 
slug: /tools/sdk/powershell/sources/models/attrsyncsourceattributeconfig
tags: ['SDK', 'Software Development Kit', 'Attrsyncsourceattributeconfig', 'Attrsyncsourceattributeconfig']
---


# Attrsyncsourceattributeconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the identity attribute | [required]
**DisplayName** | **String** | Display name of the identity attribute | [required]
**Enabled** | **Boolean** | Determines whether or not the attribute is enabled for synchronization | [required]
**Target** | **String** | Name of the source account attribute to which the identity attribute value will be synchronized if enabled | [required]

## Examples

- Prepare the resource
```powershell
$Attrsyncsourceattributeconfig = Initialize-Attrsyncsourceattributeconfig  -Name email `
 -DisplayName Email `
 -Enabled true `
 -Target mail
```

- Convert the resource to JSON
```powershell
$Attrsyncsourceattributeconfig | ConvertTo-JSON
```


[[Back to top]](#) 

