# SourceSchemasInner

# SourceSchemasInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'CONNECTOR_SCHEMA' ] | Type of object being referenced. | [optional] 
**id** | **str** | Schema ID. | [optional] 
**name** | **str** | Schema's human-readable display name. | [optional] 
\}

## Example

```python
from sailpoint.sources.models.source_schemas_inner import SourceSchemasInner

source_schemas_inner = SourceSchemasInner(
type='CONNECTOR_SCHEMA',
id='2c91808568c529c60168cca6f90c1777',
name='MySchema'
)

```
[[Back to top]](#) 

