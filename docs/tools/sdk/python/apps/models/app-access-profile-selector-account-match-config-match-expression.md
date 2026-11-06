# AppAccessProfileSelectorAccountMatchConfigMatchExpression

# AppAccessProfileSelectorAccountMatchConfigMatchExpression


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_terms** | [**[]MatchTerm**](match-term) |  | [optional] 
**var_and** | **bool** | If it is AND operators for match terms | [optional] [default to True]
\}

## Example

```python
from sailpoint.apps.models.app_access_profile_selector_account_match_config_match_expression import AppAccessProfileSelectorAccountMatchConfigMatchExpression

app_access_profile_selector_account_match_config_match_expression = AppAccessProfileSelectorAccountMatchConfigMatchExpression(
match_terms=[{"name":"","value":"","op":null,"container":true,"and":false,"children":[{"name":"businessCategory","value":"Service","op":"eq","container":false,"and":false,"children":null}]}],
var_and=True
)

```
[[Back to top]](#) 

