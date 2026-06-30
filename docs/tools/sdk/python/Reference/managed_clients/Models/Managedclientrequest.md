---
id: managedclientrequest
title: Managedclientrequest
pagination_label: Managedclientrequest
sidebar_label: Managedclientrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Managedclientrequest', 'Managedclientrequest'] 
slug: /tools/sdk/python/managed-clients/models/managedclientrequest
tags: ['SDK', 'Software Development Kit', 'Managedclientrequest', 'Managedclientrequest']
---

# Managedclientrequest

Managed Client Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Cluster ID that the ManagedClient is linked to | [required]
**description** | **str** | description for the ManagedClient to create | [optional] 
**name** | **str** | name for the ManagedClient to create | [optional] 
**type** | **str** | Type of the ManagedClient (VA, CCG) to create | [optional] 
}

## Example

```python
from sailpoint.managed_clients.models.managedclientrequest import Managedclientrequest

managedclientrequest = Managedclientrequest(
cluster_id='aClusterId',
description='A short description of the ManagedClient',
name='aName',
type='VA'
)

```
[[Back to top]](#) 

