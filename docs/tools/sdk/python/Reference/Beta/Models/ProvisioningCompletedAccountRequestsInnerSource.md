---
id: beta-provisioning-completed-account-requests-inner-source
title: ProvisioningCompletedAccountRequestsInnerSource
pagination_label: ProvisioningCompletedAccountRequestsInnerSource
sidebar_label: ProvisioningCompletedAccountRequestsInnerSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningCompletedAccountRequestsInnerSource', 'BetaProvisioningCompletedAccountRequestsInnerSource'] 
slug: /tools/sdk/python/beta/models/provisioning-completed-account-requests-inner-source
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedAccountRequestsInnerSource', 'BetaProvisioningCompletedAccountRequestsInnerSource']
---

# ProvisioningCompletedAccountRequestsInnerSource

Source that ISC is provisioning access on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Source ID. | [required]
**type** |  **Enum** [  'SOURCE' ] | Source DTO type. | [required]
**name** | **str** | Source name. | [required]
}

## Example

```python
from sailpoint.beta.models.provisioning_completed_account_requests_inner_source import ProvisioningCompletedAccountRequestsInnerSource

provisioning_completed_account_requests_inner_source = ProvisioningCompletedAccountRequestsInnerSource(
id='4e4d982dddff4267ab12f0f1e72b5a6d',
type='SOURCE',
name='Corporate Active Directory'
)

```
[[Back to top]](#) 

