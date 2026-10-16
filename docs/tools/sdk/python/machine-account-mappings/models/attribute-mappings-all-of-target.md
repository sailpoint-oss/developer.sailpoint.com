# AttributeMappingsAllOfTarget

# AttributeMappingsAllOfTarget

Targeted Entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCOUNT',    'IDENTITY',    'OWNER_ACCOUNT',    'OWNER_IDENTITY' ] | The type of target entity | [optional] 
**attribute_name** | **str** | Name of the targeted attribute | [optional] 
**source_id** | **str** | The ID of Source | [optional] 
\}

## Example

```python
from sailpoint.machine_account_mappings.models.attribute_mappings_all_of_target import AttributeMappingsAllOfTarget

attribute_mappings_all_of_target = AttributeMappingsAllOfTarget(
type='IDENTITY',
attribute_name='businessApplication',
source_id='2c9180835d2e5168015d32f890ca1581'
)

```
[[Back to top]](#) 

