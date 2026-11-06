# AccessConstraint

# AccessConstraint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ENTITLEMENT',    'ACCESS_PROFILE',    'ROLE' ] | Type of Access | [required]
**ids** | **[]str** | Must be set only if operator is SELECTED. | [optional] 
**operator** |  **Enum** [  'ALL',    'SELECTED' ] | Used to determine whether the scope of the campaign should be reduced for selected ids or all. | [required]
\}

## Example

```python
from sailpoint.certification_campaigns.models.access_constraint import AccessConstraint

access_constraint = AccessConstraint(
type='ENTITLEMENT',
ids=["2c90ad2a70ace7d50170acf22ca90010"],
operator='SELECTED'
)

```
[[Back to top]](#) 

