# AccountsSelectionRequest

# AccountsSelectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedFor** | **(optional)** `Array<string>` | A list of Identity IDs for whom the Access is requested. * Must be omitted (do not send an empty array) when using `requestedForWithRequestedItems`   (including all machine identity requests). | [default to undefined]
**requestType** | **(optional)** `AccessRequestType` |  | [default to undefined]
**requestedItems** | **(optional)** `Array<AccessRequestItem>` | Access items requested. * Must be omitted (do not send an empty array) when using `requestedForWithRequestedItems`.  | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [default to undefined]
**requestedForWithRequestedItems** | **(optional)** `Array<RequestedForDtoRef>` | Nested payload pairing each identity with its requested items. * Required for machine identity accounts-selection. Set `identityType: MACHINE` on each entry. * Machine requests support `ENTITLEMENT` items only and do not allow mixed human and machine identities. * When present, `requestedFor` and `requestedItems` must be omitted (do not send an empty array). | [default to undefined]

