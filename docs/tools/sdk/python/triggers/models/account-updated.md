# AccountUpdated

# AccountUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**AccountUpdatedEvent**](account-updated-event) |  | [required]
**source** | [**AccountSourceReference**](account-source-reference) |  | [required]
**account** | [**AccountV2**](account-v2) |  | [required]
**identity** | [**IdentityReference2**](identity-reference2) |  | [required]
**account_change_types** | **[]str** | The types of changes that occurred to the account. | [required]
**single_value_attribute_changes** | [**[]AccountUpdatedSingleValueAttributeChangesInner**](account-updated-single-value-attribute-changes-inner) | Details about the single-value attribute changes that occurred to the account. | [required]
**multi_value_attribute_changes** | [**[]AccountUpdatedMultiValueAttributeChangesInner**](account-updated-multi-value-attribute-changes-inner) | Details about the multi-value attribute changes that occurred to the account. | [required]
**entitlement_changes** | [**[]AccountUpdatedEntitlementChangesInner**](account-updated-entitlement-changes-inner) | Details about the entitlement changes that occurred to the account. | [required]
\}

## Example

```python
from sailpoint.triggers.models.account_updated import AccountUpdated

account_updated = AccountUpdated(
event=sailpoint.triggers.models.account_updated_event.AccountUpdated_event(
                    type = 'ACCOUNT_UPDATED_V2', 
                    cause = 'AGGREGATION', ),
source=sailpoint.triggers.models.account_source_reference.AccountSourceReference(
                    id = '2c918082814e693601816e09471b29b6', 
                    name = 'Active Directory', 
                    alias = 'AD', 
                    owner = sailpoint.triggers.models.account_source_reference_owner.AccountSourceReference_owner(
                        id = 'owner-123', 
                        name = 'owner-name', ), 
                    governance_group = sailpoint.triggers.models.account_source_reference_governance_group.AccountSourceReference_governanceGroup(
                        id = 'group-456', 
                        name = 'governance-group-name', ), ),
account=sailpoint.triggers.models.account_v2.AccountV2(
                    id = '2c9180835d2e5168015d32f890ca1581', 
                    name = 'john.doe', 
                    native_identity = 'CN=John Doe,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com', 
                    uuid = 'b7264868-7201-415f-9118-b581d431c688', 
                    correlated = True, 
                    is_machine = False, 
                    origin = 'Active Directory', 
                    attributes = {"firstname":"John","lastname":"Doe"}, ),
identity=sailpoint.triggers.models.identity_reference_2.IdentityReference_2(
                    id = 'ee769173319b41d19ccec6c235423237b', 
                    name = 'john.doe', 
                    alias = 'jdoe', 
                    email = 'john.doe@email.com', ),
account_change_types=[
                    'ATTRIBUTES_CHANGED'
                    ],
single_value_attribute_changes=[
                    sailpoint.triggers.models.account_updated_single_value_attribute_changes_inner.AccountUpdated_singleValueAttributeChanges_inner(
                        name = 'displayName', 
                        old_value = John Doe, 
                        new_value = John A. Doe, )
                    ],
multi_value_attribute_changes=[
                    sailpoint.triggers.models.account_updated_multi_value_attribute_changes_inner.AccountUpdated_multiValueAttributeChanges_inner(
                        name = 'memberOf', 
                        added_values = ["CN=Sales,OU=Groups,DC=acme,DC=com","CN=AllEmployees,OU=Groups,DC=acme,DC=com"], 
                        removed_values = ["CN=AllEmployees,OU=Groups,DC=acme,DC=com","CN=Contractors,OU=Groups,DC=acme,DC=com"], )
                    ],
entitlement_changes=[
                    sailpoint.triggers.models.account_updated_entitlement_changes_inner.AccountUpdated_entitlementChanges_inner(
                        attribute_name = 'roles', 
                        added = [{"id":"2c9180835d2e5168015d32f890ca1581","name":"Admin","owner":{"id":"2c9180835d2e5168015d32f890ca1581","name":"Owner Name","type":"Primary"},"value":"Admin"},{"id":"2c9180835d2e5168015d32f890ca1582","name":"User","owner":{"id":"2c9180835d2e5168015d32f890ca1582","name":"Owner Name 2","type":"Secondary"},"value":"User"}], 
                        removed = [{"id":"2c9180835d2e5168015d32f890ca1583","name":"Group","owner":{"id":"2c9180835d2e5168015d32f890ca1583","name":"Owner Name 3","type":"Primary"},"value":"Group"}], )
                    ]
)

```
[[Back to top]](#) 

