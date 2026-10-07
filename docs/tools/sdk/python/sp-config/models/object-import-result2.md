# ObjectImportResult2

# ObjectImportResult2

Response model for import of a single object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**infos** | [**[]SpConfigMessage2**](sp-config-message2) | Informational messages returned from the target service on import. | [required]
**warnings** | [**[]SpConfigMessage2**](sp-config-message2) | Warning messages returned from the target service on import. | [required]
**errors** | [**[]SpConfigMessage2**](sp-config-message2) | Error messages returned from the target service on import. | [required]
**imported_objects** | [**[]ImportObject**](import-object) | References to objects that were created or updated by the import. | [required]
\}

## Example

```python
from sailpoint.sp_config.models.object_import_result2 import ObjectImportResult2

object_import_result2 = ObjectImportResult2(
infos=[
                    sailpoint.sp_config.models.config_import/export_message.Config Import/Export Message(
                        key = 'UNKNOWN_REFERENCE_RESOLVER', 
                        text = 'Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]', 
                        details = {"details":"message details"}, )
                    ],
warnings=[
                    sailpoint.sp_config.models.config_import/export_message.Config Import/Export Message(
                        key = 'UNKNOWN_REFERENCE_RESOLVER', 
                        text = 'Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]', 
                        details = {"details":"message details"}, )
                    ],
errors=[
                    sailpoint.sp_config.models.config_import/export_message.Config Import/Export Message(
                        key = 'UNKNOWN_REFERENCE_RESOLVER', 
                        text = 'Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]', 
                        details = {"details":"message details"}, )
                    ],
imported_objects=[
                    sailpoint.sp_config.models.import_object.Import Object(
                        type = 'SOURCE', 
                        id = '2c9180835d191a86015d28455b4b232a', 
                        name = 'HR Active Directory', )
                    ]
)

```
[[Back to top]](#) 

