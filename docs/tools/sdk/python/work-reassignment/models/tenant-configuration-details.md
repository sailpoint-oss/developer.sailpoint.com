# TenantConfigurationDetails

# TenantConfigurationDetails

Details of any tenant-wide Reassignment Configurations (eg. enabled/disabled)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | Flag to determine if Reassignment Configuration is enabled or disabled for a tenant.  When this flag is set to true, Reassignment Configuration is disabled. | [optional] [default to False]
\}

## Example

```python
from sailpoint.work_reassignment.models.tenant_configuration_details import TenantConfigurationDetails

tenant_configuration_details = TenantConfigurationDetails(
disabled=True
)

```
[[Back to top]](#) 

