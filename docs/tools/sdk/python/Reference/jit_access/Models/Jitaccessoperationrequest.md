---
id: jitaccessoperationrequest
title: Jitaccessoperationrequest
pagination_label: Jitaccessoperationrequest
sidebar_label: Jitaccessoperationrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Jitaccessoperationrequest', 'Jitaccessoperationrequest'] 
slug: /tools/sdk/python/jit-access/models/jitaccessoperationrequest
tags: ['SDK', 'Software Development Kit', 'Jitaccessoperationrequest', 'Jitaccessoperationrequest']
---

# Jitaccessoperationrequest

A single replace operation applied to JIT activation configuration. Only **replace** is supported. **path** must be one of the allowed JSON Pointer-style paths. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** |  **Enum** [  'replace' ] | Operation type. Defaults to `replace` if omitted. | [optional] [default to 'replace']
**path** |  **Enum** [  '/entitlementIds',    '/maxActivationPeriodMins',    '/maxActivationPeriodExtensionMins',    '/defaultMaxActivationPeriodMins',    '/defaultMaxActivationPeriodExtensionMins',    '/notificationRecipients',    '/notificationTemplate',    '/applyToFutureAssignments' ] | Path to replace. Only the following JSON Pointer-style paths are supported.  | [required]
**value** | [**JitaccessoperationrequestValue**](jitaccessoperationrequest-value) |  | [required]
}

## Example

```python
from sailpoint.jit_access.models.jitaccessoperationrequest import Jitaccessoperationrequest

jitaccessoperationrequest = Jitaccessoperationrequest(
op='replace',
path='/maxActivationPeriodMins',
value=60
)

```
[[Back to top]](#) 

