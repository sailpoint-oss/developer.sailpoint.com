---
id: entitlement-access-model-metadata
title: EntitlementAccessModelMetadata
pagination_label: EntitlementAccessModelMetadata
sidebar_label: EntitlementAccessModelMetadata
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementAccessModelMetadata', 'EntitlementAccessModelMetadata'] 
slug: /tools/sdk/powershell/roles/models/entitlement-access-model-metadata
tags: ['SDK', 'Software Development Kit', 'EntitlementAccessModelMetadata', 'EntitlementAccessModelMetadata']
---


# EntitlementAccessModelMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | [**[]Accessmodelmetadata**](accessmodelmetadata) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementAccessModelMetadata = Initialize-EntitlementAccessModelMetadata  -Attributes null
```

- Convert the resource to JSON
```powershell
$EntitlementAccessModelMetadata | ConvertTo-JSON
```


[[Back to top]](#) 

