---
id: basedocument
title: Basedocument
pagination_label: Basedocument
sidebar_label: Basedocument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Basedocument', 'Basedocument'] 
slug: /tools/sdk/powershell/search/models/basedocument
tags: ['SDK', 'Software Development Kit', 'Basedocument', 'Basedocument']
---


# Basedocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the referenced object. | [required]
**Name** | **String** | The human readable name of the referenced object. | [required]

## Examples

- Prepare the resource
```powershell
$Basedocument = Initialize-Basedocument  -Id 2c91808375d8e80a0175e1f88a575222 `
 -Name john.doe
```

- Convert the resource to JSON
```powershell
$Basedocument | ConvertTo-JSON
```


[[Back to top]](#) 

