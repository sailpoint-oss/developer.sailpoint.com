---
id: certificationreference
title: Certificationreference
pagination_label: Certificationreference
sidebar_label: Certificationreference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Certificationreference', 'Certificationreference'] 
slug: /tools/sdk/python/triggers/models/certificationreference
tags: ['SDK', 'Software Development Kit', 'Certificationreference', 'Certificationreference']
---

# Certificationreference


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
from sailpoint.triggers.models.certificationreference import Certificationreference

certificationreference = Certificationreference(
id='ef38f94347e94562b5bb8424a56397d8',
name='Certification Name',
type='CERTIFICATION',
reviewer=sailpoint.triggers.models.reviewer.Reviewer(
                    id = 'ef38f94347e94562b5bb8424a56397d8', 
                    name = 'Reviewer Name', 
                    email = 'reviewer@test.com', 
                    type = 'IDENTITY', 
                    created = '2018-06-25T20:22:28.104Z', 
                    modified = '2018-06-25T20:22:28.104Z', )
)

```
[[Back to top]](#) 

