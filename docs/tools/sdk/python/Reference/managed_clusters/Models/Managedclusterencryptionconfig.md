---
id: managedclusterencryptionconfig
title: Managedclusterencryptionconfig
pagination_label: Managedclusterencryptionconfig
sidebar_label: Managedclusterencryptionconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Managedclusterencryptionconfig', 'Managedclusterencryptionconfig'] 
slug: /tools/sdk/python/managed-clusters/models/managedclusterencryptionconfig
tags: ['SDK', 'Software Development Kit', 'Managedclusterencryptionconfig', 'Managedclusterencryptionconfig']
---

# Managedclusterencryptionconfig

Defines the encryption settings for a managed cluster, including the format used for storing and processing encrypted data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** |  **Enum** [  'V2',    'V3' ] | Specifies the format used for encrypted data, such as secrets. The format determines how the encrypted data is structured and processed. | [optional] 
}

## Example

```python
from sailpoint.managed_clusters.models.managedclusterencryptionconfig import Managedclusterencryptionconfig

managedclusterencryptionconfig = Managedclusterencryptionconfig(
format='V3'
)

```
[[Back to top]](#) 

