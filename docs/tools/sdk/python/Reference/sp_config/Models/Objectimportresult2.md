---
id: objectimportresult2
title: Objectimportresult2
pagination_label: Objectimportresult2
sidebar_label: Objectimportresult2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Objectimportresult2', 'Objectimportresult2'] 
slug: /tools/sdk/python/sp-config/models/objectimportresult2
tags: ['SDK', 'Software Development Kit', 'Objectimportresult2', 'Objectimportresult2']
---

# Objectimportresult2

Response model for import of a single object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**infos** | [**[]Spconfigmessage2**](spconfigmessage2) | Informational messages returned from the target service on import. | [required]
**warnings** | [**[]Spconfigmessage2**](spconfigmessage2) | Warning messages returned from the target service on import. | [required]
**errors** | [**[]Spconfigmessage2**](spconfigmessage2) | Error messages returned from the target service on import. | [required]
**imported_objects** | [**[]Importobject**](importobject) | References to objects that were created or updated by the import. | [required]
}

## Example

```python
from sailpoint.sp_config.models.objectimportresult2 import Objectimportresult2

objectimportresult2 = Objectimportresult2(
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

