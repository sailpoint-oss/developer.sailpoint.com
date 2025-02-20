---
id: v2024-reassignment1
title: Reassignment1
pagination_label: Reassignment1
sidebar_label: Reassignment1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Reassignment1', 'V2024Reassignment1'] 
slug: /tools/sdk/python/v2024/models/reassignment1
tags: ['SDK', 'Software Development Kit', 'Reassignment1', 'V2024Reassignment1']
---

# Reassignment1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | [**CertificationReference1**](certification-reference1) |  | [optional] 
**comment** | **str** | Comments from the previous reviewer. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.reassignment1 import Reassignment1

reassignment1 = Reassignment1(
var_from=sailpoint.v2024.models.certification_reference_1.CertificationReference_1(),
comment='Please review'
)

```
[[Back to top]](#) 

