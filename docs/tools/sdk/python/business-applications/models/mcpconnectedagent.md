# Mcpconnectedagent

# Mcpconnectedagent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**native_identity** | **str** | Native identity of the AI agent, as aggregated from the source. | [optional] 
**description** | **str** | AI agent description. | [optional] 
**attributes** | **map[string]object** | Map of custom machine identity attributes. | [optional] 
**subtype** | **str** | Machine identity subtype. | [optional] 
**owners** | [**MCPConnectedAgentOwners**](mcp-connected-agent-owners) |  | [optional] 
**source_id** | **str** | ID of the source the AI agent was aggregated from. | [optional] 
**uuid** | **str** | UUID of the AI agent, as aggregated from the source. | [optional] 
**dataset_id** | **str** | Dataset ID of the source the AI agent was aggregated from. | [optional] 
**source** | [**MCPConnectedAgentSource**](mcp-connected-agent-source) |  | [optional] 
**manually_edited** | **bool** | Indicates whether the AI agent has been manually edited. | [optional] [default to False]
**manually_created** | **bool** | Indicates whether the AI agent was manually created. | [optional] [default to False]
**exists_on_source** |  **Enum** [  'TRUE',    'FALSE',    'NOT_APPLICABLE' ] | Whether the AI agent still exists on its source. | [optional] 
**user_entitlements** | [**[]MCPConnectedAgentUserEntitlements**](mcp-connected-agent-user-entitlements) | User entitlements associated with the AI agent. | [optional] 
**business_application_refs** | [**[]MCPConnectedAgentBusinessApplicationRefs**](mcp-connected-agent-business-application-refs) | Business Applications the AI agent is linked to. Omitted when Business Application context is not available for the tenant. | [optional] 
**effective_sanctioned_status** | **SanctionedStatus** | Sanctioned status the AI agent inherits from its linked Business Applications. Omitted when Business Application context is not available for the tenant. | [optional] 
\}

## Example

```python
from sailpoint.business_applications.models.mcpconnectedagent import Mcpconnectedagent

mcpconnectedagent = Mcpconnectedagent(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
native_identity='abc:123:dddd',
description='Code review assistant.',
attributes={"Region":"EU"},
subtype='AI Agent',
owners=sailpoint.business_applications.models.mcp_connected_agent_owners.MCP_Connected_Agent_owners(
                    primary_identity = null, 
                    secondary_identities = [
                        sailpoint.business_applications.models.base_reference_dto.Base Reference Dto(
                            type = 'IDENTITY', 
                            id = '2c91808568c529c60168cca6f90c1313', 
                            name = 'William Wilson', )
                        ], ),
source_id='6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa',
uuid='f5dd23fe-3414-42b7-bb1c-869400ad7a10',
dataset_id='8886e5e3-63d0-462f-a195-d98da885b8dc',
source=,
manually_edited=False,
manually_created=False,
exists_on_source='TRUE',
user_entitlements=[
                    sailpoint.business_applications.models.mcp_connected_agent_user_entitlements.MCP_Connected_Agent_userEntitlements(
                        source_id = '5898b7c1-620c-49c6-cccc-cbf81eb4bddd', 
                        entitlement_id = '6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa', 
                        display_name = 'Entitlement Name', 
                        source = null, )
                    ],
business_application_refs=[
                    sailpoint.business_applications.models.mcp_connected_agent_business_application_refs.MCP_Connected_Agent_businessApplicationRefs(
                        type = 'BUSINESS_APPLICATION', 
                        id = '2ee5e239-e68c-4d69-93fb-6c7ce4576190', 
                        name = 'Cursor', 
                        sanctioned_status = null, 
                        correlation_type = 'AUTOMATIC', )
                    ],
effective_sanctioned_status='SANCTIONED'
)

```
[[Back to top]](#) 

