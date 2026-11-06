# TenantConfigurationRequest

# TenantConfigurationRequest

Tenant-wide Reassignment Configuration settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_details** | [**TenantConfigurationDetails**](tenant-configuration-details) |  | [optional] 
\}

## Example

```python
from sailpoint.work_reassignment.models.tenant_configuration_request import TenantConfigurationRequest

tenant_configuration_request = TenantConfigurationRequest(
config_details=sailpoint.work_reassignment.models.tenant_configuration_details.TenantConfigurationDetails(
                    disabled = True, )
)

```
[[Back to top]](#) 

