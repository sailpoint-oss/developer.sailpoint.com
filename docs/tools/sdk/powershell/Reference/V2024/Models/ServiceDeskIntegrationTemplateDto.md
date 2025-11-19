---
id: v2024-service-desk-integration-template-dto
title: ServiceDeskIntegrationTemplateDto
pagination_label: ServiceDeskIntegrationTemplateDto
sidebar_label: ServiceDeskIntegrationTemplateDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ServiceDeskIntegrationTemplateDto', 'V2024ServiceDeskIntegrationTemplateDto'] 
slug: /tools/sdk/powershell/v2024/models/service-desk-integration-template-dto
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegrationTemplateDto', 'V2024ServiceDeskIntegrationTemplateDto']
---


# ServiceDeskIntegrationTemplateDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Type** | **String** | The 'type' property specifies the type of the Service Desk integration template. | [required][default to "Web Service SDIM"]
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | The 'attributes' property value is a map of attributes available for integrations using this Service Desk integration template. | [required]
**ProvisioningConfig** | [**ProvisioningConfig**](provisioning-config) |  | [required]

## Examples

- Prepare the resource
```powershell
$ServiceDeskIntegrationTemplateDto = Initialize-V2024ServiceDeskIntegrationTemplateDto  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -Type Web Service SDIM `
 -Attributes {property=value, key=value} `
 -ProvisioningConfig null
```

- Convert the resource to JSON
```powershell
$ServiceDeskIntegrationTemplateDto | ConvertTo-JSON
```


[[Back to top]](#) 

