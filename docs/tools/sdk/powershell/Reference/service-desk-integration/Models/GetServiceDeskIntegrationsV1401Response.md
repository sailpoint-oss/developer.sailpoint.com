---
id: get-service-desk-integrations-v1401-response
title: GetServiceDeskIntegrationsV1401Response
pagination_label: GetServiceDeskIntegrationsV1401Response
sidebar_label: GetServiceDeskIntegrationsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetServiceDeskIntegrationsV1401Response', 'GetServiceDeskIntegrationsV1401Response'] 
slug: /tools/sdk/powershell/servicedeskintegration/models/get-service-desk-integrations-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetServiceDeskIntegrationsV1401Response', 'GetServiceDeskIntegrationsV1401Response']
---


# GetServiceDeskIntegrationsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetServiceDeskIntegrationsV1401Response = Initialize-GetServiceDeskIntegrationsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetServiceDeskIntegrationsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

