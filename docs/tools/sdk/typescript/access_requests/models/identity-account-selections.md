# IdentityAccountSelections

# IdentityAccountSelections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedItems** | **(optional)** `Array<RequestedItemAccountSelections>` | Available account selections for the identity, per requested item | [default to undefined]
**accountsSelectionRequired** | **(optional)** `boolean` | A boolean indicating whether any account selections will be required for the user to raise an access request | [default to false]
**type** | **(optional)** `DtoType` |  | [default to undefined]
**id** | **(optional)** `string` | The identity id for the requested-for identity. * `IDENTITY`: the human identity id. * `MACHINE_IDENTITY`: the machine identity id (not the correlated human identity).  | [default to undefined]
**name** | **(optional)** `string` | The name of the identity | [default to undefined]

