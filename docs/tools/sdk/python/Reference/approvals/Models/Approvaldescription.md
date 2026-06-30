---
id: approvaldescription
title: Approvaldescription
pagination_label: Approvaldescription
sidebar_label: Approvaldescription
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvaldescription', 'Approvaldescription'] 
slug: /tools/sdk/python/approvals/models/approvaldescription
tags: ['SDK', 'Software Development Kit', 'Approvaldescription', 'Approvaldescription']
---

# Approvaldescription

The description of what the approval is asking for

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The description of what the approval is asking for | [optional] 
**locale** | **str** | What locale the description of the approval is using | [optional] 
}

## Example

```python
from sailpoint.approvals.models.approvaldescription import Approvaldescription

approvaldescription = Approvaldescription(
value='This access allows viewing and editing of workflow resource',
locale='en_US'
)

```
[[Back to top]](#) 

