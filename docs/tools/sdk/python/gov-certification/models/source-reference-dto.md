# SourceReferenceDTO

# SourceReferenceDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The source ID | [optional] 
**type** | **str** | The source type, will always be \"SOURCE\" | [optional] 
**name** | **str** | The source name | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.source_reference_dto import SourceReferenceDTO

source_reference_dto = SourceReferenceDTO(
id='2c9180827ca885d7017ca8ce28a000eb',
type='SOURCE',
name='ODS-AD-Source'
)

```
[[Back to top]](#) 

