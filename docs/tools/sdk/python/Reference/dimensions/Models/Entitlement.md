---
id: entitlement
title: Entitlement
pagination_label: Entitlement
sidebar_label: Entitlement
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlement', 'Entitlement'] 
slug: /tools/sdk/python/dimensions/models/entitlement
tags: ['SDK', 'Software Development Kit', 'Entitlement', 'Entitlement']
---

# Entitlement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The entitlement id | [optional] 
**name** | **str** | The entitlement name | [optional] 
**attribute** | **str** | The entitlement attribute name | [optional] 
**value** | **str** | The value of the entitlement | [optional] 
**source_schema_object_type** | **str** | The object type of the entitlement from the source schema | [optional] 
**description** | **str** | The description of the entitlement | [optional] 
**privileged** | **bool** | True if the entitlement is privileged | [optional] [default to False]
**cloud_governed** | **bool** | True if the entitlement is cloud governed | [optional] [default to False]
**requestable** | **bool** | True if the entitlement is able to be directly requested | [optional] [default to False]
**owner** | [**EntitlementOwner**](entitlement-owner) |  | [optional] 
**additional_owners** | [**[]Additionalownerref**](additionalownerref) | List of additional owner references beyond the primary owner. Each entry may be an identity (IDENTITY) or a governance group (GOVERNANCE_GROUP). | [optional] 
**manually_updated_fields** | **map[string]object** | A map of entitlement fields that have been manually updated. The key is the field name in UPPER_SNAKE_CASE format, and the value is true or false to indicate if the field has been updated. | [optional] 
**access_model_metadata** | [**EntitlementAccessModelMetadata**](entitlement-access-model-metadata) |  | [optional] 
**created** | **datetime** | Time when the entitlement was created | [optional] 
**modified** | **datetime** | Time when the entitlement was last modified | [optional] 
**source** | [**EntitlementSource**](entitlement-source) |  | [optional] 
**attributes** | **map[string]object** | A map of free-form key-value pairs from the source system | [optional] 
**segments** | **[]str** | List of IDs of segments, if any, to which this Entitlement is assigned. | [optional] 
**direct_permissions** | [**[]Permissiondto**](permissiondto) |  | [optional] 
}

## Example

```python
from sailpoint.dimensions.models.entitlement import Entitlement

entitlement = Entitlement(
id='2c91808874ff91550175097daaec161c',
name='PayrollControls',
attribute='memberOf',
value='CN=PayrollControls,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com',
source_schema_object_type='group',
description='Grants the ability to access and manage payroll-related controls and settings within the Corporate Active Directory system.',
privileged=True,
cloud_governed=True,
requestable=True,
owner=sailpoint.dimensions.models.entitlement_owner.entitlement_owner(
                    id = '2c9180827ca885d7017ca8ce28a000eb', 
                    type = 'IDENTITY', 
                    name = 'john.doe', ),
additional_owners=[
                    sailpoint.dimensions.models.additionalownerref.additionalownerref(
                        type = 'IDENTITY', 
                        id = '2c9180a46faadee4016fb4e018c20639', 
                        name = 'support', )
                    ],
manually_updated_fields={"DISPLAY_NAME":true,"DESCRIPTION":true},
access_model_metadata=sailpoint.dimensions.models.entitlement_access_model_metadata.entitlement_accessModelMetadata(
                    attributes = [
                        sailpoint.dimensions.models.access_model_metadata.Access Model Metadata(
                            key = 'iscCsp', 
                            name = 'CSP', 
                            multiselect = True, 
                            status = 'active', 
                            type = 'governance', 
                            object_types = ["general"], 
                            description = 'Indicates the type of deployment environment of an access item.', 
                            values = [
                                sailpoint.dimensions.models.accessmodelmetadata_values_inner.accessmodelmetadata_values_inner(
                                    value = 'development', 
                                    name = 'Development', 
                                    status = 'active', )
                                ], )
                        ], ),
created='2020-10-08T18:33:52.029Z',
modified='2020-10-08T18:33:52.029Z',
source=sailpoint.dimensions.models.entitlement_source.entitlement_source(
                    id = '2c9180827ca885d7017ca8ce28a000eb', 
                    type = 'SOURCE', 
                    name = 'Corporate Active Directory', ),
attributes={"fieldName":"fieldValue"},
segments=["f7b1b8a3-5fed-4fd4-ad29-82014e137e19","29cb6c06-1da8-43ea-8be4-b3125f248f2a"],
direct_permissions=[
                    sailpoint.dimensions.models.permission_dto.Permission DTO(
                        rights = HereIsRight1, 
                        target = 'SYS.GV_$TRANSACTION', )
                    ]
)

```
[[Back to top]](#) 

