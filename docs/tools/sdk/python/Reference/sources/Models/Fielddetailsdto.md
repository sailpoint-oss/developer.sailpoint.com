---
id: fielddetailsdto
title: Fielddetailsdto
pagination_label: Fielddetailsdto
sidebar_label: Fielddetailsdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Fielddetailsdto', 'Fielddetailsdto'] 
slug: /tools/sdk/python/sources/models/fielddetailsdto
tags: ['SDK', 'Software Development Kit', 'Fielddetailsdto', 'Fielddetailsdto']
---

# Fielddetailsdto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the attribute. | [optional] 
**transform** | **object** | The transform to apply to the field | [optional] 
**attributes** | **object** | Attributes required for the transform | [optional] 
**is_required** | **bool** | Flag indicating whether or not the attribute is required. | [optional] [readonly] [default to False]
**type** |  **Enum** [  'string',    'int',    'long',    'date',    'boolean',    'secret' ] | The type of the attribute.  string: For text-based data.  int: For whole numbers.  long: For larger whole numbers.  date: For date and time values.  boolean: For true/false values.  secret: For sensitive data like passwords, which will be masked and encrypted.  | [optional] 
**is_multi_valued** | **bool** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to False]
}

## Example

```python
from sailpoint.sources.models.fielddetailsdto import Fielddetailsdto

fielddetailsdto = Fielddetailsdto(
name='userName',
transform={"type":"rule","attributes":{"name":"Create Unique LDAP Attribute"}},
attributes={"template":"${firstname}.${lastname}${uniqueCounter}","cloudMaxUniqueChecks":"50","cloudMaxSize":"20","cloudRequired":"true"},
is_required=False,
type='string',
is_multi_valued=False
)

```
[[Back to top]](#) 

