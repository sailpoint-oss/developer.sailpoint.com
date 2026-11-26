# AccessProfileDetailsAccountSelector

# AccessProfileDetailsAccountSelector

How to select account when there are multiple accounts for the user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selectors** | [**[]AppAccessProfileSelector**](app-access-profile-selector) |  | [optional] 
\}

## Example

```python
from sailpoint.apps.models.access_profile_details_account_selector import AccessProfileDetailsAccountSelector

access_profile_details_account_selector = AccessProfileDetailsAccountSelector(
selectors=[
                    sailpoint.apps.models.app_access_profile_selector.AppAccessProfileSelector(
                        application_id = '2c91808874ff91550175097daaec161c"', 
                        account_match_config = sailpoint.apps.models.app_access_profile_selector_account_match_config.AppAccessProfileSelector_accountMatchConfig(
                            match_expression = sailpoint.apps.models.app_access_profile_selector_account_match_config_match_expression.AppAccessProfileSelector_accountMatchConfig_matchExpression(
                                match_terms = [{"name":"","value":"","op":null,"container":true,"and":false,"children":[{"name":"businessCategory","value":"Service","op":"eq","container":false,"and":false,"children":null}]}], 
                                and = True, ), ), )
                    ]
)

```
[[Back to top]](#) 

