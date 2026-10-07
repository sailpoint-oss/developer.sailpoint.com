# Intelnonhumanidentityownedslice

# Intelnonhumanidentityownedslice

One paged ownership role bucket (`primaryOwned` or `secondaryOwned`) embedded on the human aggregate. Embeds the first page of owned non-human identities; totalCount when items is non-empty. Continuation next carries limit and offset. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[]Intelnonhumanidentityownershipitem**](intelnonhumanidentityownershipitem) | First page of owned non-human identities for this role. | [required]
**total_count** | **int** | Total number of owned non-human identities in this role; omitted when items is empty. | [optional] 
**next** | **str** | Absolute URL to the next page for this category and ownership role; present when totalCount exceeds the items returned on this page. Includes `ownershipRole`, `limit`, `offset`, and `count=true`.  | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.intelnonhumanidentityownedslice import Intelnonhumanidentityownedslice

intelnonhumanidentityownedslice = Intelnonhumanidentityownedslice(
items=[
                    sailpoint.intelligence.models.intelnonhumanidentityownershipitem.Intelnonhumanidentityownershipitem(
                        id = '2c91808874ff91550175097daaec161e', 
                        display_name = 'Example AI Agent', 
                        source = sailpoint.intelligence.models.source.source(), )
                    ],
total_count=11,
next='https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/ef38f94347e94562b5bb8424a56397d8/non-human-identity-ownership/agents?ownershipRole=primary&limit=10&offset=10&count=true'
)

```
[[Back to top]](#) 

