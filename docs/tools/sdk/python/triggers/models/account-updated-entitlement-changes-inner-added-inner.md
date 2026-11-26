# AccountUpdatedEntitlementChangesInnerAddedInner

# AccountUpdatedEntitlementChangesInnerAddedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the entitlement. | [optional] 
**name** | **str** | The name of the entitlement. | [optional] 
**owner** | [**AccountUpdatedEntitlementChangesInnerAddedInnerOwner**](account-updated-entitlement-changes-inner-added-inner-owner) |  | [optional] 
**value** | **str** | The value of the entitlement. | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.account_updated_entitlement_changes_inner_added_inner import AccountUpdatedEntitlementChangesInnerAddedInner

account_updated_entitlement_changes_inner_added_inner = AccountUpdatedEntitlementChangesInnerAddedInner(
id='2c9180835d2e5168015d32f890ca1581',
name='Admin',
owner=sailpoint.triggers.models.account_updated_entitlement_changes_inner_added_inner_owner.AccountUpdated_entitlementChanges_inner_added_inner_owner(
                    id = '2c9180835d2e5168015d32f890ca1581', 
                    name = 'Owner Name', 
                    type = 'Primary', ),
value='Admin'
)

```
[[Back to top]](#) 

