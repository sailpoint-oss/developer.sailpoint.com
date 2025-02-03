---
id: v2024-managed-cluster-key-pair
title: ManagedClusterKeyPair
pagination_label: ManagedClusterKeyPair
sidebar_label: ManagedClusterKeyPair
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClusterKeyPair', 'V2024ManagedClusterKeyPair'] 
slug: /tools/sdk/powershell/v2024/models/managed-cluster-key-pair
tags: ['SDK', 'Software Development Kit', 'ManagedClusterKeyPair', 'V2024ManagedClusterKeyPair']
---


# ManagedClusterKeyPair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PublicKey** | **String** | ManagedCluster publicKey | [optional] 
**PublicKeyThumbprint** | **String** | ManagedCluster publicKeyThumbprint | [optional] 
**PublicKeyCertificate** | **String** | ManagedCluster publicKeyCertificate | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClusterKeyPair = Initialize-PSSailpoint.V2024ManagedClusterKeyPair  -PublicKey -----BEGIN PUBLIC KEY-----******-----END PUBLIC KEY----- `
 -PublicKeyThumbprint 6CMlaJIV44-xJxcB3CJBjDUUn54 `
 -PublicKeyCertificate -----BEGIN CERTIFICATE-----****-----END CERTIFICATE-----
```

- Convert the resource to JSON
```powershell
$ManagedClusterKeyPair | ConvertTo-JSON
```


[[Back to top]](#) 

