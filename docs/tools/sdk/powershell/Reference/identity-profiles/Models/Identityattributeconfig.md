---
id: identityattributeconfig
title: Identityattributeconfig
pagination_label: Identityattributeconfig
sidebar_label: Identityattributeconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityattributeconfig', 'Identityattributeconfig'] 
slug: /tools/sdk/powershell/identityprofiles/models/identityattributeconfig
tags: ['SDK', 'Software Development Kit', 'Identityattributeconfig', 'Identityattributeconfig']
---


# Identityattributeconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Backend will only promote values if the profile/mapping is enabled. | [optional] [default to $false]
**AttributeTransforms** | [**[]Identityattributetransform**](identityattributetransform) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Identityattributeconfig = Initialize-Identityattributeconfig  -Enabled true `
 -AttributeTransforms null
```

- Convert the resource to JSON
```powershell
$Identityattributeconfig | ConvertTo-JSON
```


[[Back to top]](#) 

