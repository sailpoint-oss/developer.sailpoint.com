# GetIntelIdentityAccountsV1200Response

# GetIntelIdentityAccountsV1200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[]IntelAccessAccountWire**](intel-access-account-wire) | First page of accounts for the identity. | [required]
**total_count** | **int** | Total number of accounts for this identity; omitted when `items` is empty. | [optional] 
**next** | **str** | Absolute URL to the next accounts page; present when totalCount exceeds the items returned on this page. | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.get_intel_identity_accounts_v1200_response import GetIntelIdentityAccountsV1200Response

get_intel_identity_accounts_v1200_response = GetIntelIdentityAccountsV1200Response(
items=[
                    sailpoint.intelligence.models.intel_access_account_wire.IntelAccessAccountWire(
                        id = '2c91808874ff91550175097daaec161c', 
                        name = 'jdoe', 
                        source = sailpoint.intelligence.models.source.source(), 
                        disabled = False, 
                        locked = False, 
                        authoritative = True, 
                        system_account = False, 
                        is_machine = False, 
                        manually_correlated = False, 
                        native_identity = 'CN=jdoe,OU=Users,DC=example,DC=com', 
                        created = '2023-11-01T10:00Z', 
                        modified = '2024-02-15T16:20Z', )
                    ],
total_count=42,
next='https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/accounts?limit=10&offset=10&count=true'
)

```
[[Back to top]](#) 

