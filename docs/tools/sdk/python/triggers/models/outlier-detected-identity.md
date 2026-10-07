# OutlierDetectedIdentity

# OutlierDetectedIdentity

Identity with unusual access, relative to its peers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Identity's DTO type. | [required]
**id** | **str** | Identity's unique ID. | [required]
**name** | **str** | Identity's name. | [required]
\}

## Example

```python
from sailpoint.triggers.models.outlier_detected_identity import OutlierDetectedIdentity

outlier_detected_identity = OutlierDetectedIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

