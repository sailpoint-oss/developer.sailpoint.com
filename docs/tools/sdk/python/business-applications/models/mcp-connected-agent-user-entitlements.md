# MCPConnectedAgentUserEntitlements

# MCPConnectedAgentUserEntitlements


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_id** | **str** | Source ID of the entitlement. | [optional] 
**entitlement_id** | **str** | Entitlement ID. | [optional] 
**display_name** | **str** | Entitlement display name. | [optional] 
**source** | [**BaseReferenceDto**](base-reference-dto) | Source of the entitlement. | [optional] 
\}

## Example

```python
from sailpoint.business_applications.models.mcp_connected_agent_user_entitlements import MCPConnectedAgentUserEntitlements

mcp_connected_agent_user_entitlements = MCPConnectedAgentUserEntitlements(
source_id='5898b7c1-620c-49c6-cccc-cbf81eb4bddd',
entitlement_id='6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa',
display_name='Entitlement Name',
source=sailpoint.business_applications.models.base_reference_dto.Base Reference Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

