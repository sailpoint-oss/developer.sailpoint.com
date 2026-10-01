# Intelidentityenvelope

# Intelidentityenvelope


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identity Security Cloud identifier for this non-human identity. | [required]
**type** |  **Enum** [  'Human',    'NHI' ] | Identity type for the matched record. | [required]
**display_name** | **str** | Preferred display name for the non-human identity. | [optional] 
**description** | **str** | Optional description from upstream when present. | [optional] 
**subtype** | **str** | Sub-classification label for that NHI. | [optional] 
**attributes** | **map[string]object** | Connector or runtime metadata; empty object when absent upstream. | [required]
**created** | **datetime** | Timestamp when the identity record was created in Identity Security Cloud. | [optional] 
**modified** | **datetime** | Timestamp when the identity record was last modified in Identity Security Cloud. | [optional] 
**alias** | **str** | Primary login or account alias for the identity. | [optional] 
**email** | **str** | Primary business email address for the identity. | [optional] 
**identity_status** | **str** | Current identity lifecycle status label from Identity Security Cloud. | [optional] 
**is_manager** | **bool** | True when the identity is flagged as a people manager in the organization. | [optional] [default to False]
**identity_graph** | [**Intelidentitygraphlink**](intelidentitygraphlink) | Omitted when the tenant lacks the idg:base license. | [optional] 
**non_human_identity_ownership** | [**Intelnonhumanidentityownership**](intelnonhumanidentityownership) | Omitted when the tenant lacks `idn:machine-identity-security`. When present, both `agents` and `applications` always render.  | [optional] 
**accounts** | [**Intelmachineaccountsslice**](intelmachineaccountsslice) |  | [required]
**privileged_access** | [**IntelPrivilegedAccessSlice**](intel-privileged-access-slice) | Full privileged access result for the identity. | [required]
**outliers** | [**IntelOutliersSlice**](intel-outliers-slice) | Rare access slice; omitted when the tenant lacks the IDA-outliers license. | [optional] 
**access_history** | [**IntelAccessHistory**](intel-access-history) | Access-history split into access items and certifications sub-slices. | [required]
**match_confidence** |  **Enum** [  'exact',    'partial' ] | Match quality for opaque prefix resolution; omitted for direct id eq and exact opaque matches. | [optional] 
**native_identity** | **str** | Native identifier on the source system. | [required]
**dataset_id** | **str** | Dataset identifier from upstream machine-identity services when present. | [optional] 
**source** | [**Intelmachinesourcewire**](intelmachinesourcewire) | Source metadata for the machine identity when present upstream. | [optional] 
**exists_on_source** | **str** | Upstream existsOnSource value. Wire uses uppercase strings such as TRUE or FALSE. | [optional] 
**manually_edited** | **bool** | True when an administrator manually edited machine identity attributes. | [optional] [default to False]
**manually_created** | **bool** | True when the machine identity was created manually in Identity Security Cloud. | [optional] [default to False]
**owners** | [**Intelmachineidentityowners**](intelmachineidentityowners) |  | [required]
**user_entitlements** | [**[]Intelmachineuserentitlement**](intelmachineuserentitlement) | Entitlements associated with the machine identity from upstream. | [optional] 
**derived** | [**Intelmachinederived**](intelmachinederived) |  | [required]
\}

## Example

