# IntelIdentityAggregate

# IntelIdentityAggregate

Human identity response (type Human). Identity attributes are hoisted to the top level. The accounts, privilegedAccess, and accessHistory slices are always present (empty slices use items []). The outliers slice is omitted when the tenant lacks the IDA-outliers license. The identityGraph deep link is omitted when the tenant lacks the idg:base license. The nonHumanIdentityOwnership slice is omitted when the tenant lacks idn:machine-identity-security. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identity Security Cloud identifier for this identity. | [required]
**type** |  **Enum** [  'Human' ] | Identity type for the matched record. | [required]
**display_name** | **str** | Preferred display name for the identity across administrative experiences. | [optional] 
**description** | **str** | Optional free-text description assigned to the identity profile when present. | [optional] 
**subtype** |  **Enum** [  'Employee',    'Non Employee',    'Cannot Determine' ] | NERM classification for the identity. | [optional] 
**attributes** | **map[string]object** | Arbitrary SCIM-style attribute bag returned for the identity context view. | [optional] 
**created** | **datetime** | Timestamp when the identity record was created in Identity Security Cloud. | [optional] 
**modified** | **datetime** | Timestamp when the identity record was last modified in Identity Security Cloud. | [optional] 
**alias** | **str** | Primary login or account alias for the identity. | [optional] 
**email** | **str** | Primary business email address for the identity. | [optional] 
**identity_status** | **str** | Current identity lifecycle status label from Identity Security Cloud. | [optional] 
**is_manager** | **bool** | True when the identity is flagged as a people manager in the organization. | [optional] [default to False]
**identity_graph** | [**Intelidentitygraphlink**](intelidentitygraphlink) | Omitted when the tenant lacks the idg:base license. | [optional] 
**non_human_identity_ownership** | [**Intelnonhumanidentityownership**](intelnonhumanidentityownership) | Omitted when the tenant lacks `idn:machine-identity-security`. When present, both `agents` and `applications` always render.  | [optional] 
**accounts** | [**IntelAccountsSlice**](intel-accounts-slice) | First page of accounts for the identity. | [required]
**privileged_access** | [**IntelPrivilegedAccessSlice**](intel-privileged-access-slice) | Full privileged access result for the identity. | [required]
**outliers** | [**IntelOutliersSlice**](intel-outliers-slice) | Rare access slice; omitted when the tenant lacks the IDA-outliers license. | [optional] 
**access_history** | [**IntelAccessHistory**](intel-access-history) | Access-history split into access items and certifications sub-slices. | [required]
\}

## Example

```python
from sailpoint.intelligence.models.intel_identity_aggregate import IntelIdentityAggregate

intel_identity_aggregate = IntelIdentityAggregate(
id='ef38f94347e94562b5bb8424a56397d8',
type='Human',
display_name='Example User',
description='Example description.',
subtype='Employee',
attributes={"department":"Engineering","region":"US"},
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
accounts=sailpoint.intelligence.models.intel_accounts_slice.IntelAccountsSlice(
                    items = [
                        sailpoint.intelligence.models.intel_access_account_wire.IntelAccessAccountWire(
                            id = '2c91808874ff91550175097daaec161c', 
                            name = 'jdoe', 
                            source = sailpoint.intelligence.models.source.source(), 
                            disabled = False, 
                            locked = False, 
                            authoritative = True, 
                            system_account = False, 
                            is_machine = False, 
                            manually_correlated = False, 
                            native_identity = 'CN=jdoe,OU=Users,DC=example,DC=com', 
                            created = '2023-11-01T10:00Z', 
                            modified = '2024-02-15T16:20Z', )
                        ], 
                    total_count = 42, 
                    next = 'https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/accounts?limit=10&offset=10&count=true', ),
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
                    certifications = sailpoint.intelligence.models.certifications.certifications(), )
)

```
[[Back to top]](#) 

