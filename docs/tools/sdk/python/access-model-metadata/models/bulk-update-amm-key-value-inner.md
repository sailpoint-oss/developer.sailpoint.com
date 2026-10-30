# BulkUpdateAMMKeyValueInner

# BulkUpdateAMMKeyValueInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | the key of metadata attribute | [required]
**values** | **[]str** | the values of attribute to be updated | [required]
\}

## Example

```python
from sailpoint.access_model_metadata.models.bulk_update_amm_key_value_inner import BulkUpdateAMMKeyValueInner

bulk_update_amm_key_value_inner = BulkUpdateAMMKeyValueInner(
attribute='iscFederalClassifications',
values=["secret"]
)

```
[[Back to top]](#) 

