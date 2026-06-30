---
id: accountupdated-single-value-attribute-changes-inner
title: AccountupdatedSingleValueAttributeChangesInner
pagination_label: AccountupdatedSingleValueAttributeChangesInner
sidebar_label: AccountupdatedSingleValueAttributeChangesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountupdatedSingleValueAttributeChangesInner', 'AccountupdatedSingleValueAttributeChangesInner'] 
slug: /tools/sdk/python/triggers/models/accountupdated-single-value-attribute-changes-inner
tags: ['SDK', 'Software Development Kit', 'AccountupdatedSingleValueAttributeChangesInner', 'AccountupdatedSingleValueAttributeChangesInner']
---

# AccountupdatedSingleValueAttributeChangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the attribute that was changed. | [required]
**old_value** | [**AccountupdatedSingleValueAttributeChangesInnerOldValue**](accountupdated-single-value-attribute-changes-inner-old-value) |  | [required]
**new_value** | [**AccountupdatedSingleValueAttributeChangesInnerNewValue**](accountupdated-single-value-attribute-changes-inner-new-value) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.accountupdated_single_value_attribute_changes_inner import AccountupdatedSingleValueAttributeChangesInner

accountupdated_single_value_attribute_changes_inner = AccountupdatedSingleValueAttributeChangesInner(
name='displayName',
old_value=John Doe,
new_value=John A. Doe
)

```
[[Back to top]](#) 