```python
from sailpoint.intelligence.models.intelidentityenvelope import Intelidentityenvelope

intelidentityenvelope = Intelidentityenvelope(
id='ef38f94347e94562b5bb8424a56397d8',
type='Human',
display_name='display name',
description='',
subtype='AI Agent',
attributes={},
created='2026-05-12T08:00Z',
modified='2026-05-12T09:15:30Z',
alias='example.user',
email='user@example.com',
identity_status='ACTIVE',
is_manager=False,
identity_graph=sailpoint.intelligence.models.intelidentitygraphlink.Intelidentitygraphlink(
                    href = 'https://tenant.identitynow.com/ui/identity-graph?entity=human_identity&id=ef38f94347e94562b5bb8424a56397d8', ),
non_human_identity_ownership=sailpoint.intelligence.models.intelnonhumanidentityownership.Intelnonhumanidentityownership(
                    agents = null, 
                    applications = null, ),
accounts=sailpoint.intelligence.models.intelmachineaccountsslice.Intelmachineaccountsslice(
                    items = [
                        sailpoint.intelligence.models.intelmachineaccountwire.Intelmachineaccountwire(
                            id = '2c91808874ff91550175097daaec161c', 
                            name = 'account-name', 
                            native_identity = 'arn:aws:bedrock:us-east-1:336721:agent/ABCDEFGHI', 
                            source = null, 
                            enabled = True, 
                            locked = False, 
                            machine_identity = null, 
                            owner_identity = null, 
                            description = 'Service account for automation', 
                            subtype = 'Service Account', 
                            access_type = 'account', 
                            environment = 'production', 
                            classification_method = 'DISCOVERED', 
                            manually_edited = False, 
                            manually_correlated = False, 
                            has_entitlements = True, 
                            created = '2026-01-01T00:00Z', 
                            modified = '2026-05-01T00:00Z', 
                            attributes = {}, 
                            connector_attributes = {}, )
                        ], 
                    total_count = 11, 
                    next = 'https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/2c91808874ff91550175097daaec161e/accounts?limit=10&offset=10&count=true&isNHI=true', ),
privileged_access=sailpoint.intelligence.models.intel_privileged_access_slice.IntelPrivilegedAccessSlice(
                    items = [
                        sailpoint.intelligence.models.intel_privileged_access_item_wire.IntelPrivilegedAccessItemWire(
                            privileged = True, 
                            privilege_level = sailpoint.intelligence.models.intelprivilegelevel.Intelprivilegelevel(
                                effective = 'HIGH', ), 
                            id = 'ent-1', 
                            type = 'entitlement', 
                            display_name = 'Example_Admin_Access', 
                            name = 'Example_Admin_Access', 
                            source = sailpoint.intelligence.models.intel_privileged_access_item_wire_source.IntelPrivilegedAccessItemWire_source(
                                name = 'Example HR Source', 
                                id = 'src-2', ), 
                            attribute = 'EXAMPLE_PERMISSION_GROUPS', 
                            value = 'Example_Admin_Access', )
                        ], ),
outliers=sailpoint.intelligence.models.intel_outliers_slice.IntelOutliersSlice(
                    rare_access = null, ),
access_history=sailpoint.intelligence.models.intel_access_history.IntelAccessHistory(
                    access_items = sailpoint.intelligence.models.access_items.accessItems(), 
                    certifications = sailpoint.intelligence.models.certifications.certifications(), ),
match_confidence='exact',
native_identity='arn:aws:bedrock:us-east-1:336721:agent/ABCDEFGHI',
dataset_id='dataset-001',
source=sailpoint.intelligence.models.intelmachinesourcewire.Intelmachinesourcewire(
                    id = '60de165099e649cb828553a5e8510fc4', 
                    name = 'Example Directory', 
                    type = 'DelimitedFile', ),
exists_on_source='TRUE',
manually_edited=False,
manually_created=False,
owners=sailpoint.intelligence.models.intelmachineidentityowners.Intelmachineidentityowners(
                    primary_identity = null, 
                    secondary_identities = [
                        sailpoint.intelligence.models.intelmachineentityref.Intelmachineentityref(
                            type = 'IDENTITY', 
                            id = 'ef38f94347e94562b5bb8424a56397d8', 
                            name = 'Example User', 
                            email = 'user@example.com', )
                        ], ),
user_entitlements=[
                    sailpoint.intelligence.models.intelmachineuserentitlement.Intelmachineuserentitlement(
                        source_id = '60de165099e649cb828553a5e8510fc4', 
                        entitlement_id = 'ent-001', 
                        display_name = 'Example_Entitlement', 
                        source = null, )
                    ],
derived=sailpoint.intelligence.models.intelmachinederived.Intelmachinederived(
                    is_orphaned = False, 
                    authorized_human_identities = [{"type":"IDENTITY","id":"ef38f94347e94562b5bb8424a56397d8","name":"Example User","email":"user@example.com"}], 
                    blast_radius_summary = sailpoint.intelligence.models.intelblastradiussummary.Intelblastradiussummary(
                        impacted_sources = ["Example AWS Source"], 
                        impacted_accounts = 1, 
                        impacted_humans = 1, 
                        has_entitlements = True, 
                        environments = ["production"], 
                        access_types = ["entitlement"], ), )
)

```
[[Back to top]](#) 

