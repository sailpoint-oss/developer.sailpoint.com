# AccountUpdatedSingleValueAttributeChangesInner

# AccountUpdatedSingleValueAttributeChangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the attribute that was changed. | [required]
**old_value** | [**AccountUpdatedSingleValueAttributeChangesInnerOldValue**](account-updated-single-value-attribute-changes-inner-old-value) |  | [required]
**new_value** | [**AccountUpdatedSingleValueAttributeChangesInnerNewValue**](account-updated-single-value-attribute-changes-inner-new-value) |  | [required]
\}

## Example

```python
from sailpoint.triggers.models.account_updated_single_value_attribute_changes_inner import AccountUpdatedSingleValueAttributeChangesInner

account_updated_single_value_attribute_changes_inner = AccountUpdatedSingleValueAttributeChangesInner(
name='displayName',
old_value=John Doe,
new_value=John A. Doe
)

```
[[Back to top]](#) 

