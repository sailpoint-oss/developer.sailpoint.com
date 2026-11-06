# Identity

# Identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the identity | [readonly] [default to undefined]
**name** | `string` | The identity\'s name is equivalent to its Display Name attribute. | [default to undefined]
**created** | **(optional)** `string` | Creation date of the identity | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the identity | [readonly] [default to undefined]
**alias** | **(optional)** `string` | The identity\'s alternate unique identifier is equivalent to its Account Name on the authoritative source account schema. | [default to undefined]
**emailAddress** | **(optional)** `string` | The email address of the identity | [default to undefined]
**processingState** | **(optional)** `string` | The processing state of the identity | [default to undefined]
**identityStatus** | **(optional)** `string` | The identity\'s status in the system | [default to undefined]
**managerRef** | **(optional)** `IdentityManagerRef` |  | [default to undefined]
**isManager** | **(optional)** `boolean` | Whether this identity is a manager of another identity | [default to false]
**lastRefresh** | **(optional)** `string` | The last time the identity was refreshed by the system | [default to undefined]
**attributes** | **(optional)** `object` | A map with the identity attributes for the identity | [default to undefined]
**lifecycleState** | **(optional)** `IdentityLifecycleState` |  | [default to undefined]

