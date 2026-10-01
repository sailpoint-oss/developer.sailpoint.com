# ManagedClientRequest

# ManagedClientRequest

Managed Client Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Cluster ID that the ManagedClient is linked to | [required]
**description** | **str** | description for the ManagedClient to create | [optional] 
**name** | **str** | name for the ManagedClient to create | [optional] 
**type** | **str** | Type of the ManagedClient (VA, CCG) to create | [optional] 
\}

## Example

```python
from sailpoint.managed_clients.models.managed_client_request import ManagedClientRequest

managed_client_request = ManagedClientRequest(
cluster_id='aClusterId',
description='A short description of the ManagedClient',
name='aName',
type='VA'
)

```
[[Back to top]](#) 

