# SourceAppPatchDto

# SourceAppPatchDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The source app id | [default to undefined]
**cloudAppId** | **(optional)** `string` | The deprecated source app id | [default to undefined]
**name** | **(optional)** `string` | The source app name | [default to undefined]
**created** | **(optional)** `string` | Time when the source app was created | [default to undefined]
**modified** | **(optional)** `string` | Time when the source app was last modified | [default to undefined]
**enabled** | **(optional)** `boolean` | True if the source app is enabled | [default to false]
**provisionRequestEnabled** | **(optional)** `boolean` | True if the app allows access request | [default to false]
**description** | **(optional)** `string` | The description of the source app | [default to undefined]
**matchAllAccounts** | **(optional)** `boolean` | True if the source app match all accounts | [default to false]
**appCenterEnabled** | **(optional)** `boolean` | True if the app is visible in the request center | [default to true]
**accessProfiles** | **(optional)** `Array<string>` | List of IDs of access profiles | [default to undefined]
**accountSource** | **(optional)** `SourceAppAccountSource` |  | [default to undefined]
**owner** | **(optional)** `BaseReferenceDto` | The owner of source app | [default to undefined]

