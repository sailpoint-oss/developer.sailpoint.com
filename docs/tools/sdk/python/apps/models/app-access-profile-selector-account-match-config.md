# AppAccessProfileSelectorAccountMatchConfig

# AppAccessProfileSelectorAccountMatchConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_expression** | [**AppAccessProfileSelectorAccountMatchConfigMatchExpression**](app-access-profile-selector-account-match-config-match-expression) |  | [optional] 
\}

## Example

```python
from sailpoint.apps.models.app_access_profile_selector_account_match_config import AppAccessProfileSelectorAccountMatchConfig

app_access_profile_selector_account_match_config = AppAccessProfileSelectorAccountMatchConfig(
match_expression=sailpoint.apps.models.app_access_profile_selector_account_match_config_match_expression.AppAccessProfileSelector_accountMatchConfig_matchExpression(
                    match_terms = [{"name":"","value":"","op":null,"container":true,"and":false,"children":[{"name":"businessCategory","value":"Service","op":"eq","container":false,"and":false,"children":null}]}], 
                    and = True, )
)

```
[[Back to top]](#) 

