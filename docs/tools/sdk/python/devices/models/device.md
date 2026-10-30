# Device

# Device

A device, such as a laptop or server, discovered from a connected source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**native_identity** | **str** | The device's unique identifier on the source. | [optional] 
**description** | **str** | Description of the device. | [optional] 
**environment** | **str** | The environment the device belongs to. | [optional] 
**hostname** | **str** | The device hostname reported by the source. | [optional] 
**os** | [**DeviceOS**](device-os) |  | [optional] 
**email** | **str** | The email address the source reports for the device. | [optional] 
**sentinel_version** | **str** | The version of the endpoint agent the source reports for the device. | [optional] 
**detection_module_version** | **str** | The version of the detection module the source reports for the device. | [optional] 
**source** | [**DeviceAllOfSource**](device-all-of-source) |  | [optional] 
**resource** | [**DeviceResource**](device-resource) |  | [optional] 
**dataset_id** | **str** | The ID of the source dataset the device was retrieved from. | [optional] 
**owners** | [**DeviceOwners**](device-owners) |  | [optional] 
**connector_attributes** | **map[string]object** | A map of attributes sourced from the connector during aggregation. | [optional] 
**attributes** | **map[string]object** | A map of curated device attributes. | [optional] 
\}

## Example

```python
from sailpoint.devices.models.device import Device

device = Device(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
native_identity='6c2f4a8e-1d3b-4f6a-9e2c-7b5d8a1f0c34',
description='Finance team laptop',
environment='production',
hostname='lab-mbp-0142',
os=sailpoint.devices.models.device_os.Device OS(
                    type = 'macos', 
                    version = '14.5', ),
email='jane.doe@example.com',
sentinel_version='24.1.2.6',
detection_module_version='3.4.1',
source=,
resource=sailpoint.devices.models.device_resource.Device Resource(
                    id = '8886e5e3-63d0-462f-a195-d98da885b8dc', 
                    type = 'endpoint', 
                    name = 'lab-mbp-0142', 
                    features = ["PROVISIONING"], ),
dataset_id='8886e5e3-63d0-462f-a195-d98da885b8dc',
owners=sailpoint.devices.models.device_owners.Device Owners(
                    primary = null, 
                    secondary = [{"id":"2c9180858082150f0180893dbaf44202","name":"Jane Doe","type":"IDENTITY"}], ),
connector_attributes={"agentId":1785462398123456800},
attributes={"hostname":"lab-mbp-0142","osType":"macos"}
)

```
[[Back to top]](#) 

