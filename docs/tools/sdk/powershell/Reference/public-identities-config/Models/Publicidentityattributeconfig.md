---
id: publicidentityattributeconfig
title: Publicidentityattributeconfig
pagination_label: Publicidentityattributeconfig
sidebar_label: Publicidentityattributeconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Publicidentityattributeconfig', 'Publicidentityattributeconfig'] 
slug: /tools/sdk/powershell/publicidentitiesconfig/models/publicidentityattributeconfig
tags: ['SDK', 'Software Development Kit', 'Publicidentityattributeconfig', 'Publicidentityattributeconfig']
---


# Publicidentityattributeconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | The attribute key | [optional] 
**Name** | **String** | The attribute display name | [optional] 

## Examples

- Prepare the resource
```powershell
$Publicidentityattributeconfig = Initialize-Publicidentityattributeconfig  -Key country `
 -Name Country
```

- Convert the resource to JSON
```powershell
$Publicidentityattributeconfig | ConvertTo-JSON
```


[[Back to top]](#) 

