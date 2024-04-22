---
id: identity-sync-payload
title: IdentitySyncPayload
pagination_label: IdentitySyncPayload
sidebar_label: IdentitySyncPayload
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentitySyncPayload'] 
slug: /tools/sdk/powershell/beta/models/identity-sync-payload
tags: ['SDK', 'Software Development Kit', 'IdentitySyncPayload']
---


# IdentitySyncPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **String** | Payload type. | 
**DataJson** |  **String** | Payload type. | 

## Examples

- Prepare the resource
```powershell
$IdentitySyncPayload = Initialize-BetaIdentitySyncPayload  -Type SYNCHRONIZE_IDENTITY_ATTRIBUTES `
 -DataJson {"identityId":"2c918083746f642c01746f990884012a"}
```

- Convert the resource to JSON
```powershell
$IdentitySyncPayload | ConvertTo-JSON
```


[[Back to top]](#) 

