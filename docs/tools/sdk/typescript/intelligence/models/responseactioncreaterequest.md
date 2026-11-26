# Responseactioncreaterequest

# Responseactioncreaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actionType** | `string` | Which response action to run. | [default to undefined]
**identityType** | `string` | Whether the target is a human identity or a non-human identity (NHI). | [default to undefined]
**identityId** | `string` | SailPoint Identity Security identity id, resolved by the caller from a prior intelligence query. | [default to undefined]
**accountIds** | **(optional)** `Array<string>` | One or more account ids. Required for DISABLE_ACCOUNT (1-50 after trim/dedupe); must be omitted for DISABLE_IDENTITY and DEACTIVATE_AGENT. A single account is sent as a one-element array.  | [default to undefined]
**context** | `Responseactioncontext` |  | [default to undefined]

