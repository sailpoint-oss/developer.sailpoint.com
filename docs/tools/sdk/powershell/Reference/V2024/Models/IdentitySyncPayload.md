---
id: v2024-identity-sync-payload
title: IdentitySyncPayload
pagination_label: IdentitySyncPayload
sidebar_label: IdentitySyncPayload
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentitySyncPayload', 'V2024IdentitySyncPayload'] 
slug: /tools/sdk/powershell/v2024/models/identity-sync-payload
tags: ['SDK', 'Software Development Kit', 'IdentitySyncPayload', 'V2024IdentitySyncPayload']
---


# IdentitySyncPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Payload type. | [required]
**DataJson** | **String** | Payload type. | [required]

## Examples

- Prepare the resource
```powershell
$IdentitySyncPayload = Initialize-PSSailpoint.V2024IdentitySyncPayload  -Type SYNCHRONIZE_IDENTITY_ATTRIBUTES `
 -DataJson {&quot;identityId&quot;:&quot;2c918083746f642c01746f990884012a&quot;}
```

- Convert the resource to JSON
```powershell
$IdentitySyncPayload | ConvertTo-JSON
```


[[Back to top]](#) 

