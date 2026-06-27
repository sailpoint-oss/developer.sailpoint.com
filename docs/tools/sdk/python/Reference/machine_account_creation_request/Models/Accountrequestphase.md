---
id: accountrequestphase
title: Accountrequestphase
pagination_label: Accountrequestphase
sidebar_label: Accountrequestphase
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountrequestphase', 'Accountrequestphase'] 
slug: /tools/sdk/python/machine-account-creation-request/models/accountrequestphase
tags: ['SDK', 'Software Development Kit', 'Accountrequestphase', 'Accountrequestphase']
---

# Accountrequestphase

Contains detailed information about each phase in the account request process, including its type, current state, and relevant timestamps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** |  **Enum** [  'APPROVAL_PHASE',    'PROVISIONING_PHASE' ] | Enum of account request phase type | [optional] 
**state** | [**Accountrequestphasestate**](accountrequestphasestate) |  | [optional] 
**started** | **datetime** | Start date of account request phase. | [optional] [readonly] 
**finished** | **datetime** | Finish date of account request phase. | [optional] [readonly] 
}

## Example

```python
from sailpoint.machine_account_creation_request.models.accountrequestphase import Accountrequestphase

accountrequestphase = Accountrequestphase(
name='APPROVAL_PHASE',
state='APPROVED',
started='2026-01-21T11:43:22.432Z',
finished='2026-01-21T11:45:22.432Z'
)

```
[[Back to top]](#) 

