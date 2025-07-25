---
id: v2025-import-sp-config-request
title: ImportSpConfigRequest
pagination_label: ImportSpConfigRequest
sidebar_label: ImportSpConfigRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ImportSpConfigRequest', 'V2025ImportSpConfigRequest'] 
slug: /tools/sdk/python/v2025/models/import-sp-config-request
tags: ['SDK', 'Software Development Kit', 'ImportSpConfigRequest', 'V2025ImportSpConfigRequest']
---

# ImportSpConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | JSON file containing the objects to be imported. | [required]
**options** | [**ImportOptions**](import-options) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.import_sp_config_request import ImportSpConfigRequest

import_sp_config_request = ImportSpConfigRequest(
data=bytes(b'blah'),
options=sailpoint.v2025.models.import_options.Import Options(
                    exclude_types = [
                        'SOURCE'
                        ], 
                    include_types = [
                        'TRIGGER_SUBSCRIPTION'
                        ], 
                    object_options = {TRIGGER_SUBSCRIPTION={includedIds=[be9e116d-08e1-49fc-ab7f-fa585e96c9e4], includedNames=[Test 2]}}, 
                    default_references = [
                        'TRIGGER_SUBSCRIPTION'
                        ], 
                    exclude_backup = False, )
)

```
[[Back to top]](#) 

