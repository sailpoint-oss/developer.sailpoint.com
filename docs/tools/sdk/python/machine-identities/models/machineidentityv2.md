# Machineidentityv2

# Machineidentityv2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**description** | **str** | Description of the machine identity. | [optional] 
**attributes** | **map[string]object** | A map of custom machine identity attributes. | [optional] 
**connector_attributes** | **map[string]object** | A map of attributes sourced from the connector during aggregation. | [optional] 
**manually_edited** | **bool** | Indicates if the machine identity has been manually edited. | [optional] [default to False]
**manually_created** | **bool** | Indicates if the machine identity has been manually created. | [optional] [default to False]
**owners** | [**MachineIdentityOwnersV2**](machine-identity-owners-v2) |  | [optional] 
**subtype** | **str** | The subtype value associated to the machine identity. | [optional] 
**source_id** | **str** | The source id associated to the machine identity. | [optional] 
**uuid** | **str** | The UUID associated to the machine identity directly aggregated from a source. | [optional] 
**native_identity** | **str** | The native identity associated to the machine identity directly aggregated from a source. | [optional] 
**dataset_id** | **str** | The dataset id associated to the source from which the identity was retrieved. | [optional] 
**environment** | **str** | The environment the machine identity belongs to. | [optional] 
**exists_on_source** | **str** | Indicates whether the machine identity still exists on the source. | [optional] 
**status** | **str** | Operational status read from stored attributes.status; null when absent. | [optional] 
**resource** | [**ResourceV2**](resource-v2) |  | [optional] 
**source** | [**MachineIdentityV2Source**](machine-identity-v2-source) |  | [optional] 
**user_entitlements** | [**[]UserEntitlementV2**](user-entitlement-v2) | The user entitlements associated to the machine identity. | [optional] 
**business_application_refs** | [**[]BusinessApplicationRef**](business-application-ref) | Optional Business Application references associated with this machine identity. Available when Business Applications is enabled for the tenant. On create and patch, at most one reference is allowed and is persisted as a `MANUAL` correlation. When Business Applications is not enabled, this field is null on responses and is rejected (`400`) if supplied on write. | [optional] 
**effective_sanctioned_status** | **SanctionedStatus** | Derived sanctioned status from linked Business Applications; `UNKNOWN` when no refs are present. Available when Business Applications is enabled for the tenant; null when it is not enabled. Read-only on create and patch input. | [optional] [readonly] 
**risk** | [**MachineIdentityV2Risk**](machine-identity-v2-risk) |  | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.machineidentityv2 import Machineidentityv2

machineidentityv2 = Machineidentityv2(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
description='Service account for nightly batch jobs',
attributes={"privilegeLevel":"HIGH","region":"APAC"},
connector_attributes={"objectguid":"abc-123"},
manually_edited=True,
manually_created=True,
owners=sailpoint.machine_identities.models.machine_identity_owners_v2.Machine Identity Owners V2(
                    primary = null, 
                    secondary = [{"id":"2c9180858082150f0180893dbaf44202","name":"Jane Doe","type":"IDENTITY"}], ),
subtype='AI_AGENT',
source_id='6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa',
uuid='f5dd23fe-3414-42b7-bb1c-869400ad7a10',
native_identity='abc:123:dddd',
dataset_id='8886e5e3-63d0-462f-a195-d98da885b8dc',
environment='PRODUCTION',
exists_on_source='TRUE',
status='ACTIVE',
resource=sailpoint.machine_identities.models.resource_v2.Resource V2(
                    id = '8886e5e3-63d0-462f-a195-d98da885b8dc', 
                    type = 'aws:iam-role', 
                    name = 'nightly-batch-role', 
                    features = ["PROVISIONING","AUTHENTICATION"], ),
source=,
user_entitlements=[
                    sailpoint.machine_identities.models.user_entitlement_v2.User Entitlement V2(
                        source_id = '5898b7c1-620c-49c6-cccc-cbf81eb4bddd', 
                        entitlement_id = '6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa', 
                        display_name = 'Entitlement Name', 
                        source = null, )
                    ],
business_application_refs=[
                    sailpoint.machine_identities.models.business_application_ref.Business Application Ref(
                        type = 'BUSINESS_APPLICATION', 
                        id = '2ee5e239-e68c-4d69-93fb-6c7ce4576190', 
                        name = 'Cursor', 
                        sanctioned_status = SANCTIONED, 
                        correlation_type = MANUAL, )
                    ],
effective_sanctioned_status='SANCTIONED',
risk=sailpoint.machine_identities.models.machine_identity_v2_risk.Machine_Identity_V2_risk(
                    score = 72.5, 
                    severity = 'HIGH', )
)

```
[[Back to top]](#) 

