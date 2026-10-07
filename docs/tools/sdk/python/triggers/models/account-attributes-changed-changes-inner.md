# AccountAttributesChangedChangesInner

# AccountAttributesChangedChangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | The name of the attribute. | [required]
**old_value** | [**AccountAttributesChangedChangesInnerOldValue**](account-attributes-changed-changes-inner-old-value) |  | [required]
**new_value** | [**AccountAttributesChangedChangesInnerNewValue**](account-attributes-changed-changes-inner-new-value) |  | [required]
\}

## Example

```python
from sailpoint.triggers.models.account_attributes_changed_changes_inner import AccountAttributesChangedChangesInner

account_attributes_changed_changes_inner = AccountAttributesChangedChangesInner(
attribute='sn',
old_value=doe,
new_value=ryans
)

```
[[Back to top]](#) 

