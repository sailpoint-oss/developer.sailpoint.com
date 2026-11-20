# MachineAccountLinkedMachineIdentity

# MachineAccountLinkedMachineIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [readonly] [default to undefined]
**name** | `string` | Name of the Object | [default to undefined]
**created** | **(optional)** `string` | Creation date of the Object | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the Object | [readonly] [default to undefined]
**description** | **(optional)** `string` | The description of the machine identity. | [default to undefined]
**attributes** | **(optional)**  | The attributes of the machine identity, including the attributes read from the source. | [default to undefined]
**manuallyEdited** | **(optional)** `boolean` | Indicates whether the machine identity has been manually edited. | [default to false]
**manuallyCreated** | **(optional)** `boolean` | Indicates whether the machine identity was created manually rather than by aggregation. | [default to false]
**owners** | **(optional)** `MachineAccountLinkedMachineIdentityAllOfOwners` |  | [default to undefined]
**subtype** | **(optional)** `string` | The subtype of the machine identity. | [default to undefined]
**sourceId** | **(optional)** `string` | ID of the source the machine identity comes from. | [default to undefined]
**uuid** | **(optional)** `string` | The UUID of the machine identity, as read from the source. | [default to undefined]
**nativeIdentity** | **(optional)** `string` | The native identity of the machine identity, as read from the source. | [default to undefined]
**datasetId** | **(optional)** `string` | ID of the dataset the machine identity was aggregated from. | [default to undefined]
**source** | **(optional)** `BaseReferenceDto` | The source the machine identity comes from. | [default to undefined]
**userEntitlements** | **(optional)** `Array<MachineAccountLinkedMachineIdentityAllOfUserEntitlements>` | The user entitlements associated with the machine identity. | [default to undefined]
**existsOnSource** | **(optional)** `string` | Indicates whether the machine identity still exists on the source. | [default to undefined]
**businessApplicationRefs** | **(optional)** `Array<MachineAccountLinkedMachineIdentityAllOfBusinessApplicationRefs>` | The business applications linked to the machine identity. This field is omitted when business application links are not available for the machine identity. | [default to undefined]
**effectiveSanctionedStatus** | **(optional)** `string` | The sanctioned status derived from the linked business applications. This field is present only when `businessApplicationRefs` is present. | [default to undefined]

