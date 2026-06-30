---
id: jitactivationdeactivateresponse
title: Jitactivationdeactivateresponse
pagination_label: Jitactivationdeactivateresponse
sidebar_label: Jitactivationdeactivateresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Jitactivationdeactivateresponse', 'Jitactivationdeactivateresponse'] 
slug: /tools/sdk/python/jit-activations/models/jitactivationdeactivateresponse
tags: ['SDK', 'Software Development Kit', 'Jitactivationdeactivateresponse', 'Jitactivationdeactivateresponse']
---

# Jitactivationdeactivateresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Workflow or business identifier for this activation. | [required]
**activation_id** | **str** | Persistent activation record identifier for this JIT activation. | [required]
**connection_id** | **str** | Entitlement connection identifier for the activation. | [required]
**status** | [**Activationworkflowstatus**](activationworkflowstatus) |  | [required]
**start_time** | **datetime** | Time associated with this deactivation request (ISO-8601). | [required]
}

## Example

```python
from sailpoint.jit_activations.models.jitactivationdeactivateresponse import Jitactivationdeactivateresponse

jitactivationdeactivateresponse = Jitactivationdeactivateresponse(
id='jit-activation-abc123',
activation_id='8a9b0c1d-2e3f-4a5b-6c7d-8e9f0a1b2c3d',
connection_id='757fb803-9024-5861-e510-83a56e4c5bd3',
status='PROVISIONED',
start_time='2025-10-11T21:23:15Z'
)

```
[[Back to top]](#) 

