---
id: beta-password-info-query-dto
title: PasswordInfoQueryDTO
pagination_label: PasswordInfoQueryDTO
sidebar_label: PasswordInfoQueryDTO
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PasswordInfoQueryDTO', 'BetaPasswordInfoQueryDTO'] 
slug: /tools/sdk/python/beta/models/password-info-query-dto
tags: ['SDK', 'Software Development Kit', 'PasswordInfoQueryDTO', 'BetaPasswordInfoQueryDTO']
---

# PasswordInfoQueryDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_name** | **str** | The login name of the user | [optional] 
**source_name** | **str** | The display name of the source | [optional] 
}

## Example

```python
from sailpoint.beta.models.password_info_query_dto import PasswordInfoQueryDTO

password_info_query_dto = PasswordInfoQueryDTO(
user_name='Abby.Smith',
source_name='My-AD'
)

```
[[Back to top]](#) 

