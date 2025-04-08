---
id: beta-source-account-created
title: SourceAccountCreated
pagination_label: SourceAccountCreated
sidebar_label: SourceAccountCreated
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceAccountCreated', 'BetaSourceAccountCreated'] 
slug: /tools/sdk/python/beta/models/source-account-created
tags: ['SDK', 'Software Development Kit', 'SourceAccountCreated', 'BetaSourceAccountCreated']
---

# SourceAccountCreated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** | Identity's universal unique identifier (UUID) on the source. The source system generates the UUID. | [required]
**id** | **str** | SailPoint generated unique identifier. | [required]
**native_identifier** | **str** | Account's unique ID on the source. | [required]
**source_id** | **str** | Source ID. | [required]
**source_name** | **str** | Source name. | [required]
**identity_id** | **str** | ID of the identity correlated with the account. | [required]
**identity_name** | **str** | Name of the identity correlated with the account. | [required]
**attributes** | **map[string]object** | Account attributes. The attributes' contents depend on the source's account schema. | [required]
}

## Example

```python
from sailpoint.beta.models.source_account_created import SourceAccountCreated

source_account_created = SourceAccountCreated(
uuid='b7264868-7201-415f-9118-b581d431c688',
id='ee769173319b41d19ccec35ba52f237b',
native_identifier='E009',
source_id='2c918082814e693601816e09471b29b6',
source_name='Active Directory',
identity_id='ee769173319b41d19ccec6c235423237b',
identity_name='john.doe',
attributes={firstname=John, lastname=Doe, email=john.doe@gmail.com, department=Sales, displayName=John Doe, created=2020-04-27T16:48:33.597Z, employeeNumber=E009, uid=E009, inactive=true, phone=null, identificationNumber=E009}
)

```
[[Back to top]](#) 

