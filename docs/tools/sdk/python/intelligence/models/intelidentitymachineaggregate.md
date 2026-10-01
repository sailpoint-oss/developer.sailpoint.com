# Intelidentitymachineaggregate

# Intelidentitymachineaggregate

Non-human identity response (type NHI). Machine identity fields are hoisted to the top level (no machine wrapper). Omits human-only fields and slices (email, alias, privilegedAccess, outliers, accessHistory). Top-level sourceId is omitted; use source.id when present. matchConfidence is present for opaque prefix resolution (exact or partial); omitted for direct id eq and exact opaque matches. The identityGraph deep link is omitted when the tenant lacks the idg:base license. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identity Security Cloud identifier for this non-human identity. | [required]
**type** |  **Enum** [  'NHI' ] | Identity type for the matched record. | [required]
**display_name** | **str** | Preferred display name for the non-human identity. | [optional] 
**description** | **str** | Optional description from upstream when present. | [optional] 
**subtype** | **str** | Sub-classification label for that NHI. | [optional] 
**created** | **datetime** | Timestamp when the identity record was created in Identity Security Cloud. | [optional] 
**modified** | **datetime** | Timestamp when the identity record was last modified in Identity Security Cloud. | [optional] 
**match_confidence** |  **Enum** [  'exact',    'partial' ] | Match quality for opaque prefix resolution; omitted for direct id eq and exact opaque matches. | [optional] 
**identity_graph** | [**Intelidentitygraphlink**](intelidentitygraphlink) | Omitted when the tenant lacks the idg:base license. | [optional] 
**accounts** | [**Intelmachineaccountsslice**](intelmachineaccountsslice) |  | [required]
**native_identity** | **str** | Native identifier on the source system. | [required]
**dataset_id** | **str** | Dataset identifier from upstream machine-identity services when present. | [optional] 
**source** | [**Intelmachinesourcewire**](intelmachinesourcewire) | Source metadata for the machine identity when present upstream. | [optional] 
**exists_on_source** | **str** | Upstream existsOnSource value. Wire uses uppercase strings such as TRUE or FALSE. | [optional] 
**manually_edited** | **bool** | True when an administrator manually edited machine identity attributes. | [optional] [default to False]
**manually_created** | **bool** | True when the machine identity was created manually in Identity Security Cloud. | [optional] [default to False]
**owners** | [**Intelmachineidentityowners**](intelmachineidentityowners) |  | [required]
**user_entitlements** | [**[]Intelmachineuserentitlement**](intelmachineuserentitlement) | Entitlements associated with the machine identity from upstream. | [optional] 
**attributes** | **map[string]object** | Connector or runtime metadata; empty object when absent upstream. | [required]
**derived** | [**Intelmachinederived**](intelmachinederived) |  | [required]
\}

## Example

```python
from sailpoint.intelligence.models.intelidentitymachineaggregate import Intelidentitymachineaggregate

intelidentitymachineaggregate = Intelidentitymachineaggregate(
id='ef38f94347e94562b5bb8424a56397d8',
type='NHI',
display_name='display name',
description='',
subtype='AI Agent',
created='2026-05-12T08:00Z',
modified='2026-05-12T09:15:30Z',
match_confidence='exact',
identity_graph=sailpoint.intelligence.models.intelidentitygraphlink.Intelidentitygraphlink(
                    href = 'https://tenant.identitynow.com/ui/identity-graph?entity=human_identity&id=ef38f94347e94562b5bb8424a56397d8', ),
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
attributes={},
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

