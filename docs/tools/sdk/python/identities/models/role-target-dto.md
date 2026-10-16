# RoleTargetDto

# RoleTargetDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
**account_info** | [**AccountInfoDto**](account-info-dto) |  | [optional] 
**role** | [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
\}

## Example

```python
from sailpoint.identities.models.role_target_dto import RoleTargetDto

role_target_dto = RoleTargetDto(
source=sailpoint.identities.models.base_reference_dto.Base Reference Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
account_info=sailpoint.identities.models.account_info_dto.Account Info Dto(
                    native_identity = 'CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com', 
                    display_name = 'Abby.Smith', 
                    uuid = '{ad9fc391-246d-40af-b248-b6556a2b7c01}', ),
role=sailpoint.identities.models.base_reference_dto.Base Reference Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

