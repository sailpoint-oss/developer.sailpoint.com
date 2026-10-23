# Referenceresponse

# Referenceresponse

Response reference: required id and type; optional name when display metadata resolves (omitted if not). For request bodies use ReferenceInput (id and type only). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the referenced object. | [required]
**name** | **str** | Optional display name when metadata resolves. Omitted when unknown or not resolvable. | [optional] [readonly] 
**type** | **str** | The type of the referenced object. | [required]
\}

## Example

```python
from sailpoint.sod_violations.models.referenceresponse import Referenceresponse

referenceresponse = Referenceresponse(
id='3e07886555ed43cfb83c85c58d2016e6',
name='John Doe',
type='IDENTITY'
)

```
[[Back to top]](#) 

