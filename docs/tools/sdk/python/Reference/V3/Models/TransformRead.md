---
id: transform-read
title: TransformRead
pagination_label: TransformRead
sidebar_label: TransformRead
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TransformRead', 'TransformRead'] 
slug: /tools/sdk/python/v3/models/transform-read
tags: ['SDK', 'Software Development Kit', 'TransformRead', 'TransformRead']
---

# TransformRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Unique name of this transform | [required]
**type** |  **Enum** [  'accountAttribute',    'base64Decode',    'base64Encode',    'concat',    'conditional',    'dateCompare',    'dateFormat',    'dateMath',    'decomposeDiacriticalMarks',    'e164phone',    'firstValid',    'rule',    'identityAttribute',    'indexOf',    'iso3166',    'lastIndexOf',    'leftPad',    'lookup',    'lower',    'normalizeNames',    'randomAlphaNumeric',    'randomNumeric',    'reference',    'replaceAll',    'replace',    'rightPad',    'split',    'static',    'substring',    'trim',    'upper',    'usernameGenerator',    'uuid',    'displayName',    'rfc5646' ] | The type of transform operation | [required]
**attributes** | **object** | Meta-data about the transform. Values in this list are specific to the type of transform to be executed. | [required]
**id** | **str** | Unique ID of this transform | [required]
**internal** | **bool** | Indicates whether this is an internal SailPoint-created transform or a customer-created transform | [required][default to False]
}

## Example

```python
from sailpoint.v3.models.transform_read import TransformRead

transform_read = TransformRead(
name='Timestamp To Date',
type='dateFormat',
attributes=sailpoint.v3.models.attributes.attributes(),
id='2cd78adghjkja34jh2b1hkjhasuecd',
internal=False
)

```
[[Back to top]](#) 

