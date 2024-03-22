---
id: service-desk-integration-template-dto
title: ServiceDeskIntegrationTemplateDto
pagination_label: ServiceDeskIntegrationTemplateDto
sidebar_label: ServiceDeskIntegrationTemplateDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ServiceDeskIntegrationTemplateDto'] 
slug: /tools/sdk/powershell/beta/models/service-desk-integration-template-dto
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegrationTemplateDto']
---


# ServiceDeskIntegrationTemplateDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** |  **String** | Name of the Object | 
**Created** |  Pointer to **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** |  Pointer to **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Type** |  **String** | The &#39;type&#39; property specifies the type of the Service Desk integration template. | [default to "Web Service SDIM"]
**Attributes** |  [**map[string]AnyType**](any-type) | The &#39;attributes&#39; property value is a map of attributes available for integrations using this Service Desk integration template. | 
**ProvisioningConfig** |  [**ProvisioningConfig**](provisioning-config) |  | 

## Examples

- Prepare the resource
```powershell
$ServiceDeskIntegrationTemplateDto = Initialize-PSSailpointBetaServiceDeskIntegrationTemplateDto  -Id id12345 `
 -Name aName `
 -Created 2023-01-03T21:16:22.432Z `
 -Modified 2023-01-03T21:16:22.432Z `
 -Type Web Service SDIM `
 -Attributes null `
 -ProvisioningConfig null
```

- Convert the resource to JSON
```powershell
$ServiceDeskIntegrationTemplateDto | ConvertTo-JSON
```


[[Back to top]](#) 

