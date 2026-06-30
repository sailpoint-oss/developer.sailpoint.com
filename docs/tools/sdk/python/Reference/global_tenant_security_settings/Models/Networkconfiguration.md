---
id: networkconfiguration
title: Networkconfiguration
pagination_label: Networkconfiguration
sidebar_label: Networkconfiguration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Networkconfiguration', 'Networkconfiguration'] 
slug: /tools/sdk/python/global-tenant-security-settings/models/networkconfiguration
tags: ['SDK', 'Software Development Kit', 'Networkconfiguration', 'Networkconfiguration']
---

# Networkconfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | **[]str** | The collection of ip ranges. | [optional] 
**geolocation** | **[]str** | The collection of country codes. | [optional] 
**whitelisted** | **bool** | Denotes whether the provided lists are whitelisted or blacklisted for geo location. | [optional] [default to False]
}

## Example

```python
from sailpoint.global_tenant_security_settings.models.networkconfiguration import Networkconfiguration

networkconfiguration = Networkconfiguration(
range=["1.3.7.2","255.255.255.252/30"],
geolocation=["CA","FR","HT"],
whitelisted=True
)

```
[[Back to top]](#) 

