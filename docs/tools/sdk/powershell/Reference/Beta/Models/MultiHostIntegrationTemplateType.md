---
id: beta-multi-host-integration-template-type
title: MultiHostIntegrationTemplateType
pagination_label: MultiHostIntegrationTemplateType
sidebar_label: MultiHostIntegrationTemplateType
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrationTemplateType', 'BetaMultiHostIntegrationTemplateType'] 
slug: /tools/sdk/powershell/beta/models/multi-host-integration-template-type
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationTemplateType', 'BetaMultiHostIntegrationTemplateType']
---


# MultiHostIntegrationTemplateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | This is the name of the type. | [optional] 
**Type** | **String** | This is the type value for the type. | [required]
**ScriptName** | **String** | This is the scriptName attribute value for the type. | [required]

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationTemplateType = Initialize-BetaMultiHostIntegrationTemplateType  -Name aName `
 -Type aType `
 -ScriptName aScriptName
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationTemplateType | ConvertTo-JSON
```


[[Back to top]](#) 

