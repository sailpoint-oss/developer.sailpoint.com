# DataAccess

# DataAccess


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policies** | [**[]DataAccessPoliciesInner**](data-access-policies-inner) | List of classification policies that apply to resources the entitlement or group has access to. | [optional] 
**categories** | [**[]DataAccessCategoriesInner**](data-access-categories-inner) | List of classification categories that apply to resources the entitlement or group has access to. | [optional] 
**impact_score** | [**DataAccessImpactScore**](data-access-impact-score) |  | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.data_access import DataAccess

data_access = DataAccess(
policies=[
                    sailpoint.gov_certification.models.data_access_policies_inner.DataAccess_policies_inner(
                        value = 'GDPR-20', )
                    ],
categories=[
                    sailpoint.gov_certification.models.data_access_categories_inner.DataAccess_categories_inner(
                        value = 'SSN', 
                        match_count = 10, )
                    ],
impact_score=sailpoint.gov_certification.models.data_access_impact_score.DataAccess_impactScore(
                    value = 'Medium', )
)

```
[[Back to top]](#) 

