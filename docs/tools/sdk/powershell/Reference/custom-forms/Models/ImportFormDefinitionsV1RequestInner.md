---
id: import-form-definitions-v1-request-inner
title: ImportFormDefinitionsV1RequestInner
pagination_label: ImportFormDefinitionsV1RequestInner
sidebar_label: ImportFormDefinitionsV1RequestInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportFormDefinitionsV1RequestInner', 'ImportFormDefinitionsV1RequestInner'] 
slug: /tools/sdk/powershell/customforms/models/import-form-definitions-v1-request-inner
tags: ['SDK', 'Software Development Kit', 'ImportFormDefinitionsV1RequestInner', 'ImportFormDefinitionsV1RequestInner']
---


# ImportFormDefinitionsV1RequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Object** | [**Formdefinitionresponse**](formdefinitionresponse) |  | [optional] 
**Self** | **String** |  | [optional] 
**Version** | **Int32** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportFormDefinitionsV1RequestInner = Initialize-ImportFormDefinitionsV1RequestInner  -Object null `
 -Self null `
 -Version null
```

- Convert the resource to JSON
```powershell
$ImportFormDefinitionsV1RequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

