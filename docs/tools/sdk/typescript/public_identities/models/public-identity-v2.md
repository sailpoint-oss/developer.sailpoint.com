# PublicIdentityV2

# PublicIdentityV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Identity id | [default to undefined]
**name** | `string` | Alternate unique identifier for the identity (alias / search field name). | [default to undefined]
**displayName** | `string` | Human-readable display name of the identity. | [default to undefined]
**email** | `string` | Email address of identity. | [default to undefined]
**identityState** | `string` | The current state of the identity, which determines how Identity Security Cloud interacts with the identity. | [default to undefined]
**cloudLifecycleState** | `string` | The lifecycle status for the identity | [default to undefined]
**manager** | `PublicIdentityV2Manager` | Manager of this identity, or null when none | [default to undefined]
**attributes** |  | Configured public identity attributes only (from visible-attributes configuredAttributes). Missing keys are omitted; present null values are returned as null. | [default to undefined]

