# AccountUpdatedEntitlementChangesInner

# AccountUpdatedEntitlementChangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **str** | The name of the entitlement attribute that was changed. | [required]
**added** | [**[]AccountUpdatedEntitlementChangesInnerAddedInner**](account-updated-entitlement-changes-inner-added-inner) | The entitlements that were added. | [required]
**removed** | [**[]AccountUpdatedEntitlementChangesInnerAddedInner**](account-updated-entitlement-changes-inner-added-inner) | The entitlements that were removed. | [required]
\}

## Example

```python
from sailpoint.triggers.models.account_updated_entitlement_changes_inner import AccountUpdatedEntitlementChangesInner

account_updated_entitlement_changes_inner = AccountUpdatedEntitlementChangesInner(
attribute_name='roles',
added=[{"id":"2c9180835d2e5168015d32f890ca1581","name":"Admin","owner":{"id":"2c9180835d2e5168015d32f890ca1581","name":"Owner Name","type":"Primary"},"value":"Admin"},{"id":"2c9180835d2e5168015d32f890ca1582","name":"User","owner":{"id":"2c9180835d2e5168015d32f890ca1582","name":"Owner Name 2","type":"Secondary"},"value":"User"}],
removed=[{"id":"2c9180835d2e5168015d32f890ca1583","name":"Group","owner":{"id":"2c9180835d2e5168015d32f890ca1583","name":"Owner Name 3","type":"Primary"},"value":"Group"}]
)

```
[[Back to top]](#) 

