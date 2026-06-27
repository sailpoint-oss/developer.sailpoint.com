---
id: listformdefinitionsbytenantresponse
title: Listformdefinitionsbytenantresponse
pagination_label: Listformdefinitionsbytenantresponse
sidebar_label: Listformdefinitionsbytenantresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Listformdefinitionsbytenantresponse', 'Listformdefinitionsbytenantresponse'] 
slug: /tools/sdk/powershell/customforms/models/listformdefinitionsbytenantresponse
tags: ['SDK', 'Software Development Kit', 'Listformdefinitionsbytenantresponse', 'Listformdefinitionsbytenantresponse']
---


# Listformdefinitionsbytenantresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **Int64** | Count number of results. | [optional] 
**Results** | [**[]Formdefinitionresponse**](formdefinitionresponse) | List of FormDefinitionResponse items. | [optional] 

## Examples

- Prepare the resource
```powershell
$Listformdefinitionsbytenantresponse = Initialize-Listformdefinitionsbytenantresponse  -Count 1 `
 -Results null
```

- Convert the resource to JSON
```powershell
$Listformdefinitionsbytenantresponse | ConvertTo-JSON
```


[[Back to top]](#) 

