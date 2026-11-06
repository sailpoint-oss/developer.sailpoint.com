# Intelnonhumanidentityownershipcategory

# Intelnonhumanidentityownershipcategory

Ownership category for agents or applications. On success, primaryOwned and secondaryOwned carry independently paged buckets. On category-level upstream failure, message and reason are set (reason: UPSTREAM_UNAVAILABLE). The service emits one flat object today, so primaryOwned and secondaryOwned may still appear on the failure path with empty items. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_owned** | [**Intelnonhumanidentityownedslice**](intelnonhumanidentityownedslice) | First page of non-human identities for which this human is the primary owner. | [optional] 
**secondary_owned** | [**Intelnonhumanidentityownedslice**](intelnonhumanidentityownedslice) | First page of non-human identities for which this human is a secondary owner. | [optional] 
**message** | **str** | Human-readable explanation of the temporary ownership data failure. | [optional] 
**reason** |  **Enum** [  'UPSTREAM_UNAVAILABLE' ] | Machine-readable reason code for the category-level ownership failure. | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.intelnonhumanidentityownershipcategory import Intelnonhumanidentityownershipcategory

intelnonhumanidentityownershipcategory = Intelnonhumanidentityownershipcategory(
primary_owned=sailpoint.intelligence.models.intelnonhumanidentityownedslice.Intelnonhumanidentityownedslice(
                    items = [
                        sailpoint.intelligence.models.intelnonhumanidentityownershipitem.Intelnonhumanidentityownershipitem(
                            id = '2c91808874ff91550175097daaec161e', 
                            display_name = 'Example AI Agent', 
                            source = sailpoint.intelligence.models.source.source(), )
                        ], 
                    total_count = 11, 
                    next = 'https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/ef38f94347e94562b5bb8424a56397d8/non-human-identity-ownership/agents?ownershipRole=primary&limit=10&offset=10&count=true', ),
secondary_owned=sailpoint.intelligence.models.intelnonhumanidentityownedslice.Intelnonhumanidentityownedslice(
                    items = [
                        sailpoint.intelligence.models.intelnonhumanidentityownershipitem.Intelnonhumanidentityownershipitem(
                            id = '2c91808874ff91550175097daaec161e', 
                            display_name = 'Example AI Agent', 
                            source = sailpoint.intelligence.models.source.source(), )
                        ], 
                    total_count = 11, 
                    next = 'https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/ef38f94347e94562b5bb8424a56397d8/non-human-identity-ownership/agents?ownershipRole=primary&limit=10&offset=10&count=true', ),
message='Data temporarily unavailable. Please try again later.',
reason='UPSTREAM_UNAVAILABLE'
)

```
[[Back to top]](#) 

