---
id: import-sp-config-v1-request
title: ImportSpConfigV1Request
pagination_label: ImportSpConfigV1Request
sidebar_label: ImportSpConfigV1Request
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ImportSpConfigV1Request', 'ImportSpConfigV1Request'] 
slug: /tools/sdk/python/sp-config/models/import-sp-config-v1-request
tags: ['SDK', 'Software Development Kit', 'ImportSpConfigV1Request', 'ImportSpConfigV1Request']
---

# ImportSpConfigV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | JSON file containing the objects to be imported. | [required]
**options** | [**Importoptions**](importoptions) |  | [optional] 
}

## Example

```python
from sailpoint.sp_config.models.import_sp_config_v1_request import ImportSpConfigV1Request

import_sp_config_v1_request = ImportSpConfigV1Request(
data=bytes(b'blah'),
options=sailpoint.sp_config.models.import_options.Import Options(
                    exclude_types = [
                        'SOURCE'
                        ], 
                    include_types = [
                        'TRIGGER_SUBSCRIPTION'
                        ], 
                    object_options = {"TRIGGER_SUBSCRIPTION":{"includedIds":["be9e116d-08e1-49fc-ab7f-fa585e96c9e4"],"includedNames":["Test 2"]}}, 
                    default_references = [
                        'TRIGGER_SUBSCRIPTION'
                        ], 
                    exclude_backup = False, )
)

```
[[Back to top]](#) 

