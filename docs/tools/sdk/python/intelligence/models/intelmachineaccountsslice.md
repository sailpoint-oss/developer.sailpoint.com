# Intelmachineaccountsslice

# Intelmachineaccountsslice

Machine accounts embedded on the non-human identity aggregate (first page).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[]Intelmachineaccountwire**](intelmachineaccountwire) | Machine accounts correlated to the non-human identity. | [required]
**total_count** | **int** | Correlated machine account count from aggregation; omitted when items is empty. | [optional] 
**next** | **str** | Next page URL when totalCount exceeds items returned. Includes isNHI=true. | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.intelmachineaccountsslice import Intelmachineaccountsslice

intelmachineaccountsslice = Intelmachineaccountsslice(
items=[
                    sailpoint.intelligence.models.intelmachineaccountwire.Intelmachineaccountwire(
                        id = '2c91808874ff91550175097daaec161c', 
                        name = 'account-name', 
                        native_identity = 'arn:aws:bedrock:us-east-1:336721:agent/ABCDEFGHI', 
                        source = null, 
                        enabled = True, 
                        locked = False, 
                        machine_identity = null, 
                        owner_identity = null, 
                        description = 'Service account for automation', 
                        subtype = 'Service Account', 
                        access_type = 'account', 
                        environment = 'production', 
                        classification_method = 'DISCOVERED', 
                        manually_edited = False, 
                        manually_correlated = False, 
                        has_entitlements = True, 
                        created = '2026-01-01T00:00Z', 
                        modified = '2026-05-01T00:00Z', 
                        attributes = {}, 
                        connector_attributes = {}, )
                    ],
total_count=11,
next='https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/2c91808874ff91550175097daaec161e/accounts?limit=10&offset=10&count=true&isNHI=true'
)

```
[[Back to top]](#) 

