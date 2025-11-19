---
id: v2025-managed-cluster-encryption-config
title: ManagedClusterEncryptionConfig
pagination_label: ManagedClusterEncryptionConfig
sidebar_label: ManagedClusterEncryptionConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManagedClusterEncryptionConfig', 'V2025ManagedClusterEncryptionConfig'] 
slug: /tools/sdk/python/v2025/models/managed-cluster-encryption-config
tags: ['SDK', 'Software Development Kit', 'ManagedClusterEncryptionConfig', 'V2025ManagedClusterEncryptionConfig']
---

# ManagedClusterEncryptionConfig

Defines the encryption settings for a managed cluster, including the format used for storing and processing encrypted data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** |  **Enum** [  'V2',    'V3' ] | Specifies the format used for encrypted data, such as secrets. The format determines how the encrypted data is structured and processed. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.managed_cluster_encryption_config import ManagedClusterEncryptionConfig

managed_cluster_encryption_config = ManagedClusterEncryptionConfig(
format='V3'
)

```
[[Back to top]](#) 

