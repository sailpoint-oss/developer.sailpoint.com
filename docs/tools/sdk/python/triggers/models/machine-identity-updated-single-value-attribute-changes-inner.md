# MachineIdentityUpdatedSingleValueAttributeChangesInner

# MachineIdentityUpdatedSingleValueAttributeChangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the attribute that was changed. | [required]
**old_value** | [**MachineIdentityUpdatedSingleValueAttributeChangesInnerOldValue**](machine-identity-updated-single-value-attribute-changes-inner-old-value) |  | [required]
**new_value** | [**MachineIdentityUpdatedSingleValueAttributeChangesInnerNewValue**](machine-identity-updated-single-value-attribute-changes-inner-new-value) |  | [required]
\}

## Example

```python
from sailpoint.triggers.models.machine_identity_updated_single_value_attribute_changes_inner import MachineIdentityUpdatedSingleValueAttributeChangesInner

machine_identity_updated_single_value_attribute_changes_inner = MachineIdentityUpdatedSingleValueAttributeChangesInner(
name='displayName',
old_value=John Doe,
new_value=John A. Doe
)

```
[[Back to top]](#) 

