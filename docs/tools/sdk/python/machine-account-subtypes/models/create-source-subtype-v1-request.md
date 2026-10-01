# CreateSourceSubtypeV1Request

# CreateSourceSubtypeV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_id** | **str** | ID of the source where subtype is created. | [required]
**technical_name** | **str** | Technical name of the subtype. | [required]
**display_name** | **str** | Display name of the subtype. | [required]
**description** | **str** | Description of the subtype. | [required]
**type** | **str** | Type of the subtype. | [optional] 
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.create_source_subtype_v1_request import CreateSourceSubtypeV1Request

create_source_subtype_v1_request = CreateSourceSubtypeV1Request(
source_id='6d0458373bec4b4b80460992b76016da',
technical_name='foo',
display_name='Mr Foo',
description='fighters',
type='MACHINE'
)

```
[[Back to top]](#) 

