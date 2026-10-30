# DeviceOSCounts

# DeviceOSCounts

The number of devices for each operating system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**macos** | **int** | The number of macOS devices. | [optional] 
**windows** | **int** | The number of Windows devices. | [optional] 
**linux** | **int** | The number of Linux devices. | [optional] 
**unknown** | **int** | The number of devices whose operating system is missing or is not macOS, Windows, or Linux. | [optional] 
\}

## Example

```python
from sailpoint.devices.models.device_os_counts import DeviceOSCounts

device_os_counts = DeviceOSCounts(
macos=610,
windows=540,
linux=85,
unknown=15
)

```
[[Back to top]](#) 

