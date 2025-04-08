---
id: beta-tenant-configuration-request
title: TenantConfigurationRequest
pagination_label: TenantConfigurationRequest
sidebar_label: TenantConfigurationRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TenantConfigurationRequest', 'BetaTenantConfigurationRequest'] 
slug: /tools/sdk/python/beta/models/tenant-configuration-request
tags: ['SDK', 'Software Development Kit', 'TenantConfigurationRequest', 'BetaTenantConfigurationRequest']
---

# TenantConfigurationRequest

Tenant-wide Reassignment Configuration settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_details** | [**TenantConfigurationDetails**](tenant-configuration-details) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.tenant_configuration_request import TenantConfigurationRequest

tenant_configuration_request = TenantConfigurationRequest(
config_details=sailpoint.beta.models.tenant_configuration_details.TenantConfigurationDetails(
                    disabled = True, )
)

```
[[Back to top]](#) 

