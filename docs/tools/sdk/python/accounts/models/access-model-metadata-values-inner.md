# AccessModelMetadataValuesInner

# AccessModelMetadataValuesInner

An individual value to assign to the metadata item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The value to assign to the metdata item | [optional] 
**name** | **str** | Display name of the value | [optional] 
**status** | **str** | The status of the individual value | [optional] 
\}

## Example

```python
from sailpoint.accounts.models.access_model_metadata_values_inner import AccessModelMetadataValuesInner

access_model_metadata_values_inner = AccessModelMetadataValuesInner(
value='development',
name='Development',
status='active'
)

```
[[Back to top]](#) 

