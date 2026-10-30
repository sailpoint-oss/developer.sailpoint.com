# CampaignSearchBasedParams

# CampaignSearchBasedParams

Must be set only if the campaign is created using SEARCH.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search_type** |  **Enum** [  'IDENTITY',    'ACCESS' ] | If the campaign type is `Identity`, then the searchType must be set. | [optional] 
**query** | **str** | The scope for the campaign. If the searchType is `Identity`, then one of `query` or `identityIds` must be set. | [optional] 
**identity_ids** | **[]str** | A direct list of identities to include in this campaign. If the searchType is `Identity`, then one of `query` or `identityIds` must be set. | [optional] 
**access_constraints** | [**[]AccessConstraint**](access-constraint) | Further reduces the scope of the campaign by excluding identities (from `query` or `identityIds`) that do not have this access. | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.campaign_search_based_params import CampaignSearchBasedParams

campaign_search_based_params = CampaignSearchBasedParams(
search_type='ACCESS',
query='admin',
identity_ids=["0fbe863c063c4c88a35fd7f17e8a3df5"],
access_constraints=[
                    sailpoint.gov_certification.models.access_constraint.AccessConstraint(
                        type = 'ENTITLEMENT', 
                        ids = ["2c90ad2a70ace7d50170acf22ca90010"], 
                        operator = 'SELECTED', )
                    ]
)

```
[[Back to top]](#) 

