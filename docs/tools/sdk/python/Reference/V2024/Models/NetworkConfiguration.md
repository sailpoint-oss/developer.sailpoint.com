---
id: v2024-network-configuration
title: NetworkConfiguration
pagination_label: NetworkConfiguration
sidebar_label: NetworkConfiguration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NetworkConfiguration', 'V2024NetworkConfiguration'] 
slug: /tools/sdk/python/v2024/models/network-configuration
tags: ['SDK', 'Software Development Kit', 'NetworkConfiguration', 'V2024NetworkConfiguration']
---

# NetworkConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | **[]str** | The collection of ip ranges. | [optional] 
**geolocation** | **[]str** | The collection of country codes. | [optional] 
**whitelisted** | **bool** | Denotes whether the provided lists are whitelisted or blacklisted for geo location. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2024.models.network_configuration import NetworkConfiguration

network_configuration = NetworkConfiguration(
range=[1.3.7.2, 255.255.255.252/30],
geolocation=[CA, FR, HT],
whitelisted=True
)

```
[[Back to top]](#) 

