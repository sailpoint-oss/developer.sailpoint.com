---
id: nonemployeesource
title: Nonemployeesource
pagination_label: Nonemployeesource
sidebar_label: Nonemployeesource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Nonemployeesource', 'Nonemployeesource'] 
slug: /tools/sdk/python/non-employee-lifecycle-management/models/nonemployeesource
tags: ['SDK', 'Software Development Kit', 'Nonemployeesource', 'Nonemployeesource']
---

# Nonemployeesource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Non-Employee source id. | [optional] 
**source_id** | **str** | Source Id associated with this non-employee source. | [optional] 
**name** | **str** | Source name associated with this non-employee source. | [optional] 
**description** | **str** | Source description associated with this non-employee source. | [optional] 
**approvers** | [**[]Nonemployeeidentityreferencewithid**](nonemployeeidentityreferencewithid) | List of approvers | [optional] 
**account_managers** | [**[]Nonemployeeidentityreferencewithid**](nonemployeeidentityreferencewithid) | List of account managers | [optional] 
**modified** | **datetime** | When the request was last modified. | [optional] 
**created** | **datetime** | When the request was created. | [optional] 
}

## Example

```python
from sailpoint.non_employee_lifecycle_management.models.nonemployeesource import Nonemployeesource

nonemployeesource = Nonemployeesource(
id='a0303682-5e4a-44f7-bdc2-6ce6112549c1',
source_id='2c91808568c529c60168cca6f90c1313',
name='Retail',
description='Source description',
approvers=[
                    sailpoint.non_employee_lifecycle_management.models.nonemployeeidentityreferencewithid.nonemployeeidentityreferencewithid(
                        type = 'IDENTITY', 
                        id = '5168015d32f890ca15812c9180835d2e', )
                    ],
account_managers=[
                    sailpoint.non_employee_lifecycle_management.models.nonemployeeidentityreferencewithid.nonemployeeidentityreferencewithid(
                        type = 'IDENTITY', 
                        id = '5168015d32f890ca15812c9180835d2e', )
                    ],
modified='2019-08-23T18:52:59.162Z',
created='2019-08-23T18:40:35.772Z'
)

```
[[Back to top]](#) 

