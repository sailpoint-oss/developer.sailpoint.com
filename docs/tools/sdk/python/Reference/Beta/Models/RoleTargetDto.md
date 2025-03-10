---
id: beta-role-target-dto
title: RoleTargetDto
pagination_label: RoleTargetDto
sidebar_label: RoleTargetDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleTargetDto', 'BetaRoleTargetDto'] 
slug: /tools/sdk/python/beta/models/role-target-dto
tags: ['SDK', 'Software Development Kit', 'RoleTargetDto', 'BetaRoleTargetDto']
---

# RoleTargetDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**BaseReferenceDto1**](base-reference-dto1) |  | [optional] 
**account_info** | [**AccountInfoDto**](account-info-dto) |  | [optional] 
**role_name** | **str** | Specific role name for this target if using multiple accounts | [optional] 
}

## Example

```python
from sailpoint.beta.models.role_target_dto import RoleTargetDto

role_target_dto = RoleTargetDto(
source=sailpoint.beta.models.base_reference_dto_1.BaseReferenceDto_1(
                    id = 'ff8081814d977c21014da056804a0af3', 
                    name = 'Github', ),
account_info=sailpoint.beta.models.account_info_dto.AccountInfoDto(
                    native_identity = 'CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com', 
                    display_name = 'Abby.Smith', 
                    uuid = '{ad9fc391-246d-40af-b248-b6556a2b7c01}', ),
role_name='Marketing'
)

```
[[Back to top]](#) 

