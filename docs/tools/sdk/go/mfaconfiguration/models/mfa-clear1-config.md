# MfaClear1Config

# MfaClear1Config

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MfaMethod** | **string** | Mfa method name | 
**Enabled** | Pointer to **bool** | If MFA method is enabled. | [optional] [default to false]
**ApiKey** | **string** | The API key for authenticating requests to the CLEAR1 provider. This field is always required, regardless of whether the MFA method is enabled. This value is masked in responses. | 
**KnownUserKeyFlowConfig** | Pointer to [**NullableMfaclear1knownuserkeyflowconfig**](mfaclear1knownuserkeyflowconfig) |  | [optional] 
**EstablishedIdentityFlowConfig** | Pointer to [**NullableMfaclear1establishedidentityflowconfig**](mfaclear1establishedidentityflowconfig) |  | [optional] 

## Methods

### NewMfaClear1Config

`func NewMfaClear1Config(mfaMethod string, apiKey string, ) *MfaClear1Config`

NewMfaClear1Config instantiates a new MfaClear1Config object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMfaClear1ConfigWithDefaults

`func NewMfaClear1ConfigWithDefaults() *MfaClear1Config`

NewMfaClear1ConfigWithDefaults instantiates a new MfaClear1Config object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMfaMethod

`func (o *MfaClear1Config) GetMfaMethod() string`

GetMfaMethod returns the MfaMethod field if non-nil, zero value otherwise.

### GetMfaMethodOk

`func (o *MfaClear1Config) GetMfaMethodOk() (*string, bool)`

GetMfaMethodOk returns a tuple with the MfaMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMfaMethod

`func (o *MfaClear1Config) SetMfaMethod(v string)`

SetMfaMethod sets MfaMethod field to given value.


### GetEnabled

`func (o *MfaClear1Config) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *MfaClear1Config) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *MfaClear1Config) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *MfaClear1Config) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetApiKey

`func (o *MfaClear1Config) GetApiKey() string`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *MfaClear1Config) GetApiKeyOk() (*string, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *MfaClear1Config) SetApiKey(v string)`

SetApiKey sets ApiKey field to given value.


### GetKnownUserKeyFlowConfig

`func (o *MfaClear1Config) GetKnownUserKeyFlowConfig() Mfaclear1knownuserkeyflowconfig`

GetKnownUserKeyFlowConfig returns the KnownUserKeyFlowConfig field if non-nil, zero value otherwise.

### GetKnownUserKeyFlowConfigOk

`func (o *MfaClear1Config) GetKnownUserKeyFlowConfigOk() (*Mfaclear1knownuserkeyflowconfig, bool)`

GetKnownUserKeyFlowConfigOk returns a tuple with the KnownUserKeyFlowConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKnownUserKeyFlowConfig

`func (o *MfaClear1Config) SetKnownUserKeyFlowConfig(v Mfaclear1knownuserkeyflowconfig)`

SetKnownUserKeyFlowConfig sets KnownUserKeyFlowConfig field to given value.

### HasKnownUserKeyFlowConfig

`func (o *MfaClear1Config) HasKnownUserKeyFlowConfig() bool`

HasKnownUserKeyFlowConfig returns a boolean if a field has been set.

### SetKnownUserKeyFlowConfigNil

`func (o *MfaClear1Config) SetKnownUserKeyFlowConfigNil(b bool)`

 SetKnownUserKeyFlowConfigNil sets the value for KnownUserKeyFlowConfig to be an explicit nil

### UnsetKnownUserKeyFlowConfig
`func (o *MfaClear1Config) UnsetKnownUserKeyFlowConfig()`

UnsetKnownUserKeyFlowConfig ensures that no value is present for KnownUserKeyFlowConfig, not even an explicit nil
### GetEstablishedIdentityFlowConfig

`func (o *MfaClear1Config) GetEstablishedIdentityFlowConfig() Mfaclear1establishedidentityflowconfig`

GetEstablishedIdentityFlowConfig returns the EstablishedIdentityFlowConfig field if non-nil, zero value otherwise.

### GetEstablishedIdentityFlowConfigOk

`func (o *MfaClear1Config) GetEstablishedIdentityFlowConfigOk() (*Mfaclear1establishedidentityflowconfig, bool)`

GetEstablishedIdentityFlowConfigOk returns a tuple with the EstablishedIdentityFlowConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEstablishedIdentityFlowConfig

`func (o *MfaClear1Config) SetEstablishedIdentityFlowConfig(v Mfaclear1establishedidentityflowconfig)`

SetEstablishedIdentityFlowConfig sets EstablishedIdentityFlowConfig field to given value.

### HasEstablishedIdentityFlowConfig

`func (o *MfaClear1Config) HasEstablishedIdentityFlowConfig() bool`

HasEstablishedIdentityFlowConfig returns a boolean if a field has been set.

### SetEstablishedIdentityFlowConfigNil

`func (o *MfaClear1Config) SetEstablishedIdentityFlowConfigNil(b bool)`

 SetEstablishedIdentityFlowConfigNil sets the value for EstablishedIdentityFlowConfig to be an explicit nil

### UnsetEstablishedIdentityFlowConfig
`func (o *MfaClear1Config) UnsetEstablishedIdentityFlowConfig()`

UnsetEstablishedIdentityFlowConfig ensures that no value is present for EstablishedIdentityFlowConfig, not even an explicit nil

