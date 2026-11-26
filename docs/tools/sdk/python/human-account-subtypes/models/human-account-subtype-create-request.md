# HumanAccountSubtypeCreateRequest

# HumanAccountSubtypeCreateRequest

Request body to create a human account subtype for a source. The source ID comes from the path.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**technical_name** | **str** | Technical name of the subtype. | [required]
**display_name** | **str** | Display name of the subtype. | [required]
**description** | **str** | Description of the subtype. | [optional] 
**default** | **bool** | Whether this subtype is the default human account subtype of the source. | [optional] [default to False]
\}

## Example

```python
from sailpoint.human_account_subtypes.models.human_account_subtype_create_request import HumanAccountSubtypeCreateRequest

human_account_subtype_create_request = HumanAccountSubtypeCreateRequest(
technical_name='contractor',
display_name='Contractor',
description='Contractors with a limited account lifecycle',
default=False
)

```
[[Back to top]](#) 

