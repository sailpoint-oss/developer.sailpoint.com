---
id: jitaccessoperationrequest-value
title: JitaccessoperationrequestValue
pagination_label: JitaccessoperationrequestValue
sidebar_label: JitaccessoperationrequestValue
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'JitaccessoperationrequestValue', 'JitaccessoperationrequestValue'] 
slug: /tools/sdk/python/jit-access/models/jitaccessoperationrequest-value
tags: ['SDK', 'Software Development Kit', 'JitaccessoperationrequestValue', 'JitaccessoperationrequestValue']
---

# JitaccessoperationrequestValue

New value. Type depends on **path**: arrays of strings for `/entitlementIds` and `/notificationRecipients`, integer for `*Mins` paths, string for `/notificationTemplate`, boolean for `/applyToFutureAssignments`. Use `null` when clearing nullable fields (for example `/notificationTemplate` or `*Mins` paths). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
}

## Example

```python
from sailpoint.jit_access.models.jitaccessoperationrequest_value import JitaccessoperationrequestValue

jitaccessoperationrequest_value = JitaccessoperationrequestValue(
)

```
[[Back to top]](#) 

