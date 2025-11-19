---
id: v2024-tenant-configuration-response
title: TenantConfigurationResponse
pagination_label: TenantConfigurationResponse
sidebar_label: TenantConfigurationResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TenantConfigurationResponse', 'V2024TenantConfigurationResponse'] 
slug: /tools/sdk/python/v2024/models/tenant-configuration-response
tags: ['SDK', 'Software Development Kit', 'TenantConfigurationResponse', 'V2024TenantConfigurationResponse']
---

# TenantConfigurationResponse

Tenant-wide Reassignment Configuration settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_details** | [**AuditDetails**](audit-details) |  | [optional] 
**config_details** | [**TenantConfigurationDetails**](tenant-configuration-details) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.tenant_configuration_response import TenantConfigurationResponse

tenant_configuration_response = TenantConfigurationResponse(
audit_details=sailpoint.v2024.models.audit_details.AuditDetails(
                    created = '2022-07-21T11:13:12.345Z', 
                    created_by = sailpoint.v2024.models.identity_1.Identity_1(
                        id = '2c91808380aa05580180aaaaf1940410', 
                        name = 'William Wilson', ), 
                    modified = '2022-07-21T11:13:12.345Z', 
                    modified_by = sailpoint.v2024.models.identity_1.Identity_1(
                        id = '2c91808380aa05580180aaaaf1940410', 
                        name = 'William Wilson', ), ),
config_details=sailpoint.v2024.models.tenant_configuration_details.TenantConfigurationDetails(
                    disabled = True, )
)

```
[[Back to top]](#) 

