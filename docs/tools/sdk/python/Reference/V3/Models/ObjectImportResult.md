---
id: object-import-result
title: ObjectImportResult
pagination_label: ObjectImportResult
sidebar_label: ObjectImportResult
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ObjectImportResult', 'ObjectImportResult'] 
slug: /tools/sdk/python/v3/models/object-import-result
tags: ['SDK', 'Software Development Kit', 'ObjectImportResult', 'ObjectImportResult']
---

# ObjectImportResult

Response model for import of a single object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**infos** | [**[]SpConfigMessage**](sp-config-message) | Informational messages returned from the target service on import. | [required]
**warnings** | [**[]SpConfigMessage**](sp-config-message) | Warning messages returned from the target service on import. | [required]
**errors** | [**[]SpConfigMessage**](sp-config-message) | Error messages returned from the target service on import. | [required]
**imported_objects** | [**[]ImportObject**](import-object) | References to objects that were created or updated by the import. | [required]
}

## Example

```python
from sailpoint.v3.models.object_import_result import ObjectImportResult

object_import_result = ObjectImportResult(
infos=[
                    sailpoint.v3.models.config_import/export_message.Config Import/Export Message(
                        key = 'UNKNOWN_REFERENCE_RESOLVER', 
                        text = 'Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]', 
                        details = {details=message details}, )
                    ],
warnings=[
                    sailpoint.v3.models.config_import/export_message.Config Import/Export Message(
                        key = 'UNKNOWN_REFERENCE_RESOLVER', 
                        text = 'Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]', 
                        details = {details=message details}, )
                    ],
errors=[
                    sailpoint.v3.models.config_import/export_message.Config Import/Export Message(
                        key = 'UNKNOWN_REFERENCE_RESOLVER', 
                        text = 'Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]', 
                        details = {details=message details}, )
                    ],
imported_objects=[
                    sailpoint.v3.models.import_object.ImportObject(
                        type = 'SOURCE', 
                        id = '2c9180835d191a86015d28455b4b232a', 
                        name = 'HR Active Directory', )
                    ]
)

```
[[Back to top]](#) 

