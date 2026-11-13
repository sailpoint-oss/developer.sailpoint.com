# Machineidentitycapability

# Machineidentitycapability


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**description** | **str** | Description of the capability. | [optional] 
**type** |  **Enum** [  'MCP',    'TOOL',    'SKILL',    'PLUGIN',    'PROCESS',    'UNDEFINED' ] | Type of the capability. `UNDEFINED` is returned when the type is missing or not recognized. | [optional] 
**status** | **str** | Status of the capability, as reported by the source. `null` when the source does not report one. | [optional] 
**native_identity** | **str** | Unique identifier of the capability on the source. | [optional] 
**environment** | **str** | Environment the capability runs in. | [optional] 
**source** | [**MachineIdentityCapabilitySource**](machine-identity-capability-source) |  | [optional] 
**resource** | [**ResourceV2**](resource-v2) |  | [optional] 
**dataset_id** | **str** | ID of the source dataset the capability was aggregated from. | [optional] 
**owners** | [**MachineIdentityOwnersV2**](machine-identity-owners-v2) |  | [optional] 
**attributes** | **map[string]object** | A map of curated capability attributes. | [optional] 
**connector_attributes** | **map[string]object** | A map of attributes sourced from the connector during aggregation. | [optional] 
**manually_edited** | **bool** | Indicates whether the capability has been manually edited. | [optional] [default to False]
\}

## Example

```python
from sailpoint.machine_identities.models.machineidentitycapability import Machineidentitycapability

machineidentitycapability = Machineidentitycapability(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
description='Reads customer records from the CRM',
type='TOOL',
status='active',
native_identity='crm-reader-tool',
environment='production',
source=,
resource=sailpoint.machine_identities.models.resource_v2.Resource V2(
                    id = '8886e5e3-63d0-462f-a195-d98da885b8dc', 
                    type = 'aws:iam-role', 
                    name = 'nightly-batch-role', 
                    features = ["PROVISIONING","AUTHENTICATION"], ),
dataset_id='agents-dataset',
owners=sailpoint.machine_identities.models.machine_identity_owners_v2.Machine Identity Owners V2(
                    primary = null, 
                    secondary = [{"id":"2c9180858082150f0180893dbaf44202","name":"Jane Doe","type":"IDENTITY"}], ),
attributes={"status":"active"},
connector_attributes={"toolVersion":"1.4"},
manually_edited=False
)

```
[[Back to top]](#) 

