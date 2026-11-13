# MCPConnectedAgentOwners

# MCPConnectedAgentOwners

Owners of the AI agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_identity** | [**BaseReferenceDto**](base-reference-dto) | Primary owner. | [optional] 
**secondary_identities** | [**[]BaseReferenceDto**](base-reference-dto) | Secondary owners. | [optional] 
\}

## Example

```python
from sailpoint.business_applications.models.mcp_connected_agent_owners import MCPConnectedAgentOwners

mcp_connected_agent_owners = MCPConnectedAgentOwners(
primary_identity=sailpoint.business_applications.models.base_reference_dto.Base Reference Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
secondary_identities=[
                    sailpoint.business_applications.models.base_reference_dto.Base Reference Dto(
                        type = 'IDENTITY', 
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'William Wilson', )
                    ]
)

```
[[Back to top]](#) 

