---
id: jitactivationconfigresponse
title: Jitactivationconfigresponse
pagination_label: Jitactivationconfigresponse
sidebar_label: Jitactivationconfigresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Jitactivationconfigresponse', 'Jitactivationconfigresponse'] 
slug: /tools/sdk/python/jit-access/models/jitactivationconfigresponse
tags: ['SDK', 'Software Development Kit', 'Jitactivationconfigresponse', 'Jitactivationconfigresponse']
---

# Jitactivationconfigresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of this JIT activation configuration instance (persisted config id).  | [required]
**entitlement_ids** | **[]str** | Entitlement IDs governed by JIT activation policy. May be a single-element array when only one entitlement is in scope.  | [optional] 
**max_activation_period_mins** | **int** | Maximum allowed JIT activation duration for a single grant, in minutes; null if unset. | [optional] 
**max_activation_period_extension_mins** | **int** | Maximum allowed extension of an active JIT activation, in minutes; null if unset. | [optional] 
**default_max_activation_period_mins** | **int** | Default activation duration offered when a user requests JIT access, in minutes; null if unset. | [optional] 
**default_max_activation_period_extension_mins** | **int** | Default extension duration offered for an active JIT activation, in minutes; null if unset. | [optional] 
**notification_recipients** | **[]str** | Email addresses notified for JIT activation events (for example policy owners or a shared mailbox).  | [optional] 
**notification_template** | **str** | Name or key of the email template used for JIT activation notifications; null if unset. | [optional] 
**apply_to_future_assignments** | **bool** | Whether the policy applies to future entitlement assignments. | [required]
}

## Example

```python
from sailpoint.jit_access.models.jitactivationconfigresponse import Jitactivationconfigresponse

jitactivationconfigresponse = Jitactivationconfigresponse(
id='6d38a587-302a-41d1-a3b1-ffae2c25c960',
entitlement_ids=["ae735f40-4de9-4163-801d-4a1444e59d35","38439bbc-264b-447b-acac-a182a466b0e9"],
max_activation_period_mins=120,
max_activation_period_extension_mins=30,
default_max_activation_period_mins=60,
default_max_activation_period_extension_mins=15,
notification_recipients=["owner@example.com"],
notification_template='jit-activation-default',
apply_to_future_assignments=True
)

```
[[Back to top]](#) 

