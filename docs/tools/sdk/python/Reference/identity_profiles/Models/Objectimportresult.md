---
id: objectimportresult
title: Objectimportresult
pagination_label: Objectimportresult
sidebar_label: Objectimportresult
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Objectimportresult', 'Objectimportresult'] 
slug: /tools/sdk/python/identity-profiles/models/objectimportresult
tags: ['SDK', 'Software Development Kit', 'Objectimportresult', 'Objectimportresult']
---

# Objectimportresult

Response model for import of a single object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**infos** | [**[]Spconfigmessage**](spconfigmessage) | Informational messages returned from the target service on import. | [required]
**warnings** | [**[]Spconfigmessage**](spconfigmessage) | Warning messages returned from the target service on import. | [required]
**errors** | [**[]Spconfigmessage**](spconfigmessage) | Error messages returned from the target service on import. | [required]
**imported_objects** | [**[]Importobject**](importobject) | References to objects that were created or updated by the import. | [required]
}

## Example

```python
from sailpoint.identity_profiles.models.objectimportresult import Objectimportresult

objectimportresult = Objectimportresult(
infos=[
                    sailpoint.identity_profiles.models.config_import/export_message.Config Import/Export Message(
                        key = 'UNKNOWN_REFERENCE_RESOLVER', 
                        text = 'Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]', 
                        details = {"details":"message details"}, )
                    ],
warnings=[
                    sailpoint.identity_profiles.models.config_import/export_message.Config Import/Export Message(
                        key = 'UNKNOWN_REFERENCE_RESOLVER', 
                        text = 'Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]', 
                        details = {"details":"message details"}, )
                    ],
errors=[
                    sailpoint.identity_profiles.models.config_import/export_message.Config Import/Export Message(
                        key = 'UNKNOWN_REFERENCE_RESOLVER', 
                        text = 'Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity]', 
                        details = {"details":"message details"}, )
                    ],
imported_objects=[
                    sailpoint.identity_profiles.models.import_object.Import Object(
                        type = 'SOURCE', 
                        id = '2c9180835d191a86015d28455b4b232a', 
                        name = 'HR Active Directory', )
                    ]
)

```
[[Back to top]](#) 

