# IntelAccessAccountWire

# IntelAccessAccountWire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Unique account identifier in Identity Security Cloud. | [default to undefined]
**name** | `string` | Account name or login value on the correlated source. | [default to undefined]
**source** | **(optional)** `IntelAccessSourceWire` | Source metadata for the account as returned by List Accounts wire format. | [default to undefined]
**disabled** | `boolean` | True when the account is administratively disabled on the source. | [default to undefined]
**locked** | `boolean` | True when the account is locked from interactive sign-in on the source. | [default to undefined]
**authoritative** | `boolean` | True when the account is treated as authoritative for attribute synchronization. | [default to undefined]
**systemAccount** | `boolean` | True when the account represents a non-interactive or system principal. | [default to undefined]
**isMachine** | `boolean` | True when the account belongs to a machine or service identity. | [default to undefined]
**manuallyCorrelated** | `boolean` | True when an administrator manually correlated the account to an identity. | [default to undefined]
**nativeIdentity** | **(optional)** `string` | Native identifier string on the source directory or application. | [default to undefined]
**created** | `string` | Timestamp when the account record was created in Identity Security Cloud. | [default to undefined]
**modified** | `string` | Timestamp when the account record was last modified in Identity Security Cloud. | [default to undefined]

