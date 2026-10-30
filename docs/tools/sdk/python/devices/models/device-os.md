# DeviceOS

# DeviceOS

The operating system reported by the source for a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The operating system type. | [optional] 
**version** | **str** | The operating system version. | [optional] 
\}

## Example

```python
from sailpoint.devices.models.device_os import DeviceOS

device_os = DeviceOS(
type='macos',
version='14.5'
)

```
[[Back to top]](#) 

