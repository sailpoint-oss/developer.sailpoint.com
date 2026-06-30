---
id: jitactivationextendrequest
title: Jitactivationextendrequest
pagination_label: Jitactivationextendrequest
sidebar_label: Jitactivationextendrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Jitactivationextendrequest', 'Jitactivationextendrequest'] 
slug: /tools/sdk/python/jit-activations/models/jitactivationextendrequest
tags: ['SDK', 'Software Development Kit', 'Jitactivationextendrequest', 'Jitactivationextendrequest']
---

# Jitactivationextendrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_id** | **str** | Entitlement connection identifier for the activation to extend. | [required]
**activation_period_extension_mins** | **int** | Number of minutes to extend the activation period. | [required]
}

## Example

```python
from sailpoint.jit_activations.models.jitactivationextendrequest import Jitactivationextendrequest

jitactivationextendrequest = Jitactivationextendrequest(
connection_id='757fb803-9024-5861-e510-83a56e4c5bd3',
activation_period_extension_mins=120
)

```
[[Back to top]](#) 

