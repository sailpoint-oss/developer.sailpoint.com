# Rolelistfilterdtov2

# Rolelistfilterdtov2

Request body for filtering roles by metadata and filter expression, including privilegeLevel.effective.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **str** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **type**: *eq, in*  **owner.id**: *eq, in*  **additionalOwners.id**: *eq, in*  **requestable**: *eq*  **dimensional**: *eq*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, sw, co*  **accessProfile.id**: *eq, in*  **accessProfile.name**: *eq, sw, co*  **privilegeLevel.effective**: *eq, in*  Supported composite operators are *and, or* | [optional] [default to '']
**amm_key_values** | [**[]Rolelistfilterdtov2AmmKeyValuesInner**](rolelistfilterdtov2-amm-key-values-inner) |  | [optional] [default to []]
\}

## Example

```python
from sailpoint.roles.models.rolelistfilterdtov2 import Rolelistfilterdtov2

rolelistfilterdtov2 = Rolelistfilterdtov2(
filters='',
amm_key_values=[{"attribute":"iscFederalClassifications","values":["secret"]}]
)

```
[[Back to top]](#) 

