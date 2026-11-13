# Capability

# Capability

A capability, such as an MCP server or tool, discovered from a connected source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**description** | **str** | Description of the capability. | [optional] 
**type** |  **Enum** [  'MCP',    'TOOL',    'SKILL',    'PLUGIN',    'PROCESS',    'UNDEFINED' ] | The capability type. UNDEFINED is returned when the source does not report a known type. | [optional] 
**status** | **str** | The capability status reported by the source. | [optional] 
**native_identity** | **str** | The capability's unique identifier on the source. | [optional] 
**environment** | **str** | The environment the capability belongs to. | [optional] 
**source** | [**CapabilityAllOfSource**](capability-all-of-source) |  | [optional] 
**resource** | [**CapabilityResource**](capability-resource) |  | [optional] 
**dataset_id** | **str** | The ID of the source dataset the capability was retrieved from. | [optional] 
**owners** | [**CapabilityOwners**](capability-owners) |  | [optional] 
**attributes** | **map[string]object** | A map of curated capability attributes. | [optional] 
**connector_attributes** | **map[string]object** | A map of attributes sourced from the connector during aggregation. | [optional] 
**manually_edited** | **bool** | Indicates if the capability has been manually edited. | [optional] [default to False]
\}

## Example

```python
from sailpoint.capabilities.models.capability import Capability

capability = Capability(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
description='MCP server that exposes the ticketing tools',
type='MCP',
status='Active',
native_identity='mcp-ticketing-01',
environment='production',
source=,
resource=sailpoint.capabilities.models.capability_resource.Capability Resource(
                    id = '8886e5e3-63d0-462f-a195-d98da885b8dc', 
                    type = 'mcp-server', 
                    name = 'ticketing-mcp', 
                    features = ["PROVISIONING"], ),
dataset_id='8886e5e3-63d0-462f-a195-d98da885b8dc',
owners=sailpoint.capabilities.models.capability_owners.Capability Owners(
                    primary = null, 
                    secondary = [{"id":"2c9180858082150f0180893dbaf44202","name":"Jane Doe","type":"IDENTITY"}], ),
attributes={"status":"Active"},
connector_attributes={"endpoint":"https://mcp.example.com/ticketing"},
manually_edited=True
)

```
[[Back to top]](#) 

