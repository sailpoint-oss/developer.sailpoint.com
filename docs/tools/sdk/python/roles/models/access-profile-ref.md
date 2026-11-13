# AccessProfileRef

# AccessProfileRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the Access Profile | [optional] 
**type** |  **Enum** [  'ACCESS_PROFILE' ] | Type of requested object. This field must be either left null or set to 'ACCESS_PROFILE' when creating an Access Profile, otherwise a 400 Bad Request error will result. | [optional] 
**name** | **str** | Human-readable display name of the Access Profile. This field is ignored on input. | [optional] 
\}

## Example

```python
from sailpoint.roles.models.access_profile_ref import AccessProfileRef

access_profile_ref = AccessProfileRef(
id='ff808081751e6e129f1518161919ecca',
type='ACCESS_PROFILE',
name='Access Profile 2567'
)

```
[[Back to top]](#) 

