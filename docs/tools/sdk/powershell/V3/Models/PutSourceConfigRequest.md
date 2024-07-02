---
id: put-source-config-request
title: PutSourceConfigRequest
pagination_label: PutSourceConfigRequest
sidebar_label: PutSourceConfigRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PutSourceConfigRequest'] 
slug: /tools/sdk/powershell/v3/models/put-source-config-request
tags: ['SDK', 'Software Development Kit', 'PutSourceConfigRequest']
---


# PutSourceConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** |  **System.IO.FileInfo** | connector source config xml file | 

## Examples

- Prepare the resource
```powershell
$PutSourceConfigRequest = Initialize-PutSourceConfigRequest  -File null
```

- Convert the resource to JSON
```powershell
$PutSourceConfigRequest | ConvertTo-JSON
```


[[Back to top]](#) 

