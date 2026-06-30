---
id: entitlementv2
title: Entitlementv2
pagination_label: Entitlementv2
sidebar_label: Entitlementv2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementv2', 'Entitlementv2'] 
slug: /tools/sdk/python/entitlements/models/entitlementv2
tags: ['SDK', 'Software Development Kit', 'Entitlementv2', 'Entitlementv2']
---

# Entitlementv2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The entitlementv1 id | [optional] 
**name** | **str** | The entitlementv1 name | [optional] 
**attribute** | **str** | The entitlementv1 attribute name | [optional] 
**value** | **str** | The value of the entitlementv1 | [optional] 
**source_schema_object_type** | **str** | The object type of the entitlementv1 from the source schema | [optional] 
**description** | **str** | The description of the entitlementv1 | [optional] 
**privilege_level** | [**Entitlementv2PrivilegeLevel**](entitlementv2-privilege-level) |  | [optional] 
**tags** | **[]str** | List of tags assigned to the entitlementv1 | [optional] 
**cloud_governed** | **bool** | True if the entitlementv1 is cloud governed | [optional] [default to False]
**requestable** | **bool** | True if the entitlementv1 is able to be directly requested | [optional] [default to False]
**owner** | [**Entitlementv2Owner**](entitlementv2-owner) |  | [optional] 
**manually_updated_fields** | **map[string]object** | A map of entitlementv1 fields that have been manually updated. The key is the field name in UPPER_SNAKE_CASE format, and the value is true or false to indicate if the field has been updated. | [optional] 
**access_model_metadata** | [**Entitlementv2AccessModelMetadata**](entitlementv2-access-model-metadata) |  | [optional] 
**created** | **datetime** | Time when the entitlementv1 was created | [optional] 
**modified** | **datetime** | Time when the entitlementv1 was last modified | [optional] 
**source** | [**Entitlementv2Source**](entitlementv2-source) |  | [optional] 
**attributes** | **map[string]object** | A map of free-form key-value pairs from the source system | [optional] 
**segments** | **[]str** | List of IDs of segments, if any, to which this Entitlementv1 is assigned. | [optional] 
**direct_permissions** | [**[]Permissiondto**](permissiondto) |  | [optional] 
}

## Example

```python
from sailpoint.entitlements.models.entitlementv2 import Entitlementv2

entitlementv2 = Entitlementv2(
id='2c91808874ff91550175097daaec161c',
name='Account Payable',
attribute='memberOf',
value='CN=Account Payable,OU=Finance,DC=xyz company',
source_schema_object_type='group',
description='This entitlementv1 allows users to access the accounts payable module of the organization's financial management system. Users can view, process, and approve invoices, manage vendor relationships, and perform other accounts payable-related tasks.',
privilege_level=,
tags=["tag1","tag2"],
cloud_governed=True,
requestable=True,
owner=sailpoint.entitlements.models.entitlementv2_owner.entitlementv2_owner(
                    id = '2c9180827ca885d7017ca8ce28a000eb', 
                    type = 'IDENTITY', 
                    name = 'john.doe', ),
manually_updated_fields={"DISPLAY_NAME":true,"DESCRIPTION":true},
access_model_metadata=sailpoint.entitlements.models.entitlementv2_access_model_metadata.entitlementv2_accessModelMetadata(
                    attributes = [
                        sailpoint.entitlements.models.access_model_metadata.Access Model Metadata(
                            key = 'iscCsp', 
                            name = 'CSP', 
                            multiselect = True, 
                            status = 'active', 
                            type = 'governance', 
                            object_types = ["general"], 
                            description = 'Indicates the type of deployment environment of an access item.', 
                            values = [
                                sailpoint.entitlements.models.accessmodelmetadata_values_inner.accessmodelmetadata_values_inner(
                                    value = 'development', 
                                    name = 'Development', 
                                    status = 'active', )
                                ], )
                        ], ),
created='2020-10-08T18:33:52.029Z',
modified='2020-10-08T18:33:52.029Z',
source=sailpoint.entitlements.models.entitlementv2_source.entitlementv2_source(
                    id = '2c9180827ca885d7017ca8ce28a000eb', 
                    type = 'SOURCE', 
                    name = 'ODS-AD-Source', ),
attributes={"fieldName":"fieldValue"},
segments=["f7b1b8a3-5fed-4fd4-ad29-82014e137e19","29cb6c06-1da8-43ea-8be4-b3125f248f2a"],
direct_permissions=[
                    sailpoint.entitlements.models.permission_dto.Permission DTO(
                        rights = HereIsRight1, 
                        target = 'SYS.GV_$TRANSACTION', )
                    ]
)

```
[[Back to top]](#) 

