---
id: beta-resource-objects-response
title: ResourceObjectsResponse
pagination_label: ResourceObjectsResponse
sidebar_label: ResourceObjectsResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ResourceObjectsResponse', 'BetaResourceObjectsResponse'] 
slug: /tools/sdk/python/beta/models/resource-objects-response
tags: ['SDK', 'Software Development Kit', 'ResourceObjectsResponse', 'BetaResourceObjectsResponse']
---

# ResourceObjectsResponse

Response model for peek resource objects from source connectors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the source | [optional] [readonly] 
**name** | **str** | Name of the source | [optional] [readonly] 
**object_count** | **int** | The number of objects that were fetched by the connector. | [optional] [readonly] 
**elapsed_millis** | **int** | The number of milliseconds spent on the entire request. | [optional] [readonly] 
**resource_objects** | [**[]ResourceObject**](resource-object) | Fetched objects from the source connector. | [optional] [readonly] 
}

## Example

```python
from sailpoint.beta.models.resource_objects_response import ResourceObjectsResponse

resource_objects_response = ResourceObjectsResponse(
id='2c91808568c529c60168cca6f90c1313',
name='ODS-AD-Test [source-999999]',
object_count=25,
elapsed_millis=1055,
resource_objects=[
                    sailpoint.beta.models.resource_object.Resource Object(
                        instance = '', 
                        identity = 'CN=Aaron Carr,OU=test1,DC=test2,DC=test', 
                        uuid = '{abf7bd9b-68b4-4d21-9b70-870c58ebf844}', 
                        previous_identity = '', 
                        name = 'Aaron Carr', 
                        object_type = 'account', 
                        incomplete = False, 
                        incremental = False, 
                        delete = False, 
                        remove = False, 
                        missing = [missFieldOne, missFieldTwo], 
                        attributes = {telephoneNumber=12-(345)678-9012, mail=example@test.com, displayName=Aaron Carr}, 
                        final_update = False, )
                    ]
)

```
[[Back to top]](#) 

