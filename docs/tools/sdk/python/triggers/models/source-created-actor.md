# SourceCreatedActor

# SourceCreatedActor

Identity who created the source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity who created the source. | [required]
**id** | **str** | ID of identity who created the source. | [required]
**name** | **str** | Display name of identity who created the source. | [required]
\}

## Example

```python
from sailpoint.triggers.models.source_created_actor import SourceCreatedActor

source_created_actor = SourceCreatedActor(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 

