# TenantConfigurationResponse

# TenantConfigurationResponse

Tenant-wide Reassignment Configuration settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_details** | [**AuditDetails**](audit-details) |  | [optional] 
**config_details** | [**TenantConfigurationDetails**](tenant-configuration-details) |  | [optional] 
\}

## Example

```python
from sailpoint.work_reassignment.models.tenant_configuration_response import TenantConfigurationResponse

tenant_configuration_response = TenantConfigurationResponse(
audit_details=sailpoint.work_reassignment.models.audit_details.AuditDetails(
                    created = '2022-07-21T11:13:12.345Z', 
                    created_by = sailpoint.work_reassignment.models.identity_2.Identity_2(
                        id = '2c91808380aa05580180aaaaf1940410', 
                        name = 'William Wilson', ), 
                    modified = '2022-07-21T11:13:12.345Z', 
                    modified_by = sailpoint.work_reassignment.models.identity_2.Identity_2(
                        id = '2c91808380aa05580180aaaaf1940410', 
                        name = 'William Wilson', ), ),
config_details=sailpoint.work_reassignment.models.tenant_configuration_details.TenantConfigurationDetails(
                    disabled = True, )
)

```
[[Back to top]](#) 

