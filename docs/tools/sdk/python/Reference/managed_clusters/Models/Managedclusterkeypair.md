---
id: managedclusterkeypair
title: Managedclusterkeypair
pagination_label: Managedclusterkeypair
sidebar_label: Managedclusterkeypair
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Managedclusterkeypair', 'Managedclusterkeypair'] 
slug: /tools/sdk/python/managed-clusters/models/managedclusterkeypair
tags: ['SDK', 'Software Development Kit', 'Managedclusterkeypair', 'Managedclusterkeypair']
---

# Managedclusterkeypair

Managed Cluster key pair for Cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_key** | **str** | ManagedCluster publicKey | [optional] 
**public_key_thumbprint** | **str** | ManagedCluster publicKeyThumbprint | [optional] 
**public_key_certificate** | **str** | ManagedCluster publicKeyCertificate | [optional] 
}

## Example

```python
from sailpoint.managed_clusters.models.managedclusterkeypair import Managedclusterkeypair

managedclusterkeypair = Managedclusterkeypair(
public_key='-----BEGIN PUBLIC KEY-----******-----END PUBLIC KEY-----',
public_key_thumbprint='6CMlaJIV44-xJxcB3CJBjDUUn54',
public_key_certificate='-----BEGIN CERTIFICATE-----****-----END CERTIFICATE-----'
)

```
[[Back to top]](#) 

