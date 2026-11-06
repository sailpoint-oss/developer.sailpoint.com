# MCPConnectedAgentBusinessApplicationRefs

# MCPConnectedAgentBusinessApplicationRefs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'BUSINESS_APPLICATION' ] | Reference type. | [optional] 
**id** | **str** | Business Application ID. | [optional] 
**name** | **str** | Business Application name. | [optional] 
**sanctioned_status** | **SanctionedStatus** | Sanctioned status of the linked Business Application. | [optional] 
**correlation_type** |  **Enum** [  'MANUAL',    'AUTOMATIC' ] | Whether the link was assigned manually or correlated automatically. | [optional] 
\}

## Example

```python
from sailpoint.business_applications.models.mcp_connected_agent_business_application_refs import MCPConnectedAgentBusinessApplicationRefs

mcp_connected_agent_business_application_refs = MCPConnectedAgentBusinessApplicationRefs(
type='BUSINESS_APPLICATION',
id='2ee5e239-e68c-4d69-93fb-6c7ce4576190',
name='Cursor',
sanctioned_status='SANCTIONED',
correlation_type='AUTOMATIC'
)

```
[[Back to top]](#) 

