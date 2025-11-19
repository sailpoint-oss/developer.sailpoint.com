---
id: v2024-source-app-patch-dto
title: SourceAppPatchDto
pagination_label: SourceAppPatchDto
sidebar_label: SourceAppPatchDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceAppPatchDto', 'V2024SourceAppPatchDto'] 
slug: /tools/sdk/python/v2024/models/source-app-patch-dto
tags: ['SDK', 'Software Development Kit', 'SourceAppPatchDto', 'V2024SourceAppPatchDto']
---

# SourceAppPatchDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The source app id | [optional] 
**cloud_app_id** | **str** | The deprecated source app id | [optional] 
**name** | **str** | The source app name | [optional] 
**created** | **datetime** | Time when the source app was created | [optional] 
**modified** | **datetime** | Time when the source app was last modified | [optional] 
**enabled** | **bool** | True if the source app is enabled | [optional] [default to False]
**provision_request_enabled** | **bool** | True if the source app is provision request enabled | [optional] [default to False]
**description** | **str** | The description of the source app | [optional] 
**match_all_accounts** | **bool** | True if the source app match all accounts | [optional] [default to False]
**app_center_enabled** | **bool** | True if the source app is shown in the app center | [optional] [default to True]
**access_profiles** | **[]str** | List of IDs of access profiles | [optional] 
**account_source** | [**SourceAppAccountSource**](source-app-account-source) |  | [optional] 
**owner** | [**BaseReferenceDto**](base-reference-dto) | The owner of source app | [optional] 
}

## Example

```python
from sailpoint.v2024.models.source_app_patch_dto import SourceAppPatchDto

source_app_patch_dto = SourceAppPatchDto(
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
access_profiles=[2c9180857725c14301772a93bb77242d, c9dc28e148a24d65b3ccb5fb8ca5ddd9],
account_source=sailpoint.v2024.models.source_app_account_source.SourceApp_accountSource(
                    id = '2c9180827ca885d7017ca8ce28a000eb', 
                    type = 'SOURCE', 
                    name = 'ODS-AD-Source', 
                    use_for_password_management = True, 
                    password_policies = [{type=PASSWORD_POLICY, id=006a072ecc6647f68bba9f4a4ad34649, name=Password Policy 1}], ),
owner=sailpoint.v2024.models.base_reference_dto.Base Reference Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

