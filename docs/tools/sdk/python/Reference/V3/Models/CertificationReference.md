---
id: certification-reference
title: CertificationReference
pagination_label: CertificationReference
sidebar_label: CertificationReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CertificationReference', 'CertificationReference'] 
slug: /tools/sdk/python/v3/models/certification-reference
tags: ['SDK', 'Software Development Kit', 'CertificationReference', 'CertificationReference']
---

# CertificationReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the certification. | [optional] 
**name** | **str** | The name of the certification. | [optional] 
**type** |  **Enum** [  'CERTIFICATION' ] |  | [optional] 
**reviewer** | [**Reviewer**](reviewer) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.certification_reference import CertificationReference

certification_reference = CertificationReference(
id='ef38f94347e94562b5bb8424a56397d8',
name='Certification Name',
type='CERTIFICATION',
reviewer=sailpoint.v3.models.reviewer.Reviewer(
                    id = 'ef38f94347e94562b5bb8424a56397d8', 
                    name = 'Reviewer Name', 
                    email = 'reviewer@test.com', 
                    type = 'IDENTITY', 
                    created = '2018-06-25T20:22:28.104Z', 
                    modified = '2018-06-25T20:22:28.104Z', )
)

```
[[Back to top]](#) 

