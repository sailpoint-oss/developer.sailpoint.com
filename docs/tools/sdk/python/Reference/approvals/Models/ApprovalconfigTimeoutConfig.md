---
id: approvalconfig-timeout-config
title: ApprovalconfigTimeoutConfig
pagination_label: ApprovalconfigTimeoutConfig
sidebar_label: ApprovalconfigTimeoutConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalconfigTimeoutConfig', 'ApprovalconfigTimeoutConfig'] 
slug: /tools/sdk/python/approvals/models/approvalconfig-timeout-config
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigTimeoutConfig', 'ApprovalconfigTimeoutConfig']
---

# ApprovalconfigTimeoutConfig

TimeoutConfig contains configurations around when the approval request should expire.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Indicates if timeout is enabled. | [optional] [default to False]
**days_until_timeout** | **int** | Number of days until approval request times out. Max value is 90. | [optional] 
**timeout_result** |  **Enum** [  'EXPIRED',    'APPROVED' ] | Result of timeout. | [optional] 
}

## Example

```python
from sailpoint.approvals.models.approvalconfig_timeout_config import ApprovalconfigTimeoutConfig

approvalconfig_timeout_config = ApprovalconfigTimeoutConfig(
enabled=True,
days_until_timeout=2,
timeout_result='EXPIRED'
)

```
[[Back to top]](#) 

