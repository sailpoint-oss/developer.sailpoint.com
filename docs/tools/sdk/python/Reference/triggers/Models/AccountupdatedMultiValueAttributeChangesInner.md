---
id: accountupdated-multi-value-attribute-changes-inner
title: AccountupdatedMultiValueAttributeChangesInner
pagination_label: AccountupdatedMultiValueAttributeChangesInner
sidebar_label: AccountupdatedMultiValueAttributeChangesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountupdatedMultiValueAttributeChangesInner', 'AccountupdatedMultiValueAttributeChangesInner'] 
slug: /tools/sdk/python/triggers/models/accountupdated-multi-value-attribute-changes-inner
tags: ['SDK', 'Software Development Kit', 'AccountupdatedMultiValueAttributeChangesInner', 'AccountupdatedMultiValueAttributeChangesInner']
---

# AccountupdatedMultiValueAttributeChangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the attribute that was changed. | [required]
**added_values** | [**[]AccountupdatedMultiValueAttributeChangesInnerAddedValuesInner**](accountupdated-multi-value-attribute-changes-inner-added-values-inner) | The values that were added to the attribute. | [required]
**removed_values** | [**[]AccountupdatedMultiValueAttributeChangesInnerAddedValuesInner**](accountupdated-multi-value-attribute-changes-inner-added-values-inner) | The values that were removed from the attribute. | [required]
}

## Example

```python
from sailpoint.triggers.models.accountupdated_multi_value_attribute_changes_inner import AccountupdatedMultiValueAttributeChangesInner

accountupdated_multi_value_attribute_changes_inner = AccountupdatedMultiValueAttributeChangesInner(
name='memberOf',
added_values=["CN=Sales,OU=Groups,DC=acme,DC=com","CN=AllEmployees,OU=Groups,DC=acme,DC=com"],
removed_values=["CN=AllEmployees,OU=Groups,DC=acme,DC=com","CN=Contractors,OU=Groups,DC=acme,DC=com"]
)

```
[[Back to top]](#) 

