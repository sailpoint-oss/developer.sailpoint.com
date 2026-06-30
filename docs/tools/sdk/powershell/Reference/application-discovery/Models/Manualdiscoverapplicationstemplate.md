---
id: manualdiscoverapplicationstemplate
title: Manualdiscoverapplicationstemplate
pagination_label: Manualdiscoverapplicationstemplate
sidebar_label: Manualdiscoverapplicationstemplate
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Manualdiscoverapplicationstemplate', 'Manualdiscoverapplicationstemplate'] 
slug: /tools/sdk/powershell/applicationdiscovery/models/manualdiscoverapplicationstemplate
tags: ['SDK', 'Software Development Kit', 'Manualdiscoverapplicationstemplate', 'Manualdiscoverapplicationstemplate']
---


# Manualdiscoverapplicationstemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationName** | **String** | Name of the application. | [optional] 
**Description** | **String** | Description of the application. | [optional] 

## Examples

- Prepare the resource
```powershell
$Manualdiscoverapplicationstemplate = Initialize-Manualdiscoverapplicationstemplate  -ApplicationName Example Application `
 -Description Example Description
```

- Convert the resource to JSON
```powershell
$Manualdiscoverapplicationstemplate | ConvertTo-JSON
```


[[Back to top]](#) 

