---
id: requested-item-status-request-state
title: RequestedItemStatusRequestState
pagination_label: RequestedItemStatusRequestState
sidebar_label: RequestedItemStatusRequestState
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestedItemStatusRequestState', 'RequestedItemStatusRequestState'] 
slug: /tools/sdk/python/v3/models/requested-item-status-request-state
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusRequestState', 'RequestedItemStatusRequestState']
---

# RequestedItemStatusRequestState

Indicates the state of an access request: * EXECUTING: The request is executing, which indicates the system is doing some processing. * REQUEST_COMPLETED: Indicates the request  has been completed. * CANCELLED: The request was cancelled with no user input. * TERMINATED: The request has been terminated before it was able to complete. * PROVISIONING_VERIFICATION_PENDING: The request has finished any approval steps and provisioning is waiting to be verified. * REJECTED: The request was rejected. * PROVISIONING_FAILED: The request has failed to complete. * NOT_ALL_ITEMS_PROVISIONED: One or more of the requested items failed to complete, but there were one or more  successes. * ERROR: An error occurred during request processing.

## Enum

* `EXECUTING` (value: `'EXECUTING'`)

* `REQUEST_COMPLETED` (value: `'REQUEST_COMPLETED'`)

* `CANCELLED` (value: `'CANCELLED'`)

* `TERMINATED` (value: `'TERMINATED'`)

* `PROVISIONING_VERIFICATION_PENDING` (value: `'PROVISIONING_VERIFICATION_PENDING'`)

* `REJECTED` (value: `'REJECTED'`)

* `PROVISIONING_FAILED` (value: `'PROVISIONING_FAILED'`)

* `NOT_ALL_ITEMS_PROVISIONED` (value: `'NOT_ALL_ITEMS_PROVISIONED'`)

* `ERROR` (value: `'ERROR'`)

[[Back to top]](#) 

