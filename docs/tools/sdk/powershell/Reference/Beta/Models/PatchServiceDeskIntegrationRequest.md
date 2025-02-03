---
id: beta-patch-service-desk-integration-request
title: PatchServiceDeskIntegrationRequest
pagination_label: PatchServiceDeskIntegrationRequest
sidebar_label: PatchServiceDeskIntegrationRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PatchServiceDeskIntegrationRequest', 'BetaPatchServiceDeskIntegrationRequest'] 
slug: /tools/sdk/powershell/beta/models/patch-service-desk-integration-request
tags: ['SDK', 'Software Development Kit', 'PatchServiceDeskIntegrationRequest', 'BetaPatchServiceDeskIntegrationRequest']
---


# PatchServiceDeskIntegrationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operations** | [**[]JsonPatchOperation**](json-patch-operation) | Operations to be applied | [optional] 

## Examples

- Prepare the resource
```powershell
$PatchServiceDeskIntegrationRequest = Initialize-PSSailpoint.BetaPatchServiceDeskIntegrationRequest  -Operations null
```

- Convert the resource to JSON
```powershell
$PatchServiceDeskIntegrationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

