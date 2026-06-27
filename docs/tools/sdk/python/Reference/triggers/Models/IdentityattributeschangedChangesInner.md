---
id: identityattributeschanged-changes-inner
title: IdentityattributeschangedChangesInner
pagination_label: IdentityattributeschangedChangesInner
sidebar_label: IdentityattributeschangedChangesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityattributeschangedChangesInner', 'IdentityattributeschangedChangesInner'] 
slug: /tools/sdk/python/triggers/models/identityattributeschanged-changes-inner
tags: ['SDK', 'Software Development Kit', 'IdentityattributeschangedChangesInner', 'IdentityattributeschangedChangesInner']
---

# IdentityattributeschangedChangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | The name of the identity attribute that changed. | [required]
**old_value** | [**IdentityattributeschangedChangesInnerOldValue**](identityattributeschanged-changes-inner-old-value) |  | [optional] 
**new_value** | [**IdentityattributeschangedChangesInnerNewValue**](identityattributeschanged-changes-inner-new-value) |  | [optional] 
}

## Example

```python
from sailpoint.triggers.models.identityattributeschanged_changes_inner import IdentityattributeschangedChangesInner

identityattributeschanged_changes_inner = IdentityattributeschangedChangesInner(
attribute='department',
old_value=sales,
new_value=marketing
)

```
[[Back to top]](#) 

