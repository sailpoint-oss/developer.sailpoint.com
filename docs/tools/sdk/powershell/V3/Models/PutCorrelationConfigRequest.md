---
id: put-correlation-config-request
title: PutCorrelationConfigRequest
pagination_label: PutCorrelationConfigRequest
sidebar_label: PutCorrelationConfigRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PutCorrelationConfigRequest'] 
slug: /tools/sdk/powershell/v3/models/put-correlation-config-request
tags: ['SDK', 'Software Development Kit', 'PutCorrelationConfigRequest']
---


# PutCorrelationConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** |  **System.IO.FileInfo** | connector correlation config xml file | 

## Examples

- Prepare the resource
```powershell
$PutCorrelationConfigRequest = Initialize-PSSailpointPutCorrelationConfigRequest  -File null
```

- Convert the resource to JSON
```powershell
$PutCorrelationConfigRequest | ConvertTo-JSON
```


[[Back to top]](#) 

