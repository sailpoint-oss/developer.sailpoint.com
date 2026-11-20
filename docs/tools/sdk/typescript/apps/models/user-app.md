# UserApp

# UserApp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The user app id | [default to undefined]
**created** | **(optional)** `string` | Time when the user app was created | [default to undefined]
**modified** | **(optional)** `string` | Time when the user app was last modified | [default to undefined]
**hasMultipleAccounts** | **(optional)** `boolean` | True if the owner has multiple accounts for the source | [default to false]
**useForPasswordManagement** | **(optional)** `boolean` | True if the source has password feature | [default to false]
**provisionRequestEnabled** | **(optional)** `boolean` | True if the app allows access request | [default to false]
**appCenterEnabled** | **(optional)** `boolean` | True if the app is visible in the request center | [default to true]
**sourceApp** | **(optional)** `UserAppSourceApp` |  | [default to undefined]
**source** | **(optional)** `UserAppSource` |  | [default to undefined]
**account** | **(optional)** `UserAppAccount` |  | [default to undefined]
**owner** | **(optional)** `UserAppOwner` |  | [default to undefined]

