---
id: v2024-identity-attributes-changed-changes-inner
title: IdentityAttributesChangedChangesInner
pagination_label: IdentityAttributesChangedChangesInner
sidebar_label: IdentityAttributesChangedChangesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityAttributesChangedChangesInner', 'V2024IdentityAttributesChangedChangesInner'] 
slug: /tools/sdk/python/v2024/models/identity-attributes-changed-changes-inner
tags: ['SDK', 'Software Development Kit', 'IdentityAttributesChangedChangesInner', 'V2024IdentityAttributesChangedChangesInner']
---

# IdentityAttributesChangedChangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | The name of the identity attribute that changed. | [required]
**old_value** | [**IdentityAttributesChangedChangesInnerOldValue**](identity-attributes-changed-changes-inner-old-value) |  | [optional] 
**new_value** | [**IdentityAttributesChangedChangesInnerNewValue**](identity-attributes-changed-changes-inner-new-value) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.identity_attributes_changed_changes_inner import IdentityAttributesChangedChangesInner

identity_attributes_changed_changes_inner = IdentityAttributesChangedChangesInner(
attribute='department',
old_value=sales,
new_value=marketing
)

```
[[Back to top]](#) 

