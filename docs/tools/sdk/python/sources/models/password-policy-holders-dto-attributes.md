# PasswordPolicyHoldersDtoAttributes

# PasswordPolicyHoldersDtoAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_attr** | [**[]PasswordPolicyHoldersDtoAttributesIdentityAttrInner**](password-policy-holders-dto-attributes-identity-attr-inner) | Attributes of PasswordPolicyHoldersDto | [optional] 
\}

## Example

```python
from sailpoint.sources.models.password_policy_holders_dto_attributes import PasswordPolicyHoldersDtoAttributes

password_policy_holders_dto_attributes = PasswordPolicyHoldersDtoAttributes(
identity_attr=[
                    sailpoint.sources.models.password_policy_holders_dto_attributes_identity_attr_inner.PasswordPolicyHoldersDtoAttributes_identityAttr_inner(
                        name = 'Country', 
                        value = 'Canada', )
                    ]
)

```
[[Back to top]](#) 

