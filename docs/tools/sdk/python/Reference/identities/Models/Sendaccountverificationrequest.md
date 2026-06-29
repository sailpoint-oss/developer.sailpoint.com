---
id: sendaccountverificationrequest
title: Sendaccountverificationrequest
pagination_label: Sendaccountverificationrequest
sidebar_label: Sendaccountverificationrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sendaccountverificationrequest', 'Sendaccountverificationrequest'] 
slug: /tools/sdk/python/identities/models/sendaccountverificationrequest
tags: ['SDK', 'Software Development Kit', 'Sendaccountverificationrequest', 'Sendaccountverificationrequest']
---

# Sendaccountverificationrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_name** | **str** | The source name where identity account password should be reset | [optional] 
**via** |  **Enum** [  'EMAIL_WORK',    'EMAIL_PERSONAL',    'LINK_WORK',    'LINK_PERSONAL' ] | The method to send notification | [required]
}

## Example

```python
from sailpoint.identities.models.sendaccountverificationrequest import Sendaccountverificationrequest

sendaccountverificationrequest = Sendaccountverificationrequest(
source_name='Active Directory Source',
via='EMAIL_WORK'
)

```
[[Back to top]](#) 

