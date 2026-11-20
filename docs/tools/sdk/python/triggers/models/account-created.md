# AccountCreated

# AccountCreated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**AccountCreatedEvent**](account-created-event) |  | [required]
**source** | [**AccountSourceReference**](account-source-reference) |  | [required]
**account** | [**AccountV2**](account-v2) |  | [required]
**identity** | [**IdentityReference2**](identity-reference2) |  | [required]
\}

## Example

```python
from sailpoint.triggers.models.account_created import AccountCreated

account_created = AccountCreated(
event=sailpoint.triggers.models.account_created_event.AccountCreated_event(
                    type = 'ACCOUNT_CREATED_V2', 
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
                    email = 'john.doe@email.com', )
)

```
[[Back to top]](#) 

