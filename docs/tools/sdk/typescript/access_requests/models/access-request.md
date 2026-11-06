# AccessRequest

# AccessRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedFor** | **(optional)** `Array<string>` | A list of Identity IDs for whom the Access is requested. If it\'s a Revoke request, there can only be one Identity ID. * Used for human identity requests with the \'requestedItems\' field. * Must be omitted (do not send an empty array) when using `requestedForWithRequestedItems`   (including all machine identity requests). | [default to undefined]
**requestType** | **(optional)** `AccessRequestType` |  | [default to undefined]
**requestedItems** | **(optional)** `Array<AccessRequestItem>` | * Used for human identity requests with the \'requestedFor\' field. * Must be omitted (do not send an empty array) when using `requestedForWithRequestedItems`. | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [default to undefined]
**requestedForWithRequestedItems** | **(optional)** `Array<RequestedForDtoRef>` | Additional submit data structure with requestedFor containing requestedItems allowing distinction for each request item and Identity. * Can only be used when \'requestedFor\' and \'requestedItems\' are not separately provided * Adds ability to specify which account the user wants the access on, in case they have multiple accounts on a source. * Allows the ability to request items with different start dates and remove dates. * Also allows different combinations of request items and identities in the same request. * For human identities, primarily used with GRANT_ACCESS (and related multi-account flows). Human REVOKE_ACCESS continues to use the flat `requestedFor` / `requestedItems` shape. * Required for machine identity access requests. Set `identityType: MACHINE` on each entry. Machine requests support GRANT_ACCESS, MODIFY_ACCESS, and REVOKE_ACCESS with the constraints documented on the create endpoint and item schemas (entitlement-only; grant/modify account selection; revoke nativeIdentity).  | [default to undefined]

