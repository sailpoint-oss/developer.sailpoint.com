---
id: taskreturndetails
title: Taskreturndetails
pagination_label: Taskreturndetails
sidebar_label: Taskreturndetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Taskreturndetails', 'Taskreturndetails'] 
slug: /tools/sdk/python/machine-identities/models/taskreturndetails
tags: ['SDK', 'Software Development Kit', 'Taskreturndetails', 'Taskreturndetails']
---

# Taskreturndetails

Task return details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Display name of the TaskReturnDetails | [required]
**attribute_name** | **str** | Attribute the TaskReturnDetails is for | [required]
}

## Example

```python
from sailpoint.machine_identities.models.taskreturndetails import Taskreturndetails

taskreturndetails = Taskreturndetails(
name='label',
attribute_name='identityCount'
)

```
[[Back to top]](#) 

