# ExportOptions

# ExportOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_types** | **[]str** | Object type names to be excluded from an sp-config export command. | [optional] 
**include_types** | **[]str** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**object_options** | [**map[string]ObjectExportImportOptions**](object-export-import-options) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 
\}

## Example

```python
from sailpoint.sp_config.models.export_options import ExportOptions

export_options = ExportOptions(
exclude_types=[
                    'SOURCE'
                    ],
include_types=[
                    'TRIGGER_SUBSCRIPTION'
                    ],
object_options={"TRIGGER_SUBSCRIPTION":{"includedIds":["be9e116d-08e1-49fc-ab7f-fa585e96c9e4"],"includedNames":["Test 2"]}}
)

```
[[Back to top]](#) 

