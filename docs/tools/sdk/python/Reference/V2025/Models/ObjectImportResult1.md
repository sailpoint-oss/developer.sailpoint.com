---
id: v2025-object-import-result1
title: ObjectImportResult1
pagination_label: ObjectImportResult1
sidebar_label: ObjectImportResult1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ObjectImportResult1', 'V2025ObjectImportResult1'] 
slug: /tools/sdk/python/v2025/models/object-import-result1
tags: ['SDK', 'Software Development Kit', 'ObjectImportResult1', 'V2025ObjectImportResult1']
---

# ObjectImportResult1

Response model for import of a single object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**infos** | [**[]SpConfigMessage1**](sp-config-message1) | Informational messages returned from the target service on import. | [required]
**warnings** | [**[]SpConfigMessage1**](sp-config-message1) | Warning messages returned from the target service on import. | [required]
**errors** | [**[]SpConfigMessage1**](sp-config-message1) | Error messages returned from the target service on import. | [required]
**imported_objects** | [**[]ImportObject**](import-object) | References to objects that were created or updated by the import. | [required]
}

## Example

```python
from sailpoint.v2025.models.object_import_result1 import ObjectImportResult1

object_import_result1 = ObjectImportResult1(
infos=[
                    sailpoint.v2025.models.config_import/export_message.Config Import/Export Message(
                        key = 'UNKNOWN_REFERENCE_RESOLVER', 
                        text = 'Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]', 
                        details = {details=message details}, )
                    ],
warnings=[
                    sailpoint.v2025.models.config_import/export_message.Config Import/Export Message(
                        key = 'UNKNOWN_REFERENCE_RESOLVER', 
                        text = 'Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]', 
                        details = {details=message details}, )
                    ],
errors=[
                    sailpoint.v2025.models.config_import/export_message.Config Import/Export Message(
                        key = 'UNKNOWN_REFERENCE_RESOLVER', 
                        text = 'Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]', 
                        details = {details=message details}, )
                    ],
imported_objects=[
                    sailpoint.v2025.models.import_object.ImportObject(
                        type = 'SOURCE', 
                        id = '2c9180835d191a86015d28455b4b232a', 
                        name = 'HR Active Directory', )
                    ]
)

```
[[Back to top]](#) 

