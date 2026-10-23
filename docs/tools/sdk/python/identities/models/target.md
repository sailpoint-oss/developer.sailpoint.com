# Target

# Target


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Target ID | [optional] 
**type** |  **Enum** [  'APPLICATION',    'IDENTITY' ] | Target type | [optional] 
**name** | **str** | Target name | [optional] 
\}

## Example

```python
from sailpoint.identities.models.target import Target

target = Target(
id='c6dc37bf508149b28ce5b7d90ca4bbf9',
type='APPLICATION',
name='Active Directory [source]'
)

```
[[Back to top]](#) 

