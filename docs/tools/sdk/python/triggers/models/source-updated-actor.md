# SourceUpdatedActor

# SourceUpdatedActor

Identity who updated the source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity who updated the source. | [required]
**id** | **str** | ID of identity who updated the source. | [optional] 
**name** | **str** | Display name of identity who updated the source. | [required]
\}

## Example

```python
from sailpoint.triggers.models.source_updated_actor import SourceUpdatedActor

source_updated_actor = SourceUpdatedActor(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 

