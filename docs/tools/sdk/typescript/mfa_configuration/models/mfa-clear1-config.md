# MfaClear1Config

# MfaClear1Config

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mfaMethod** | `string` | Mfa method name | [default to undefined]
**enabled** | **(optional)** `boolean` | If MFA method is enabled. | [default to false]
**apiKey** | `string` | The API key for authenticating requests to the CLEAR1 provider. This field is always required, regardless of whether the MFA method is enabled. This value is masked in responses. | [default to undefined]
**knownUserKeyFlowConfig** | **(optional)** `Mfaclear1knownuserkeyflowconfig` |  | [default to undefined]
**establishedIdentityFlowConfig** | **(optional)** `Mfaclear1establishedidentityflowconfig` |  | [default to undefined]

