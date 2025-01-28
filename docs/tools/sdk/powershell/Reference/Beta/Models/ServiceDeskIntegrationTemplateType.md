---
id: beta-service-desk-integration-template-type
title: ServiceDeskIntegrationTemplateType
pagination_label: ServiceDeskIntegrationTemplateType
sidebar_label: ServiceDeskIntegrationTemplateType
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ServiceDeskIntegrationTemplateType', 'BetaServiceDeskIntegrationTemplateType'] 
slug: /tools/sdk/powershell/beta/models/service-desk-integration-template-type
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegrationTemplateType', 'BetaServiceDeskIntegrationTemplateType']
---


# ServiceDeskIntegrationTemplateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | This is the name of the type. | [optional] 
**Type** |  **String** | This is the type value for the type. | [required]
**ScriptName** |  **String** | This is the scriptName attribute value for the type. | [required]

## Examples

- Prepare the resource
```powershell
$ServiceDeskIntegrationTemplateType = Initialize-PSSailpoint.BetaServiceDeskIntegrationTemplateType  -Name aName `
 -Type aType `
 -ScriptName aScriptName
```

- Convert the resource to JSON
```powershell
$ServiceDeskIntegrationTemplateType | ConvertTo-JSON
```


[[Back to top]](#) 

