# Rolepropagationconfigresponse

# Rolepropagationconfigresponse

Role Change Propagation Config Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Indicates if the Role Change Propagation process is enabled for the tenant | [optional] [default to False]
**enabled_date** | **datetime** | The time when Role Change Propagation Process was last enabled on the tenant | [optional] 
**created_date** | **datetime** | The time when Role Change Propagation Configuration was first created for the tenant | [optional] 
**modified_date** | **datetime** | The time when Role Change Propagation Config was updated on the tenant | [optional] 
\}

## Example

```python
from sailpoint.role_propagation.models.rolepropagationconfigresponse import Rolepropagationconfigresponse

rolepropagationconfigresponse = Rolepropagationconfigresponse(
enabled=True,
enabled_date='2026-01-27T08:07:20Z',
created_date='2025-02-18T20:20:36Z',
modified_date='2026-01-27T08:07:20Z'
)

```
[[Back to top]](#) 

