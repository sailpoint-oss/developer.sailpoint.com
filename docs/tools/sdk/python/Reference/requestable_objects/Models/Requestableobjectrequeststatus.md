---
id: requestableobjectrequeststatus
title: Requestableobjectrequeststatus
pagination_label: Requestableobjectrequeststatus
sidebar_label: Requestableobjectrequeststatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Requestableobjectrequeststatus', 'Requestableobjectrequeststatus'] 
slug: /tools/sdk/python/requestable-objects/models/requestableobjectrequeststatus
tags: ['SDK', 'Software Development Kit', 'Requestableobjectrequeststatus', 'Requestableobjectrequeststatus']
---

# Requestableobjectrequeststatus

Status indicating the ability of an access request for the object to be made by or on behalf of the identity specified by *identity-id*. *AVAILABLE* indicates the object is available to request. *PENDING* indicates the object is unavailable because the identity has a pending request in flight. *ASSIGNED* indicates the object is unavailable because the identity already has the indicated role or access profile. If *identity-id* is not specified (allowed only for admin users), then status will be *AVAILABLE* for all results.

## Enum

* `AVAILABLE` (value: `'AVAILABLE'`)

* `PENDING` (value: `'PENDING'`)

* `ASSIGNED` (value: `'ASSIGNED'`)

[[Back to top]](#) 

