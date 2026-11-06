# DataAccess

# DataAccess

DAS data for the entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policies** | [**[]DataAccessPoliciesInner**](data-access-policies-inner) | List of classification policies that apply to resources the entitlement \\ groups has access to | [optional] 
**categories** | [**[]DataAccessCategoriesInner**](data-access-categories-inner) | List of classification categories that apply to resources the entitlement \\ groups has access to | [optional] 
**impact_score** | [**DataAccessImpactScore**](data-access-impact-score) |  | [optional] 
\}

## Example

```python
from sailpoint.certifications.models.data_access import DataAccess

data_access = DataAccess(
policies=[
                    sailpoint.certifications.models.data_access_policies_inner.DataAccess_policies_inner(
                        value = 'GDPR-20', )
                    ],
categories=[
                    sailpoint.certifications.models.data_access_categories_inner.DataAccess_categories_inner(
                        value = 'email-7', 
                        match_count = 10, )
                    ],
impact_score=sailpoint.certifications.models.data_access_impact_score.DataAccess_impactScore(
                    value = 'Medium', )
)

```
[[Back to top]](#) 

