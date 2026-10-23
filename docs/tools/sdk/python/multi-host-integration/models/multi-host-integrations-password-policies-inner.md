# MultiHostIntegrationsPasswordPoliciesInner

# MultiHostIntegrationsPasswordPoliciesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'PASSWORD_POLICY' ] | Type of object being referenced. | [optional] 
**id** | **str** | Policy ID. | [optional] 
**name** | **str** | Policy's human-readable display name. | [optional] 
\}

## Example

```python
from sailpoint.multi_host_integration.models.multi_host_integrations_password_policies_inner import MultiHostIntegrationsPasswordPoliciesInner

multi_host_integrations_password_policies_inner = MultiHostIntegrationsPasswordPoliciesInner(
type='PASSWORD_POLICY',
id='2c91808568c529c60168cca6f90c1777',
name='My Password Policy'
)

```
[[Back to top]](#) 

