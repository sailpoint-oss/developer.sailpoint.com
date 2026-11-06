# AccountUpdatedMultiValueAttributeChangesInner

# AccountUpdatedMultiValueAttributeChangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the attribute that was changed. | [required]
**added_values** | [**[]AccountUpdatedMultiValueAttributeChangesInnerAddedValuesInner**](account-updated-multi-value-attribute-changes-inner-added-values-inner) | The values that were added to the attribute. | [required]
**removed_values** | [**[]AccountUpdatedMultiValueAttributeChangesInnerAddedValuesInner**](account-updated-multi-value-attribute-changes-inner-added-values-inner) | The values that were removed from the attribute. | [required]
\}

## Example

```python
from sailpoint.triggers.models.account_updated_multi_value_attribute_changes_inner import AccountUpdatedMultiValueAttributeChangesInner

account_updated_multi_value_attribute_changes_inner = AccountUpdatedMultiValueAttributeChangesInner(
name='memberOf',
added_values=["CN=Sales,OU=Groups,DC=acme,DC=com","CN=AllEmployees,OU=Groups,DC=acme,DC=com"],
removed_values=["CN=AllEmployees,OU=Groups,DC=acme,DC=com","CN=Contractors,OU=Groups,DC=acme,DC=com"]
)

```
[[Back to top]](#) 

