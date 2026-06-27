---
id: sourceappcreatedto
title: Sourceappcreatedto
pagination_label: Sourceappcreatedto
sidebar_label: Sourceappcreatedto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sourceappcreatedto', 'Sourceappcreatedto'] 
slug: /tools/sdk/python/apps/models/sourceappcreatedto
tags: ['SDK', 'Software Development Kit', 'Sourceappcreatedto', 'Sourceappcreatedto']
---

# Sourceappcreatedto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The source app name | [required]
**description** | **str** | The description of the source app | [required]
**match_all_accounts** | **bool** | True if the source app match all accounts | [optional] [default to False]
**account_source** | [**SourceappcreatedtoAccountSource**](sourceappcreatedto-account-source) |  | [required]
}

## Example

```python
from sailpoint.apps.models.sourceappcreatedto import Sourceappcreatedto

sourceappcreatedto = Sourceappcreatedto(
name='my app',
description='the source app for engineers',
match_all_accounts=True,
account_source=sailpoint.apps.models.sourceappcreatedto_account_source.sourceappcreatedto_accountSource(
                    id = '2c9180827ca885d7017ca8ce28a000eb', 
                    type = 'SOURCE', 
                    name = 'ODS-AD-Source', )
)

```
[[Back to top]](#) 

