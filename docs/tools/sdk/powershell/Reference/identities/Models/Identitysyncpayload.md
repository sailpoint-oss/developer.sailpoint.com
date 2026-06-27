---
id: identitysyncpayload
title: Identitysyncpayload
pagination_label: Identitysyncpayload
sidebar_label: Identitysyncpayload
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identitysyncpayload', 'Identitysyncpayload'] 
slug: /tools/sdk/powershell/identities/models/identitysyncpayload
tags: ['SDK', 'Software Development Kit', 'Identitysyncpayload', 'Identitysyncpayload']
---


# Identitysyncpayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Payload type. | [required]
**DataJson** | **String** | Payload type. | [required]

## Examples

- Prepare the resource
```powershell
$Identitysyncpayload = Initialize-Identitysyncpayload  -Type SYNCHRONIZE_IDENTITY_ATTRIBUTES `
 -DataJson {"identityId":"2c918083746f642c01746f990884012a"}
```

- Convert the resource to JSON
```powershell
$Identitysyncpayload | ConvertTo-JSON
```


[[Back to top]](#) 

