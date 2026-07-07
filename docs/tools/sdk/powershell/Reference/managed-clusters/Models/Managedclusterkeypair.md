---
id: managedclusterkeypair
title: Managedclusterkeypair
pagination_label: Managedclusterkeypair
sidebar_label: Managedclusterkeypair
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Managedclusterkeypair', 'Managedclusterkeypair'] 
slug: /tools/sdk/powershell/managedclusters/models/managedclusterkeypair
tags: ['SDK', 'Software Development Kit', 'Managedclusterkeypair', 'Managedclusterkeypair']
---


# Managedclusterkeypair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PublicKey** | **String** | ManagedCluster publicKey | [optional] 
**PublicKeyThumbprint** | **String** | ManagedCluster publicKeyThumbprint | [optional] 
**PublicKeyCertificate** | **String** | ManagedCluster publicKeyCertificate | [optional] 

## Examples

- Prepare the resource
```powershell
$Managedclusterkeypair = Initialize-Managedclusterkeypair  -PublicKey -----BEGIN PUBLIC KEY-----******-----END PUBLIC KEY----- `
 -PublicKeyThumbprint 6CMlaJIV44-xJxcB3CJBjDUUn54 `
 -PublicKeyCertificate -----BEGIN CERTIFICATE-----****-----END CERTIFICATE-----
```

- Convert the resource to JSON
```powershell
$Managedclusterkeypair | ConvertTo-JSON
```


[[Back to top]](#) 

