# SourceSubtypeV2Profile

# SourceSubtypeV2Profile

Connector variant profile. Reserved for future use and currently always `null`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector variant profile. | [optional] 
**connector_type** | **str** | Connector type of the variant. | [optional] 
**variant** | **str** | Name of the connector variant. | [optional] 
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.source_subtype_v2_profile import SourceSubtypeV2Profile

source_subtype_v2_profile = SourceSubtypeV2Profile(
id='9a4b7d2e-1c3f-4e5a-8b6c-7d8e9f0a1b2c',
connector_type='JDBC',
variant='MySql'
)

```
[[Back to top]](#) 

