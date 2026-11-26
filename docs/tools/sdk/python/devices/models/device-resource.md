# DeviceResource

# DeviceResource

The source resource a device is derived from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The source resource identifier. | [optional] 
**type** | **str** | The type of the source resource. | [optional] 
**name** | **str** | The display name of the source resource. | [optional] 
**features** | **[]str** | The set of features supported by the source resource. | [optional] 
\}

## Example

```python
from sailpoint.devices.models.device_resource import DeviceResource

device_resource = DeviceResource(
id='8886e5e3-63d0-462f-a195-d98da885b8dc',
type='endpoint',
name='lab-mbp-0142',
features=["PROVISIONING"]
)

```
[[Back to top]](#) 

