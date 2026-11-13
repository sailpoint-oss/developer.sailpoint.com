# Capability

# Capability

Import this model from the entry point of its package:

```typescript
import { Capability } from '@sailpoint/angular-sdk/capabilities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [readonly] [default to undefined]
**name** | `string` | Name of the Object | [default to undefined]
**created** | **(optional)** `string` | Creation date of the Object | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the Object | [readonly] [default to undefined]
**description** | **(optional)** `string` | Description of the capability. | [default to undefined]
**type** | **(optional)** `string` | The capability type. UNDEFINED is returned when the source does not report a known type. | [default to undefined]
**status** | **(optional)** `string` | The capability status reported by the source. | [default to undefined]
**nativeIdentity** | **(optional)** `string` | The capability\'s unique identifier on the source. | [default to undefined]
**environment** | **(optional)** `string` | The environment the capability belongs to. | [default to undefined]
**source** | **(optional)** `CapabilityAllOfSource` |  | [default to undefined]
**resource** | **(optional)** `CapabilityResource` |  | [default to undefined]
**datasetId** | **(optional)** `string` | The ID of the source dataset the capability was retrieved from. | [default to undefined]
**owners** | **(optional)** `CapabilityOwners` |  | [default to undefined]
**attributes** | **(optional)**  | A map of curated capability attributes. | [default to undefined]
**connectorAttributes** | **(optional)**  | A map of attributes sourced from the connector during aggregation. | [default to undefined]
**manuallyEdited** | **(optional)** `boolean` | Indicates if the capability has been manually edited. | [default to false]

