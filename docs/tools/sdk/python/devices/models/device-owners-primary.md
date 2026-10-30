# DeviceOwnersPrimary

# DeviceOwnersPrimary

The identity selected as the primary owner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **DtoType** |  | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
\}

## Example

```python
from sailpoint.devices.models.device_owners_primary import DeviceOwnersPrimary

device_owners_primary = DeviceOwnersPrimary(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

