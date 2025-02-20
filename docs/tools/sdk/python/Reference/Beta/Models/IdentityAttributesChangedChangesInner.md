---
id: beta-identity-attributes-changed-changes-inner
title: IdentityAttributesChangedChangesInner
pagination_label: IdentityAttributesChangedChangesInner
sidebar_label: IdentityAttributesChangedChangesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityAttributesChangedChangesInner', 'BetaIdentityAttributesChangedChangesInner'] 
slug: /tools/sdk/python/beta/models/identity-attributes-changed-changes-inner
tags: ['SDK', 'Software Development Kit', 'IdentityAttributesChangedChangesInner', 'BetaIdentityAttributesChangedChangesInner']
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
from sailpoint.beta.models.identity_attributes_changed_changes_inner import IdentityAttributesChangedChangesInner

identity_attributes_changed_changes_inner = IdentityAttributesChangedChangesInner(
attribute='department',
old_value=sales,
new_value=marketing
)

```
[[Back to top]](#) 

