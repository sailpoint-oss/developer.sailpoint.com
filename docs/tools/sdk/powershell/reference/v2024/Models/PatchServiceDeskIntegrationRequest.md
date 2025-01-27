---
id: patch-service-desk-integration-request
title: PatchServiceDeskIntegrationRequest
pagination_label: PatchServiceDeskIntegrationRequest
sidebar_label: PatchServiceDeskIntegrationRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PatchServiceDeskIntegrationRequest'] 
slug: /tools/sdk/powershell/v2024/models/patch-service-desk-integration-request
tags: ['SDK', 'Software Development Kit', 'PatchServiceDeskIntegrationRequest']
---


# PatchServiceDeskIntegrationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operations** |  Pointer to [**[]JsonPatchOperation**](json-patch-operation) | Operations to be applied | [optional] 

## Examples

- Prepare the resource
```powershell
$PatchServiceDeskIntegrationRequest = Initialize-PSSailpoint.V2024PatchServiceDeskIntegrationRequest  -Operations null
```

- Convert the resource to JSON
```powershell
$PatchServiceDeskIntegrationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

