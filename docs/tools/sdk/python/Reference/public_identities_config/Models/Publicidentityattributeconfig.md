---
id: publicidentityattributeconfig
title: Publicidentityattributeconfig
pagination_label: Publicidentityattributeconfig
sidebar_label: Publicidentityattributeconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Publicidentityattributeconfig', 'Publicidentityattributeconfig'] 
slug: /tools/sdk/python/public-identities-config/models/publicidentityattributeconfig
tags: ['SDK', 'Software Development Kit', 'Publicidentityattributeconfig', 'Publicidentityattributeconfig']
---

# Publicidentityattributeconfig

Used to map an attribute key for an Identity to its display name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The attribute key | [optional] 
**name** | **str** | The attribute display name | [optional] 
}

## Example

```python
from sailpoint.public_identities_config.models.publicidentityattributeconfig import Publicidentityattributeconfig

publicidentityattributeconfig = Publicidentityattributeconfig(
key='country',
name='Country'
)

```
[[Back to top]](#) 

