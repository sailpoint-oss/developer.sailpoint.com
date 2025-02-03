---
id: beta-form-definition-dynamic-schema-response
title: FormDefinitionDynamicSchemaResponse
pagination_label: FormDefinitionDynamicSchemaResponse
sidebar_label: FormDefinitionDynamicSchemaResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormDefinitionDynamicSchemaResponse', 'BetaFormDefinitionDynamicSchemaResponse'] 
slug: /tools/sdk/powershell/beta/models/form-definition-dynamic-schema-response
tags: ['SDK', 'Software Development Kit', 'FormDefinitionDynamicSchemaResponse', 'BetaFormDefinitionDynamicSchemaResponse']
---


# FormDefinitionDynamicSchemaResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OutputSchema** | [**map[string]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | OutputSchema holds a JSON schema generated dynamically | [optional] 

## Examples

- Prepare the resource
```powershell
$FormDefinitionDynamicSchemaResponse = Initialize-PSSailpoint.BetaFormDefinitionDynamicSchemaResponse  -OutputSchema {outputSchema&#x3D;{$schema&#x3D;https://json-schema.org/draft/2020-12/schema, additionalProperties&#x3D;false, properties&#x3D;{firstName&#x3D;{title&#x3D;First Name, type&#x3D;string}, fullName&#x3D;{title&#x3D;Full Name, type&#x3D;string}, lastName&#x3D;{title&#x3D;Last Name, type&#x3D;string}, startDate&#x3D;{format&#x3D;date-time, title&#x3D;Start Date, type&#x3D;string}}, type&#x3D;object}}
```

- Convert the resource to JSON
```powershell
$FormDefinitionDynamicSchemaResponse | ConvertTo-JSON
```


[[Back to top]](#) 

