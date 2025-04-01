---
id: v2025-service-desk-integration-template-type
title: ServiceDeskIntegrationTemplateType
pagination_label: ServiceDeskIntegrationTemplateType
sidebar_label: ServiceDeskIntegrationTemplateType
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ServiceDeskIntegrationTemplateType', 'V2025ServiceDeskIntegrationTemplateType'] 
slug: /tools/sdk/powershell/v2025/models/service-desk-integration-template-type
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegrationTemplateType', 'V2025ServiceDeskIntegrationTemplateType']
---


# ServiceDeskIntegrationTemplateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | This is the name of the type. | [optional] 
**Type** | **String** | This is the type value for the type. | [required]
**ScriptName** | **String** | This is the scriptName attribute value for the type. | [required]

## Examples

- Prepare the resource
```powershell
$ServiceDeskIntegrationTemplateType = Initialize-PSSailpoint.V2025ServiceDeskIntegrationTemplateType  -Name aName `
 -Type aType `
 -ScriptName aScriptName
```

- Convert the resource to JSON
```powershell
$ServiceDeskIntegrationTemplateType | ConvertTo-JSON
```


[[Back to top]](#) 

