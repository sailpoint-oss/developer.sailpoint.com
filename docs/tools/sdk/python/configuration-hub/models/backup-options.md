# BackupOptions

# BackupOptions

Backup options control what will be included in the backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_types** | **[]str** | Object type names to be included in a Configuration Hub backup command. | [optional] 
**object_options** | [**map[string]ObjectExportImportNames**](object-export-import-names) | Additional options targeting specific objects related to each item in the includeTypes field. | [optional] 
\}

## Example

```python
from sailpoint.configuration_hub.models.backup_options import BackupOptions

backup_options = BackupOptions(
include_types=[
                    'TRIGGER_SUBSCRIPTION'
                    ],
object_options={"TRIGGER_SUBSCRIPTION":{"includedNames":["Trigger Subscription name"]}}
)

```
[[Back to top]](#) 

