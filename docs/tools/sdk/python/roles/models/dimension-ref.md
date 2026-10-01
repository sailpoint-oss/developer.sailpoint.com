# DimensionRef

# DimensionRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'DIMENSION' ] | The type of the object to which this reference applies | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
\}

## Example

```python
from sailpoint.roles.models.dimension_ref import DimensionRef

dimension_ref = DimensionRef(
type='DIMENSION',
id='2c91808568c529c60168cca6f90c1313',
name='Role 2'
)

```
[[Back to top]](#) 

