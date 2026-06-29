---
id: nonemployeesourcewithcloudexternalid
title: Nonemployeesourcewithcloudexternalid
pagination_label: Nonemployeesourcewithcloudexternalid
sidebar_label: Nonemployeesourcewithcloudexternalid
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Nonemployeesourcewithcloudexternalid', 'Nonemployeesourcewithcloudexternalid'] 
slug: /tools/sdk/python/non-employee-lifecycle-management/models/nonemployeesourcewithcloudexternalid
tags: ['SDK', 'Software Development Kit', 'Nonemployeesourcewithcloudexternalid', 'Nonemployeesourcewithcloudexternalid']
---

# Nonemployeesourcewithcloudexternalid


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
**cloud_external_id** | **str** | Legacy ID used for sources from the V1 API. This attribute will be removed from a future version of the API and will not be considered a breaking change. No clients should rely on this ID always being present. | [optional] 
}

## Example

```python
from sailpoint.non_employee_lifecycle_management.models.nonemployeesourcewithcloudexternalid import Nonemployeesourcewithcloudexternalid

nonemployeesourcewithcloudexternalid = Nonemployeesourcewithcloudexternalid(
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
cloud_external_id='99999'
)

```
[[Back to top]](#) 

