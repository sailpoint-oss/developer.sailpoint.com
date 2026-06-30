---
id: jitactivationactivateresponse
title: Jitactivationactivateresponse
pagination_label: Jitactivationactivateresponse
sidebar_label: Jitactivationactivateresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Jitactivationactivateresponse', 'Jitactivationactivateresponse'] 
slug: /tools/sdk/python/jit-activations/models/jitactivationactivateresponse
tags: ['SDK', 'Software Development Kit', 'Jitactivationactivateresponse', 'Jitactivationactivateresponse']
---

# Jitactivationactivateresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Workflow or business identifier for this activation. | [required]
**activation_id** | **str** | Persistent activation record identifier for this JIT activation. | [required]
**connection_id** | **str** | Entitlement connection identifier for the activation. | [required]
**activation_period_mins** | **int** | Activation duration in minutes for this workflow. | [required]
**status** | [**Activationworkflowstatus**](activationworkflowstatus) |  | [required]
**start_time** | **datetime** | Time when the activation workflow was started (ISO-8601). | [required]
}

## Example

```python
from sailpoint.jit_activations.models.jitactivationactivateresponse import Jitactivationactivateresponse

jitactivationactivateresponse = Jitactivationactivateresponse(
id='jit-activation-abc123',
activation_id='8a9b0c1d-2e3f-4a5b-6c7d-8e9f0a1b2c3d',
connection_id='757fb803-9024-5861-e510-83a56e4c5bd3',
activation_period_mins=120,
status='PROVISIONED',
start_time='2025-10-11T21:23:15Z'
)

```
[[Back to top]](#) 

