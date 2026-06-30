---
id: get-service-desk-integrations-v1429-response
title: GetServiceDeskIntegrationsV1429Response
pagination_label: GetServiceDeskIntegrationsV1429Response
sidebar_label: GetServiceDeskIntegrationsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetServiceDeskIntegrationsV1429Response', 'GetServiceDeskIntegrationsV1429Response'] 
slug: /tools/sdk/powershell/servicedeskintegration/models/get-service-desk-integrations-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetServiceDeskIntegrationsV1429Response', 'GetServiceDeskIntegrationsV1429Response']
---


# GetServiceDeskIntegrationsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetServiceDeskIntegrationsV1429Response = Initialize-GetServiceDeskIntegrationsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetServiceDeskIntegrationsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

