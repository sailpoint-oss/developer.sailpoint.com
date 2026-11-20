# AccountAttributes

# AccountAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **map[string]object** | The schema attribute values for the account | [required]
\}

## Example

```python
from sailpoint.accounts.models.account_attributes import AccountAttributes

account_attributes = AccountAttributes(
attributes={"city":"Austin","displayName":"John Doe","userName":"jdoe","sAMAccountName":"jDoe","mail":"john.doe@sailpoint.com"}
)

```
[[Back to top]](#) 

