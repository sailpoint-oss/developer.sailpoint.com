---
id: sourceapppatchdto
title: Sourceapppatchdto
pagination_label: Sourceapppatchdto
sidebar_label: Sourceapppatchdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sourceapppatchdto', 'Sourceapppatchdto'] 
slug: /tools/sdk/python/apps/models/sourceapppatchdto
tags: ['SDK', 'Software Development Kit', 'Sourceapppatchdto', 'Sourceapppatchdto']
---

# Sourceapppatchdto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The source app id | [optional] 
**cloud_app_id** | **str** | The deprecated source app id | [optional] 
**name** | **str** | The source app name | [optional] 
**created** | **datetime** | Time when the source app was created | [optional] 
**modified** | **datetime** | Time when the source app was last modified | [optional] 
**enabled** | **bool** | True if the source app is enabled | [optional] [default to False]
**provision_request_enabled** | **bool** | True if the app allows access request | [optional] [default to False]
**description** | **str** | The description of the source app | [optional] 
**match_all_accounts** | **bool** | True if the source app match all accounts | [optional] [default to False]
**app_center_enabled** | **bool** | True if the app is visible in the request center | [optional] [default to True]
**access_profiles** | **[]str** | List of IDs of access profiles | [optional] 
**account_source** | [**SourceappAccountSource**](sourceapp-account-source) |  | [optional] 
**owner** | [**Basereferencedto**](basereferencedto) | The owner of source app | [optional] 
}

## Example

```python
from sailpoint.apps.models.sourceapppatchdto import Sourceapppatchdto

sourceapppatchdto = Sourceapppatchdto(
id='2c91808874ff91550175097daaec161c',
cloud_app_id='9854520',
name='my app',
created='2020-10-08T18:33:52.029Z',
modified='2020-10-08T18:33:52.029Z',
enabled=True,
provision_request_enabled=True,
description='the source app for engineers',
match_all_accounts=True,
app_center_enabled=True,
access_profiles=["2c9180857725c14301772a93bb77242d","c9dc28e148a24d65b3ccb5fb8ca5ddd9"],
account_source=sailpoint.apps.models.sourceapp_account_source.sourceapp_accountSource(
                    id = '2c9180827ca885d7017ca8ce28a000eb', 
                    type = 'SOURCE', 
                    name = 'ODS-AD-Source', 
                    use_for_password_management = False, 
                    password_policies = [{"type":"PASSWORD_POLICY","id":"006a072ecc6647f68bba9f4a4ad34649","name":"Password Policy 1"}], ),
owner=sailpoint.apps.models.base_reference_dto.Base Reference Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

