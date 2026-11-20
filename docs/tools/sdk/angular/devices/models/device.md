# Device

# Device

Import this model from the entry point of its package:

```typescript
import { Device } from '@sailpoint/angular-sdk/devices';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [readonly] [default to undefined]
**name** | `string` | Name of the Object | [default to undefined]
**created** | **(optional)** `string` | Creation date of the Object | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the Object | [readonly] [default to undefined]
**nativeIdentity** | **(optional)** `string` | The device\'s unique identifier on the source. | [default to undefined]
**description** | **(optional)** `string` | Description of the device. | [default to undefined]
**environment** | **(optional)** `string` | The environment the device belongs to. | [default to undefined]
**hostname** | **(optional)** `string` | The device hostname reported by the source. | [default to undefined]
**os** | **(optional)** `DeviceOS` |  | [default to undefined]
**email** | **(optional)** `string` | The email address the source reports for the device. | [default to undefined]
**sentinelVersion** | **(optional)** `string` | The version of the endpoint agent the source reports for the device. | [default to undefined]
**detectionModuleVersion** | **(optional)** `string` | The version of the detection module the source reports for the device. | [default to undefined]
**source** | **(optional)** `DeviceAllOfSource` |  | [default to undefined]
**resource** | **(optional)** `DeviceResource` |  | [default to undefined]
**datasetId** | **(optional)** `string` | The ID of the source dataset the device was retrieved from. | [default to undefined]
**owners** | **(optional)** `DeviceOwners` |  | [default to undefined]
**connectorAttributes** | **(optional)**  | A map of attributes sourced from the connector during aggregation. | [default to undefined]
**attributes** | **(optional)**  | A map of curated device attributes. | [default to undefined]

