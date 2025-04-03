---
id: v2025-provisioning-completed-account-requests-inner-attribute-requests-inner
title: ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner
pagination_label: ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner
sidebar_label: ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner', 'V2025ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner'] 
slug: /tools/sdk/python/v2025/models/provisioning-completed-account-requests-inner-attribute-requests-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner', 'V2025ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner']
---

# ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **str** | The name of the attribute being provisioned. | [required]
**attribute_value** | **str** | The value of the attribute being provisioned. | [optional] 
**operation** |  **Enum** [  'Add',    'Set',    'Remove' ] | The operation to handle the attribute. | [required]
}

## Example

```python
from sailpoint.v2025.models.provisioning_completed_account_requests_inner_attribute_requests_inner import ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner

provisioning_completed_account_requests_inner_attribute_requests_inner = ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner(
attribute_name='memberOf',
attribute_value='CN=jedi,DC=starwars,DC=com',
operation=Add
)

```
[[Back to top]](#) 

