---
id: validatefilterinputdto
title: Validatefilterinputdto
pagination_label: Validatefilterinputdto
sidebar_label: Validatefilterinputdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Validatefilterinputdto', 'Validatefilterinputdto'] 
slug: /tools/sdk/python/triggers/models/validatefilterinputdto
tags: ['SDK', 'Software Development Kit', 'Validatefilterinputdto', 'Validatefilterinputdto']
---

# Validatefilterinputdto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **object** | Mock input to evaluate filter expression against. | [required]
**filter** | **str** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [required]
}

## Example

```python
from sailpoint.triggers.models.validatefilterinputdto import Validatefilterinputdto

validatefilterinputdto = Validatefilterinputdto(
input={"identityId":"201327fda1c44704ac01181e963d463c"},
filter='$[?($.identityId == "201327fda1c44704ac01181e963d463c")]'
)

```
[[Back to top]](#) 

