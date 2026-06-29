---
id: nonemployeesourcewithnecount
title: Nonemployeesourcewithnecount
pagination_label: Nonemployeesourcewithnecount
sidebar_label: Nonemployeesourcewithnecount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Nonemployeesourcewithnecount', 'Nonemployeesourcewithnecount'] 
slug: /tools/sdk/python/non-employee-lifecycle-management/models/nonemployeesourcewithnecount
tags: ['SDK', 'Software Development Kit', 'Nonemployeesourcewithnecount', 'Nonemployeesourcewithnecount']
---

# Nonemployeesourcewithnecount


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
**non_employee_count** | **int** | Number of non-employee records associated with this source. This value is 'NULL' by default. To get the non-employee count, you must set the `non-employee-count` flag in your request to 'true'. | [optional] 
}

## Example

```python
from sailpoint.non_employee_lifecycle_management.models.nonemployeesourcewithnecount import Nonemployeesourcewithnecount

nonemployeesourcewithnecount = Nonemployeesourcewithnecount(
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
created='2019-08-23T18:40:35.772Z',
non_employee_count=120
)

```
[[Back to top]](#) 

