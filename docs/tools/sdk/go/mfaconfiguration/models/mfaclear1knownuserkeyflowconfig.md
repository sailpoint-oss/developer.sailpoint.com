# Mfaclear1knownuserkeyflowconfig

# Mfaclear1knownuserkeyflowconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | If the known user key flow is enabled for the CLEAR1 MFA method. | [optional] [default to false]
**ProjectId** | Pointer to **NullableString** | The ID of the CLEAR1 project used for the known user key flow. This field is required if `enabled` is *true*. It may be null if `enabled` is *false*. | [optional] 
**IdentityAttribute** | Pointer to **NullableString** | The name of the attribute used to map an Identity Security Cloud identity to the CLEAR1 user key. This field is required if `enabled` is *true*. It may be null if `enabled` is *false*. | [optional] 

## Methods

### NewMfaclear1knownuserkeyflowconfig

`func NewMfaclear1knownuserkeyflowconfig() *Mfaclear1knownuserkeyflowconfig`

NewMfaclear1knownuserkeyflowconfig instantiates a new Mfaclear1knownuserkeyflowconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMfaclear1knownuserkeyflowconfigWithDefaults

`func NewMfaclear1knownuserkeyflowconfigWithDefaults() *Mfaclear1knownuserkeyflowconfig`

NewMfaclear1knownuserkeyflowconfigWithDefaults instantiates a new Mfaclear1knownuserkeyflowconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *Mfaclear1knownuserkeyflowconfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Mfaclear1knownuserkeyflowconfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Mfaclear1knownuserkeyflowconfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Mfaclear1knownuserkeyflowconfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetProjectId

`func (o *Mfaclear1knownuserkeyflowconfig) GetProjectId() string`

GetProjectId returns the ProjectId field if non-nil, zero value otherwise.

### GetProjectIdOk

`func (o *Mfaclear1knownuserkeyflowconfig) GetProjectIdOk() (*string, bool)`

GetProjectIdOk returns a tuple with the ProjectId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectId

`func (o *Mfaclear1knownuserkeyflowconfig) SetProjectId(v string)`

SetProjectId sets ProjectId field to given value.

### HasProjectId

`func (o *Mfaclear1knownuserkeyflowconfig) HasProjectId() bool`

HasProjectId returns a boolean if a field has been set.

### SetProjectIdNil

`func (o *Mfaclear1knownuserkeyflowconfig) SetProjectIdNil(b bool)`

 SetProjectIdNil sets the value for ProjectId to be an explicit nil

### UnsetProjectId
`func (o *Mfaclear1knownuserkeyflowconfig) UnsetProjectId()`

UnsetProjectId ensures that no value is present for ProjectId, not even an explicit nil
### GetIdentityAttribute

`func (o *Mfaclear1knownuserkeyflowconfig) GetIdentityAttribute() string`

GetIdentityAttribute returns the IdentityAttribute field if non-nil, zero value otherwise.

### GetIdentityAttributeOk

`func (o *Mfaclear1knownuserkeyflowconfig) GetIdentityAttributeOk() (*string, bool)`

GetIdentityAttributeOk returns a tuple with the IdentityAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttribute

`func (o *Mfaclear1knownuserkeyflowconfig) SetIdentityAttribute(v string)`

SetIdentityAttribute sets IdentityAttribute field to given value.

### HasIdentityAttribute

`func (o *Mfaclear1knownuserkeyflowconfig) HasIdentityAttribute() bool`

HasIdentityAttribute returns a boolean if a field has been set.

### SetIdentityAttributeNil

`func (o *Mfaclear1knownuserkeyflowconfig) SetIdentityAttributeNil(b bool)`

 SetIdentityAttributeNil sets the value for IdentityAttribute to be an explicit nil

### UnsetIdentityAttribute
`func (o *Mfaclear1knownuserkeyflowconfig) UnsetIdentityAttribute()`

UnsetIdentityAttribute ensures that no value is present for IdentityAttribute, not even an explicit nil

