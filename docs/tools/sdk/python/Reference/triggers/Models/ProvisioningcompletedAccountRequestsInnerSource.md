---
id: provisioningcompleted-account-requests-inner-source
title: ProvisioningcompletedAccountRequestsInnerSource
pagination_label: ProvisioningcompletedAccountRequestsInnerSource
sidebar_label: ProvisioningcompletedAccountRequestsInnerSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningcompletedAccountRequestsInnerSource', 'ProvisioningcompletedAccountRequestsInnerSource'] 
slug: /tools/sdk/python/triggers/models/provisioningcompleted-account-requests-inner-source
tags: ['SDK', 'Software Development Kit', 'ProvisioningcompletedAccountRequestsInnerSource', 'ProvisioningcompletedAccountRequestsInnerSource']
---

# ProvisioningcompletedAccountRequestsInnerSource

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
from sailpoint.triggers.models.provisioningcompleted_account_requests_inner_source import ProvisioningcompletedAccountRequestsInnerSource

provisioningcompleted_account_requests_inner_source = ProvisioningcompletedAccountRequestsInnerSource(
id='4e4d982dddff4267ab12f0f1e72b5a6d',
type='SOURCE',
name='Corporate Active Directory'
)

```
[[Back to top]](#) 

