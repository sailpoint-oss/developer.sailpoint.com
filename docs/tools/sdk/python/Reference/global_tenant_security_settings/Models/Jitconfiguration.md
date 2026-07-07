---
id: jitconfiguration
title: Jitconfiguration
pagination_label: Jitconfiguration
sidebar_label: Jitconfiguration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Jitconfiguration', 'Jitconfiguration'] 
slug: /tools/sdk/python/global-tenant-security-settings/models/jitconfiguration
tags: ['SDK', 'Software Development Kit', 'Jitconfiguration', 'Jitconfiguration']
---

# Jitconfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | The indicator for just-in-time provisioning enabled | [optional] [default to False]
**source_id** | **str** | the sourceId that mapped to just-in-time provisioning configuration | [optional] 
**source_attribute_mappings** | **map[string]str** | A mapping of identity profile attribute names to SAML assertion attribute names | [optional] 
}

## Example

```python
from sailpoint.global_tenant_security_settings.models.jitconfiguration import Jitconfiguration

jitconfiguration = Jitconfiguration(
enabled=False,
source_id='2c9180857377ed2901739c12a2da5ac8',
source_attribute_mappings={"firstName":"okta.firstName","lastName":"okta.lastName","email":"okta.email"}
)

```
[[Back to top]](#) 

