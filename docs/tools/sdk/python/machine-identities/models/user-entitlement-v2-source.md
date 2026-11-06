# UserEntitlementV2Source

# UserEntitlementV2Source

The source of the entitlement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **DtoType** |  | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.user_entitlement_v2_source import UserEntitlementV2Source

user_entitlement_v2_source = UserEntitlementV2Source(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

