---
id: nonemployeerequestlite
title: Nonemployeerequestlite
pagination_label: Nonemployeerequestlite
sidebar_label: Nonemployeerequestlite
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Nonemployeerequestlite', 'Nonemployeerequestlite'] 
slug: /tools/sdk/python/non-employee-lifecycle-management/models/nonemployeerequestlite
tags: ['SDK', 'Software Development Kit', 'Nonemployeerequestlite', 'Nonemployeerequestlite']
---

# Nonemployeerequestlite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Non-Employee request id. | [optional] 
**requester** | [**Nonemployeeidentityreferencewithid**](nonemployeeidentityreferencewithid) |  | [optional] 
}

## Example

```python
from sailpoint.non_employee_lifecycle_management.models.nonemployeerequestlite import Nonemployeerequestlite

nonemployeerequestlite = Nonemployeerequestlite(
id='ac110005-7156-1150-8171-5b292e3e0084',
requester=sailpoint.non_employee_lifecycle_management.models.nonemployeeidentityreferencewithid.nonemployeeidentityreferencewithid(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', )
)

```
[[Back to top]](#) 

