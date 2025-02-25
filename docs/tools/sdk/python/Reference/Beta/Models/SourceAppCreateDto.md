---
id: beta-source-app-create-dto
title: SourceAppCreateDto
pagination_label: SourceAppCreateDto
sidebar_label: SourceAppCreateDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceAppCreateDto', 'BetaSourceAppCreateDto'] 
slug: /tools/sdk/python/beta/models/source-app-create-dto
tags: ['SDK', 'Software Development Kit', 'SourceAppCreateDto', 'BetaSourceAppCreateDto']
---

# SourceAppCreateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The source app name | [required]
**description** | **str** | The description of the source app | [required]
**match_all_accounts** | **bool** | True if the source app match all accounts | [optional] [default to False]
**account_source** | [**SourceAppCreateDtoAccountSource**](source-app-create-dto-account-source) |  | [required]
}

## Example

```python
from sailpoint.beta.models.source_app_create_dto import SourceAppCreateDto

source_app_create_dto = SourceAppCreateDto(
name='my app',
description='the source app for engineers',
match_all_accounts=True,
account_source=sailpoint.beta.models.source_app_create_dto_account_source.SourceAppCreateDto_accountSource(
                    id = '2c9180827ca885d7017ca8ce28a000eb', 
                    type = 'SOURCE', 
                    name = 'ODS-AD-Source', )
)

```
[[Back to top]](#) 

