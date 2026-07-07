---
id: create-source-subtype-v1-request
title: CreateSourceSubtypeV1Request
pagination_label: CreateSourceSubtypeV1Request
sidebar_label: CreateSourceSubtypeV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateSourceSubtypeV1Request', 'CreateSourceSubtypeV1Request'] 
slug: /tools/sdk/powershell/machineaccountsubtypes/models/create-source-subtype-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateSourceSubtypeV1Request', 'CreateSourceSubtypeV1Request']
---


# CreateSourceSubtypeV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **String** | ID of the source where subtype is created. | [required]
**TechnicalName** | **String** | Technical name of the subtype. | [required]
**DisplayName** | **String** | Display name of the subtype. | [required]
**Description** | **String** | Description of the subtype. | [required]
**Type** | **String** | Type of the subtype. | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateSourceSubtypeV1Request = Initialize-CreateSourceSubtypeV1Request  -SourceId 6d0458373bec4b4b80460992b76016da `
 -TechnicalName foo `
 -DisplayName Mr Foo `
 -Description fighters `
 -Type MACHINE
```

- Convert the resource to JSON
```powershell
$CreateSourceSubtypeV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

