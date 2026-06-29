---
id: set-icon-v1-request
title: SetIconV1Request
pagination_label: SetIconV1Request
sidebar_label: SetIconV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SetIconV1Request', 'SetIconV1Request'] 
slug: /tools/sdk/powershell/icons/models/set-icon-v1-request
tags: ['SDK', 'Software Development Kit', 'SetIconV1Request', 'SetIconV1Request']
---


# SetIconV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Image** | **System.IO.FileInfo** | file with icon. Allowed mime-types ['image/png', 'image/jpeg'] | [required]

## Examples

- Prepare the resource
```powershell
$SetIconV1Request = Initialize-SetIconV1Request  -Image [B@17ca8b92
```

- Convert the resource to JSON
```powershell
$SetIconV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

