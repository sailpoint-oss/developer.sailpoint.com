---
id: formdefinitiondynamicschemaresponse
title: Formdefinitiondynamicschemaresponse
pagination_label: Formdefinitiondynamicschemaresponse
sidebar_label: Formdefinitiondynamicschemaresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Formdefinitiondynamicschemaresponse', 'Formdefinitiondynamicschemaresponse'] 
slug: /tools/sdk/powershell/customforms/models/formdefinitiondynamicschemaresponse
tags: ['SDK', 'Software Development Kit', 'Formdefinitiondynamicschemaresponse', 'Formdefinitiondynamicschemaresponse']
---


# Formdefinitiondynamicschemaresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OutputSchema** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | OutputSchema holds a JSON schema generated dynamically | [optional] 

## Examples

- Prepare the resource
```powershell
$Formdefinitiondynamicschemaresponse = Initialize-Formdefinitiondynamicschemaresponse  -OutputSchema {"outputSchema":{"$schema":"https://json-schema.org/draft/2020-12/schema","additionalProperties":false,"properties":{"firstName":{"title":"First Name","type":"string"},"fullName":{"title":"Full Name","type":"string"},"lastName":{"title":"Last Name","type":"string"},"startDate":{"format":"date-time","title":"Start Date","type":"string"}},"type":"object"}}
```

- Convert the resource to JSON
```powershell
$Formdefinitiondynamicschemaresponse | ConvertTo-JSON
```


[[Back to top]](#) 

