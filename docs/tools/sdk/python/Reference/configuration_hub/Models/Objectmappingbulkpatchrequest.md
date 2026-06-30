---
id: objectmappingbulkpatchrequest
title: Objectmappingbulkpatchrequest
pagination_label: Objectmappingbulkpatchrequest
sidebar_label: Objectmappingbulkpatchrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Objectmappingbulkpatchrequest', 'Objectmappingbulkpatchrequest'] 
slug: /tools/sdk/python/configuration-hub/models/objectmappingbulkpatchrequest
tags: ['SDK', 'Software Development Kit', 'Objectmappingbulkpatchrequest', 'Objectmappingbulkpatchrequest']
---

# Objectmappingbulkpatchrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**patches** | [**map[string]List[Jsonpatchoperation]**](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists) | Map of id of the object mapping to a JsonPatchOperation describing what to patch on that object mapping. | [required]
}

## Example

```python
from sailpoint.configuration_hub.models.objectmappingbulkpatchrequest import Objectmappingbulkpatchrequest

objectmappingbulkpatchrequest = Objectmappingbulkpatchrequest(
patches={"603b1a61-d03d-4ed1-864f-a508fbd1995d":[{"op":"replace","path":"/enabled","value":true}],"00bece34-f50d-4227-8878-76f620b5a971":[{"op":"replace","path":"/targetValue","value":"New Target Value"}]}
)

```
[[Back to top]](#) 

