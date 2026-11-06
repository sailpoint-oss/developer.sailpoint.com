# Machineidentitycapability

# Machineidentitycapability

Import this model from the entry point of its package:

```typescript
import { Machineidentitycapability } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [readonly] [default to undefined]
**name** | `string` | Name of the Object | [default to undefined]
**created** | **(optional)** `string` | Creation date of the Object | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the Object | [readonly] [default to undefined]
**description** | **(optional)** `string` | Description of the capability. | [default to undefined]
**type** | **(optional)** `string` | Type of the capability. `UNDEFINED` is returned when the type is missing or not recognized. | [default to undefined]
**status** | **(optional)** `string` | Status of the capability, as reported by the source. `null` when the source does not report one. | [default to undefined]
**nativeIdentity** | **(optional)** `string` | Unique identifier of the capability on the source. | [default to undefined]
**environment** | **(optional)** `string` | Environment the capability runs in. | [default to undefined]
**source** | **(optional)** `MachineIdentityCapabilitySource` |  | [default to undefined]
**resource** | **(optional)** `ResourceV2` |  | [default to undefined]
**datasetId** | **(optional)** `string` | ID of the source dataset the capability was aggregated from. | [default to undefined]
**owners** | **(optional)** `MachineIdentityOwnersV2` |  | [default to undefined]
**attributes** | **(optional)**  | A map of curated capability attributes. | [default to undefined]
**connectorAttributes** | **(optional)**  | A map of attributes sourced from the connector during aggregation. | [default to undefined]
**manuallyEdited** | **(optional)** `boolean` | Indicates whether the capability has been manually edited. | [default to false]

