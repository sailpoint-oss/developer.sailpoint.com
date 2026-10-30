# MachineAccountSubtypeConfigDtoMachineAccountCreate

# MachineAccountSubtypeConfigDtoMachineAccountCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountCreateEnabled** | **(optional)** `boolean` | Specifies if the creation of machine accounts is allowed for this subtype. | [default to false]
**approvalRequired** | **(optional)** `boolean` | Specifies if approval is required for machine account creation requests for this subtype. | [default to false]
**formId** | **(optional)** `string` | Id of the form linked to subtype. | [default to undefined]
**entitlementId** | **(optional)** `string` | Id of the system created entitlement entitlement upon enabling account creation for this subtype. | [default to undefined]
**passwordSetting** | **(optional)** `string` | This is required before enabling the account creation to true. Default value will be null. | [default to undefined]
**passwordAttribute** | **(optional)** `string` | Name of the account attribute from the source\'s schema or new custom attribute to use when password settings is enabled. | [default to undefined]
**approvalConfig** | **(optional)** `MachineSubtypeApprovalConfig` |  | [default to undefined]

