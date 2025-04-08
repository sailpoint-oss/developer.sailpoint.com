---
id: v2025-multi-host-integrations-accounts-file
title: MultiHostIntegrationsAccountsFile
pagination_label: MultiHostIntegrationsAccountsFile
sidebar_label: MultiHostIntegrationsAccountsFile
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostIntegrationsAccountsFile', 'V2025MultiHostIntegrationsAccountsFile'] 
slug: /tools/sdk/python/v2025/models/multi-host-integrations-accounts-file
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsAccountsFile', 'V2025MultiHostIntegrationsAccountsFile']
---

# MultiHostIntegrationsAccountsFile

Reference to accounts file for the source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the accounts file. | [optional] 
**key** | **str** | The accounts file key. | [optional] 
**upload_time** | **datetime** | Date-time when the file was uploaded | [optional] 
**expiry** | **datetime** | Date-time when the accounts file expired. | [optional] 
**expired** | **bool** | If this is true, it indicates that the accounts file has expired. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.multi_host_integrations_accounts_file import MultiHostIntegrationsAccountsFile

multi_host_integrations_accounts_file = MultiHostIntegrationsAccountsFile(
name='My Accounts File',
key='2c91808568c529c60168cca6f90c2222',
upload_time='2022-02-08T14:50:03.827Z',
expiry='2022-02-08T14:50:03.827Z',
expired=False
)

```
[[Back to top]](#) 

