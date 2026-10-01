# Intelnonhumanidentityownership

# Intelnonhumanidentityownership

Non-human identities the human owns, grouped by subtype category. Present only when the tenant has `idn:machine-identity-security`. When present, both `agents` and `applications` always render. Each category is a flat object with optional primaryOwned/secondaryOwned buckets and optional message/reason when upstream ownership fetch fails for that category. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agents** | [**Intelnonhumanidentityownershipcategory**](intelnonhumanidentityownershipcategory) | Ownership for non-human identities with subtype AI Agent. | [required]
**applications** | [**Intelnonhumanidentityownershipcategory**](intelnonhumanidentityownershipcategory) | Ownership for non-human identities with subtype Application. | [required]
\}

## Example

```python
from sailpoint.intelligence.models.intelnonhumanidentityownership import Intelnonhumanidentityownership

intelnonhumanidentityownership = Intelnonhumanidentityownership(
agents=sailpoint.intelligence.models.intelnonhumanidentityownershipcategory.Intelnonhumanidentityownershipcategory(
                    primary_owned = sailpoint.intelligence.models.primary_owned.primaryOwned(), 
                    secondary_owned = sailpoint.intelligence.models.secondary_owned.secondaryOwned(), 
                    message = 'Data temporarily unavailable. Please try again later.', 
                    reason = 'UPSTREAM_UNAVAILABLE', ),
applications=sailpoint.intelligence.models.intelnonhumanidentityownershipcategory.Intelnonhumanidentityownershipcategory(
                    primary_owned = sailpoint.intelligence.models.primary_owned.primaryOwned(), 
                    secondary_owned = sailpoint.intelligence.models.secondary_owned.secondaryOwned(), 
                    message = 'Data temporarily unavailable. Please try again later.', 
                    reason = 'UPSTREAM_UNAVAILABLE', )
)

```
[[Back to top]](#) 

