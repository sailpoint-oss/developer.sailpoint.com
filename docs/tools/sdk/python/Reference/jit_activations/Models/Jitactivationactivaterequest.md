---
id: jitactivationactivaterequest
title: Jitactivationactivaterequest
pagination_label: Jitactivationactivaterequest
sidebar_label: Jitactivationactivaterequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Jitactivationactivaterequest', 'Jitactivationactivaterequest'] 
slug: /tools/sdk/python/jit-activations/models/jitactivationactivaterequest
tags: ['SDK', 'Software Development Kit', 'Jitactivationactivaterequest', 'Jitactivationactivaterequest']
---

# Jitactivationactivaterequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_id** | **str** | Entitlement connection identifier for the activation. | [required]
**activation_period_mins** | **int** | Requested activation duration in minutes. | [required]
}

## Example

```python
from sailpoint.jit_activations.models.jitactivationactivaterequest import Jitactivationactivaterequest

jitactivationactivaterequest = Jitactivationactivaterequest(
connection_id='757fb803-9024-5861-e510-83a56e4c5bd3',
activation_period_mins=120
)

```
[[Back to top]](#) 

