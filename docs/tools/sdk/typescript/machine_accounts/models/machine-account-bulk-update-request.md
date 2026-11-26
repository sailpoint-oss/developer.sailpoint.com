# MachineAccountBulkUpdateRequest

# MachineAccountBulkUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | `Array<string>` | IDs of the machine accounts to update. Provide between 1 and 100 IDs. | [default to undefined]
**jsonPatch** | `Array<JsonPatchOperation>` | [JSON Patch](https://tools.ietf.org/html/rfc6902) operations to apply to every machine account in `ids`. Each operation must target one of these top-level fields: `description`, `subtype`, `environment`, `machineIdentity`, `ownerIdentity`, `owners`, or `manuallyEdited`. `owners` is accepted only when expanded machine account ownership is enabled for the tenant, and may only be replaced at `/owners`, `/owners/primary`, or `/owners/secondary`. Do not patch `ownerIdentity` and `owners` in the same request. | [default to undefined]

