# PasswordPolicyHoldersDtoInner

# PasswordPolicyHoldersDtoInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_id** | **str** | The password policy Id. | [optional] 
**policy_name** | **str** | The name of the password policy. | [optional] 
**selectors** | **PasswordPolicyHoldersDtoAttributes** |  | [optional] 
\}

## Example

```python
from sailpoint.sources.models.password_policy_holders_dto_inner import PasswordPolicyHoldersDtoInner

password_policy_holders_dto_inner = PasswordPolicyHoldersDtoInner(
policy_id='2c91808e7d976f3b017d9f5ceae440c8',
policy_name='PasswordPolicy Example',
selectors=sailpoint.sources.models.password_policy_holders_dto_attributes.Password Policy Holders Dto Attributes(
                    identity_attr = [
                        sailpoint.sources.models.password_policy_holders_dto_attributes_identity_attr_inner.PasswordPolicyHoldersDtoAttributes_identityAttr_inner(
                            name = 'Country', 
                            value = 'Canada', )
                        ], )
)

```
[[Back to top]](#) 

