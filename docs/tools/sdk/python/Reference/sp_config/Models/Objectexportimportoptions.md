---
id: objectexportimportoptions
title: Objectexportimportoptions
pagination_label: Objectexportimportoptions
sidebar_label: Objectexportimportoptions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Objectexportimportoptions', 'Objectexportimportoptions'] 
slug: /tools/sdk/python/sp-config/models/objectexportimportoptions
tags: ['SDK', 'Software Development Kit', 'Objectexportimportoptions', 'Objectexportimportoptions']
---

# Objectexportimportoptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**included_ids** | **[]str** | Object ids to be included in an import or export. | [optional] 
**included_names** | **[]str** | Object names to be included in an import or export. | [optional] 
}

## Example

```python
from sailpoint.sp_config.models.objectexportimportoptions import Objectexportimportoptions

objectexportimportoptions = Objectexportimportoptions(
included_ids=[
                    'be9e116d-08e1-49fc-ab7f-fa585e96c9e4'
                    ],
included_names=[
                    'Test Object'
                    ]
)

```
[[Back to top]](#) 

