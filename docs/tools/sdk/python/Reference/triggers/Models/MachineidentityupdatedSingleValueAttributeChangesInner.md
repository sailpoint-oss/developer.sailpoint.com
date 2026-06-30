---
id: machineidentityupdated-single-value-attribute-changes-inner
title: MachineidentityupdatedSingleValueAttributeChangesInner
pagination_label: MachineidentityupdatedSingleValueAttributeChangesInner
sidebar_label: MachineidentityupdatedSingleValueAttributeChangesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MachineidentityupdatedSingleValueAttributeChangesInner', 'MachineidentityupdatedSingleValueAttributeChangesInner'] 
slug: /tools/sdk/python/triggers/models/machineidentityupdated-single-value-attribute-changes-inner
tags: ['SDK', 'Software Development Kit', 'MachineidentityupdatedSingleValueAttributeChangesInner', 'MachineidentityupdatedSingleValueAttributeChangesInner']
---

# MachineidentityupdatedSingleValueAttributeChangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the attribute that was changed. | [required]
**old_value** | [**MachineidentityupdatedSingleValueAttributeChangesInnerOldValue**](machineidentityupdated-single-value-attribute-changes-inner-old-value) |  | [required]
**new_value** | [**MachineidentityupdatedSingleValueAttributeChangesInnerNewValue**](machineidentityupdated-single-value-attribute-changes-inner-new-value) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.machineidentityupdated_single_value_attribute_changes_inner import MachineidentityupdatedSingleValueAttributeChangesInner

machineidentityupdated_single_value_attribute_changes_inner = MachineidentityupdatedSingleValueAttributeChangesInner(
name='displayName',
old_value=John Doe,
new_value=John A. Doe
)

```
[[Back to top]](#) 

