---
id: beta-entitlement
title: Entitlement
pagination_label: Entitlement
sidebar_label: Entitlement
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlement', 'BetaEntitlement'] 
slug: /tools/sdk/python/beta/models/entitlement
tags: ['SDK', 'Software Development Kit', 'Entitlement', 'BetaEntitlement']
---

# Entitlement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The entitlement id | [optional] 
**name** | **str** | The entitlement name | [optional] 
**created** | **datetime** | Time when the entitlement was created | [optional] 
**modified** | **datetime** | Time when the entitlement was last modified | [optional] 
**attribute** | **str** | The entitlement attribute name | [optional] 
**value** | **str** | The value of the entitlement | [optional] 
**source_schema_object_type** | **str** | The object type of the entitlement from the source schema | [optional] 
**privileged** | **bool** | True if the entitlement is privileged | [optional] [default to False]
**cloud_governed** | **bool** | True if the entitlement is cloud governed | [optional] [default to False]
**description** | **str** | The description of the entitlement | [optional] 
**requestable** | **bool** | True if the entitlement is requestable | [optional] [default to False]
**attributes** | **map[string]object** | A map of free-form key-value pairs from the source system | [optional] 
**source** | [**EntitlementSource**](entitlement-source) |  | [optional] 
**owner** | [**EntitlementOwner**](entitlement-owner) |  | [optional] 
**direct_permissions** | [**[]PermissionDto**](permission-dto) |  | [optional] 
**segments** | **[]str** | List of IDs of segments, if any, to which this Entitlement is assigned. | [optional] 
**manually_updated_fields** | [**EntitlementManuallyUpdatedFields**](entitlement-manually-updated-fields) |  | [optional] 
**access_model_metadata** | [**EntitlementAccessModelMetadata**](entitlement-access-model-metadata) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.entitlement import Entitlement

entitlement = Entitlement(
id='2c91808874ff91550175097daaec161c',
name='LauncherTest2',
created='2020-10-08T18:33:52.029Z',
modified='2020-10-08T18:33:52.029Z',
attribute='memberOf',
value='CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local',
source_schema_object_type='group',
privileged=True,
cloud_governed=True,
description='CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local',
requestable=True,
attributes={fieldName=fieldValue},
source=sailpoint.beta.models.entitlement_source.Entitlement_source(
                    id = '2c9180827ca885d7017ca8ce28a000eb', 
                    type = 'SOURCE', 
                    name = 'ODS-AD-Source', ),
owner=,
direct_permissions=[
                    sailpoint.beta.models.permission_dto.PermissionDto(
                        rights = [
                            'SELECT'
                            ], 
                        target = 'SYS.GV_$TRANSACTION', )
                    ],
segments=[f7b1b8a3-5fed-4fd4-ad29-82014e137e19, 29cb6c06-1da8-43ea-8be4-b3125f248f2a],
manually_updated_fields=,
access_model_metadata=
)

```
[[Back to top]](#) 

