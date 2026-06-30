---
id: approvalsummary
title: Approvalsummary
pagination_label: Approvalsummary
sidebar_label: Approvalsummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvalsummary', 'Approvalsummary'] 
slug: /tools/sdk/python/access-request-approvals/models/approvalsummary
tags: ['SDK', 'Software Development Kit', 'Approvalsummary', 'Approvalsummary']
---

# Approvalsummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pending** | **int** | The number of pending access requests approvals. | [optional] 
**approved** | **int** | The number of approved access requests approvals. | [optional] 
**rejected** | **int** | The number of rejected access requests approvals. | [optional] 
}

## Example

```python
from sailpoint.access_request_approvals.models.approvalsummary import Approvalsummary

approvalsummary = Approvalsummary(
pending=0,
approved=0,
rejected=0
)

```
[[Back to top]](#) 

