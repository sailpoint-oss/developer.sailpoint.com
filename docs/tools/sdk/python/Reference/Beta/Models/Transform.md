---
id: beta-transform
title: Transform
pagination_label: Transform
sidebar_label: Transform
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Transform', 'BetaTransform'] 
slug: /tools/sdk/python/beta/models/transform
tags: ['SDK', 'Software Development Kit', 'Transform', 'BetaTransform']
---

# Transform

The representation of an internally- or customer-defined transform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Unique name of this transform | [required]
**type** |  **Enum** [  'accountAttribute',    'base64Decode',    'base64Encode',    'concat',    'conditional',    'dateCompare',    'dateFormat',    'dateMath',    'decomposeDiacriticalMarks',    'e164phone',    'firstValid',    'rule',    'identityAttribute',    'indexOf',    'iso3166',    'lastIndexOf',    'leftPad',    'lookup',    'lower',    'normalizeNames',    'randomAlphaNumeric',    'randomNumeric',    'reference',    'replaceAll',    'replace',    'rightPad',    'split',    'static',    'substring',    'trim',    'upper',    'usernameGenerator',    'uuid',    'displayName',    'rfc5646' ] | The type of transform operation | [required]
**attributes** | **object** | Meta-data about the transform. Values in this list are specific to the type of transform to be executed. | [required]
}

## Example

```python
from sailpoint.beta.models.transform import Transform

transform = Transform(
name='Timestamp To Date',
type='dateFormat',
attributes=sailpoint.beta.models.attributes.attributes()
)

```
[[Back to top]](#) 

