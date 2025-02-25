---
id: v2024-non-employee-source-with-ne-count
title: NonEmployeeSourceWithNECount
pagination_label: NonEmployeeSourceWithNECount
sidebar_label: NonEmployeeSourceWithNECount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeSourceWithNECount', 'V2024NonEmployeeSourceWithNECount'] 
slug: /tools/sdk/python/v2024/models/non-employee-source-with-ne-count
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSourceWithNECount', 'V2024NonEmployeeSourceWithNECount']
---

# NonEmployeeSourceWithNECount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Non-Employee source id. | [optional] 
**source_id** | **str** | Source Id associated with this non-employee source. | [optional] 
**name** | **str** | Source name associated with this non-employee source. | [optional] 
**description** | **str** | Source description associated with this non-employee source. | [optional] 
**approvers** | [**[]NonEmployeeIdentityReferenceWithId**](non-employee-identity-reference-with-id) | List of approvers | [optional] 
**account_managers** | [**[]NonEmployeeIdentityReferenceWithId**](non-employee-identity-reference-with-id) | List of account managers | [optional] 
**modified** | **datetime** | When the request was last modified. | [optional] 
**created** | **datetime** | When the request was created. | [optional] 
**non_employee_count** | **int** | Number of non-employee records associated with this source. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.non_employee_source_with_ne_count import NonEmployeeSourceWithNECount

non_employee_source_with_ne_count = NonEmployeeSourceWithNECount(
id='a0303682-5e4a-44f7-bdc2-6ce6112549c1',
source_id='2c91808568c529c60168cca6f90c1313',
name='Retail',
description='Source description',
approvers=[
                    sailpoint.v2024.models.non_employee_identity_reference_with_id.NonEmployeeIdentityReferenceWithId(
                        type = 'IDENTITY', 
                        id = '5168015d32f890ca15812c9180835d2e', )
                    ],
account_managers=[
                    sailpoint.v2024.models.non_employee_identity_reference_with_id.NonEmployeeIdentityReferenceWithId(
                        type = 'IDENTITY', 
                        id = '5168015d32f890ca15812c9180835d2e', )
                    ],
modified='2019-08-23T18:52:59.162Z',
created='2019-08-23T18:40:35.772Z',
non_employee_count=120
)

```
[[Back to top]](#) 

