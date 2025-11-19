---
id: v2025-provisioning-completed-account-requests-inner-source
title: ProvisioningCompletedAccountRequestsInnerSource
pagination_label: ProvisioningCompletedAccountRequestsInnerSource
sidebar_label: ProvisioningCompletedAccountRequestsInnerSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningCompletedAccountRequestsInnerSource', 'V2025ProvisioningCompletedAccountRequestsInnerSource'] 
slug: /tools/sdk/python/v2025/models/provisioning-completed-account-requests-inner-source
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedAccountRequestsInnerSource', 'V2025ProvisioningCompletedAccountRequestsInnerSource']
---

# ProvisioningCompletedAccountRequestsInnerSource

Reference to the source being provisioned against.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the object to which this reference applies | [required]
**type** |  **Enum** [  'SOURCE' ] | The type of object that is referenced | [required]
**name** | **str** | Human-readable display name of the object to which this reference applies | [required]
}

## Example

```python
from sailpoint.v2025.models.provisioning_completed_account_requests_inner_source import ProvisioningCompletedAccountRequestsInnerSource

provisioning_completed_account_requests_inner_source = ProvisioningCompletedAccountRequestsInnerSource(
id='4e4d982dddff4267ab12f0f1e72b5a6d',
type='SOURCE',
name='Corporate Active Directory'
)

```
[[Back to top]](#) 

