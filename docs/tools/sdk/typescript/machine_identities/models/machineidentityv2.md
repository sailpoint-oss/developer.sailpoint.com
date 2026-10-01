# Machineidentityv2

# Machineidentityv2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [readonly] [default to undefined]
**name** | `string` | Name of the Object | [default to undefined]
**created** | **(optional)** `string` | Creation date of the Object | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the Object | [readonly] [default to undefined]
**description** | **(optional)** `string` | Description of the machine identity. | [default to undefined]
**attributes** | **(optional)**  | A map of custom machine identity attributes. | [default to undefined]
**connectorAttributes** | **(optional)**  | A map of attributes sourced from the connector during aggregation. | [default to undefined]
**manuallyEdited** | **(optional)** `boolean` | Indicates if the machine identity has been manually edited. | [default to false]
**manuallyCreated** | **(optional)** `boolean` | Indicates if the machine identity has been manually created. | [default to false]
**owners** | **(optional)** `MachineIdentityOwnersV2` |  | [default to undefined]
**subtype** | **(optional)** `string` | The subtype value associated to the machine identity. | [default to undefined]
**sourceId** | **(optional)** `string` | The source id associated to the machine identity. | [default to undefined]
**uuid** | **(optional)** `string` | The UUID associated to the machine identity directly aggregated from a source. | [default to undefined]
**nativeIdentity** | **(optional)** `string` | The native identity associated to the machine identity directly aggregated from a source. | [default to undefined]
**datasetId** | **(optional)** `string` | The dataset id associated to the source from which the identity was retrieved. | [default to undefined]
**environment** | **(optional)** `string` | The environment the machine identity belongs to. | [default to undefined]
**existsOnSource** | **(optional)** `string` | Indicates whether the machine identity still exists on the source. | [default to undefined]
**status** | **(optional)** `string` | Operational status read from stored attributes.status; null when absent. | [default to undefined]
**resource** | **(optional)** `ResourceV2` |  | [default to undefined]
**source** | **(optional)** `MachineIdentityV2Source` |  | [default to undefined]
**userEntitlements** | **(optional)** `Array<UserEntitlementV2>` | The user entitlements associated to the machine identity. | [default to undefined]
**businessApplicationRefs** | **(optional)** `Array<BusinessApplicationRef>` | Optional Business Application references associated with this machine identity. Available when Business Applications is enabled for the tenant. On create and patch, at most one reference is allowed and is persisted as a `MANUAL` correlation. When Business Applications is not enabled, this field is null on responses and is rejected (`400`) if supplied on write. | [default to undefined]
**effectiveSanctionedStatus** | **(optional)** `SanctionedStatus` | Derived sanctioned status from linked Business Applications; `UNKNOWN` when no refs are present. Available when Business Applications is enabled for the tenant; null when it is not enabled. Read-only on create and patch input. | [readonly] [default to undefined]
**risk** | **(optional)** `MachineIdentityV2Risk` |  | [default to undefined]

