---
id: beta-reassignment
title: Reassignment
pagination_label: Reassignment
sidebar_label: Reassignment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Reassignment', 'BetaReassignment'] 
slug: /tools/sdk/python/beta/models/reassignment
tags: ['SDK', 'Software Development Kit', 'Reassignment', 'BetaReassignment']
---

# Reassignment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | [**CertificationReference**](certification-reference) |  | [optional] 
**comment** | **str** | Comments from the previous reviewer. | [optional] 
}

## Example

```python
from sailpoint.beta.models.reassignment import Reassignment

reassignment = Reassignment(
var_from=sailpoint.beta.models.certification_reference.Certification Reference(),
comment='Please review'
)

```
[[Back to top]](#) 

