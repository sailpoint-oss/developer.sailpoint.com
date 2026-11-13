# IdentityAttributesChangedChangesInner

# IdentityAttributesChangedChangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | The name of the identity attribute that changed. | [required]
**old_value** | [**IdentityAttributesChangedChangesInnerOldValue**](identity-attributes-changed-changes-inner-old-value) |  | [optional] 
**new_value** | [**IdentityAttributesChangedChangesInnerNewValue**](identity-attributes-changed-changes-inner-new-value) |  | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.identity_attributes_changed_changes_inner import IdentityAttributesChangedChangesInner

identity_attributes_changed_changes_inner = IdentityAttributesChangedChangesInner(
attribute='department',
old_value=sales,
new_value=marketing
)

```
[[Back to top]](#) 

