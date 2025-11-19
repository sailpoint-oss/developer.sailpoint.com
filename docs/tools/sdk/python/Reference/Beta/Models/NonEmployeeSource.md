---
id: beta-non-employee-source
title: NonEmployeeSource
pagination_label: NonEmployeeSource
sidebar_label: NonEmployeeSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeSource', 'BetaNonEmployeeSource'] 
slug: /tools/sdk/python/beta/models/non-employee-source
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSource', 'BetaNonEmployeeSource']
---

# NonEmployeeSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Non-Employee source id. | [optional] 
**source_id** | **str** | Source Id associated with this non-employee source. | [optional] 
**name** | **str** | Source name associated with this non-employee source. | [optional] 
**description** | **str** | Source description associated with this non-employee source. | [optional] 
**approvers** | [**[]IdentityReferenceWithId**](identity-reference-with-id) | List of approvers | [optional] 
**account_managers** | [**[]IdentityReferenceWithId**](identity-reference-with-id) | List of account managers | [optional] 
**modified** | **datetime** | When the request was last modified. | [optional] 
**created** | **datetime** | When the request was created. | [optional] 
**non_employee_count** | **int** | The number of non-employee records on all sources that *requested-for* user manages. | [optional] 
}

## Example

```python
from sailpoint.beta.models.non_employee_source import NonEmployeeSource

non_employee_source = NonEmployeeSource(
id='a0303682-5e4a-44f7-bdc2-6ce6112549c1',
source_id='2c91808568c529c60168cca6f90c1313',
name='Retail',
description='Source description',
approvers=[
                    sailpoint.beta.models.identity_reference_with_id.Identity Reference With Id(
                        type = 'IDENTITY', 
                        id = '5168015d32f890ca15812c9180835d2e', )
                    ],
account_managers=[
                    sailpoint.beta.models.identity_reference_with_id.Identity Reference With Id(
                        type = 'IDENTITY', 
                        id = '5168015d32f890ca15812c9180835d2e', )
                    ],
modified='2019-08-23T18:52:59.162Z',
created='2019-08-23T18:40:35.772Z',
non_employee_count=2
)

```
[[Back to top]](#) 

