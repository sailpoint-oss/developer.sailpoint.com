---
id: v2025-role-target-dto
title: RoleTargetDto
pagination_label: RoleTargetDto
sidebar_label: RoleTargetDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleTargetDto', 'V2025RoleTargetDto'] 
slug: /tools/sdk/python/v2025/models/role-target-dto
tags: ['SDK', 'Software Development Kit', 'RoleTargetDto', 'V2025RoleTargetDto']
---

# RoleTargetDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
**account_info** | [**AccountInfoDto**](account-info-dto) |  | [optional] 
**role_name** | **str** | Specific role name for this target if using multiple accounts | [optional] 
}

## Example

```python
from sailpoint.v2025.models.role_target_dto import RoleTargetDto

role_target_dto = RoleTargetDto(
source=sailpoint.v2025.models.base_reference_dto.BaseReferenceDto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
account_info=sailpoint.v2025.models.account_info_dto.AccountInfoDto(
                    native_identity = 'CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com', 
                    display_name = 'Abby.Smith', 
                    uuid = '{ad9fc391-246d-40af-b248-b6556a2b7c01}', ),
role_name='Marketing'
)

```
[[Back to top]](#) 

