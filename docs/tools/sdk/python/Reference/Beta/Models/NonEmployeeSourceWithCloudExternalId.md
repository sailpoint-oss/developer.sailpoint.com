---
id: beta-non-employee-source-with-cloud-external-id
title: NonEmployeeSourceWithCloudExternalId
pagination_label: NonEmployeeSourceWithCloudExternalId
sidebar_label: NonEmployeeSourceWithCloudExternalId
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeSourceWithCloudExternalId', 'BetaNonEmployeeSourceWithCloudExternalId'] 
slug: /tools/sdk/python/beta/models/non-employee-source-with-cloud-external-id
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSourceWithCloudExternalId', 'BetaNonEmployeeSourceWithCloudExternalId']
---

# NonEmployeeSourceWithCloudExternalId


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
**cloud_external_id** | **str** | Legacy ID used for sources from the V1 API. This attribute will be removed from a future version of the API and will not be considered a breaking change. No clients should rely on this ID always being present. | [optional] 
}

## Example

```python
from sailpoint.beta.models.non_employee_source_with_cloud_external_id import NonEmployeeSourceWithCloudExternalId

non_employee_source_with_cloud_external_id = NonEmployeeSourceWithCloudExternalId(
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
non_employee_count=2,
cloud_external_id='99999'
)

```
[[Back to top]](#) 

