---
id: beta-account-attributes-changed-changes-inner
title: AccountAttributesChangedChangesInner
pagination_label: AccountAttributesChangedChangesInner
sidebar_label: AccountAttributesChangedChangesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAttributesChangedChangesInner', 'BetaAccountAttributesChangedChangesInner'] 
slug: /tools/sdk/python/beta/models/account-attributes-changed-changes-inner
tags: ['SDK', 'Software Development Kit', 'AccountAttributesChangedChangesInner', 'BetaAccountAttributesChangedChangesInner']
---

# AccountAttributesChangedChangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | The name of the attribute. | [required]
**old_value** | [**AccountAttributesChangedChangesInnerOldValue**](account-attributes-changed-changes-inner-old-value) |  | [required]
**new_value** | [**AccountAttributesChangedChangesInnerNewValue**](account-attributes-changed-changes-inner-new-value) |  | [required]
}

## Example

```python
from sailpoint.beta.models.account_attributes_changed_changes_inner import AccountAttributesChangedChangesInner

account_attributes_changed_changes_inner = AccountAttributesChangedChangesInner(
attribute='sn',
old_value=doe,
new_value=ryans
)

```
[[Back to top]](#) 

