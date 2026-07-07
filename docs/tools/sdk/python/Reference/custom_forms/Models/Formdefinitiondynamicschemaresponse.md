---
id: formdefinitiondynamicschemaresponse
title: Formdefinitiondynamicschemaresponse
pagination_label: Formdefinitiondynamicschemaresponse
sidebar_label: Formdefinitiondynamicschemaresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Formdefinitiondynamicschemaresponse', 'Formdefinitiondynamicschemaresponse'] 
slug: /tools/sdk/python/custom-forms/models/formdefinitiondynamicschemaresponse
tags: ['SDK', 'Software Development Kit', 'Formdefinitiondynamicschemaresponse', 'Formdefinitiondynamicschemaresponse']
---

# Formdefinitiondynamicschemaresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_schema** | **map[string]object** | OutputSchema holds a JSON schema generated dynamically | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.formdefinitiondynamicschemaresponse import Formdefinitiondynamicschemaresponse

formdefinitiondynamicschemaresponse = Formdefinitiondynamicschemaresponse(
output_schema={"outputSchema":{"$schema":"https://json-schema.org/draft/2020-12/schema","additionalProperties":false,"properties":{"firstName":{"title":"First Name","type":"string"},"fullName":{"title":"Full Name","type":"string"},"lastName":{"title":"Last Name","type":"string"},"startDate":{"format":"date-time","title":"Start Date","type":"string"}},"type":"object"}}
)

```
[[Back to top]](#) 

