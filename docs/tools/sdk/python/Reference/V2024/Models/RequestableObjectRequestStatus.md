---
id: v2024-requestable-object-request-status
title: RequestableObjectRequestStatus
pagination_label: RequestableObjectRequestStatus
sidebar_label: RequestableObjectRequestStatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestableObjectRequestStatus', 'V2024RequestableObjectRequestStatus'] 
slug: /tools/sdk/python/v2024/models/requestable-object-request-status
tags: ['SDK', 'Software Development Kit', 'RequestableObjectRequestStatus', 'V2024RequestableObjectRequestStatus']
---

# RequestableObjectRequestStatus

Status indicating the ability of an access request for the object to be made by or on behalf of the identity specified by *identity-id*. *AVAILABLE* indicates the object is available to request. *PENDING* indicates the object is unavailable because the identity has a pending request in flight. *ASSIGNED* indicates the object is unavailable because the identity already has the indicated role or access profile. If *identity-id* is not specified (allowed only for admin users), then status will be *AVAILABLE* for all results.

## Enum

* `AVAILABLE` (value: `'AVAILABLE'`)

* `PENDING` (value: `'PENDING'`)

* `ASSIGNED` (value: `'ASSIGNED'`)

[[Back to top]](#) 

