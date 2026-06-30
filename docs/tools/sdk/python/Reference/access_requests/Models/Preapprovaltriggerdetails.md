---
id: preapprovaltriggerdetails
title: Preapprovaltriggerdetails
pagination_label: Preapprovaltriggerdetails
sidebar_label: Preapprovaltriggerdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Preapprovaltriggerdetails', 'Preapprovaltriggerdetails'] 
slug: /tools/sdk/python/access-requests/models/preapprovaltriggerdetails
tags: ['SDK', 'Software Development Kit', 'Preapprovaltriggerdetails', 'Preapprovaltriggerdetails']
---

# Preapprovaltriggerdetails

Provides additional details about the pre-approval trigger for this request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment left for the pre-approval decision | [optional] 
**reviewer** | **str** | The reviewer of the pre-approval decision | [optional] 
**decision** |  **Enum** [  'APPROVED',    'REJECTED' ] | The decision of the pre-approval trigger | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.preapprovaltriggerdetails import Preapprovaltriggerdetails

preapprovaltriggerdetails = Preapprovaltriggerdetails(
comment='Access is Approved',
reviewer='John Doe',
decision='APPROVED'
)

```
[[Back to top]](#) 

