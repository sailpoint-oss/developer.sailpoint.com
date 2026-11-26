# Mfaclear1establishedidentityflowconfig

# Mfaclear1establishedidentityflowconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | If the established identity flow is enabled for the CLEAR1 MFA method. | [optional] [default to false]
**ProjectId** | Pointer to **NullableString** | The ID of the CLEAR1 project used for the established identity flow. This field is required if `enabled` is *true*. It may be null if `enabled` is *false*. | [optional] 
**UserProfileMatchingAttributes** | Pointer to [**NullableMfaclear1userprofilematchingattributes**](mfaclear1userprofilematchingattributes) |  | [optional] 

## Methods

### NewMfaclear1establishedidentityflowconfig

`func NewMfaclear1establishedidentityflowconfig() *Mfaclear1establishedidentityflowconfig`

NewMfaclear1establishedidentityflowconfig instantiates a new Mfaclear1establishedidentityflowconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMfaclear1establishedidentityflowconfigWithDefaults

`func NewMfaclear1establishedidentityflowconfigWithDefaults() *Mfaclear1establishedidentityflowconfig`

NewMfaclear1establishedidentityflowconfigWithDefaults instantiates a new Mfaclear1establishedidentityflowconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *Mfaclear1establishedidentityflowconfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Mfaclear1establishedidentityflowconfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Mfaclear1establishedidentityflowconfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Mfaclear1establishedidentityflowconfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetProjectId

`func (o *Mfaclear1establishedidentityflowconfig) GetProjectId() string`

GetProjectId returns the ProjectId field if non-nil, zero value otherwise.

### GetProjectIdOk

`func (o *Mfaclear1establishedidentityflowconfig) GetProjectIdOk() (*string, bool)`

GetProjectIdOk returns a tuple with the ProjectId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectId

`func (o *Mfaclear1establishedidentityflowconfig) SetProjectId(v string)`

SetProjectId sets ProjectId field to given value.

### HasProjectId

`func (o *Mfaclear1establishedidentityflowconfig) HasProjectId() bool`

HasProjectId returns a boolean if a field has been set.

### SetProjectIdNil

`func (o *Mfaclear1establishedidentityflowconfig) SetProjectIdNil(b bool)`

 SetProjectIdNil sets the value for ProjectId to be an explicit nil

### UnsetProjectId
`func (o *Mfaclear1establishedidentityflowconfig) UnsetProjectId()`

UnsetProjectId ensures that no value is present for ProjectId, not even an explicit nil
### GetUserProfileMatchingAttributes

`func (o *Mfaclear1establishedidentityflowconfig) GetUserProfileMatchingAttributes() Mfaclear1userprofilematchingattributes`

GetUserProfileMatchingAttributes returns the UserProfileMatchingAttributes field if non-nil, zero value otherwise.

### GetUserProfileMatchingAttributesOk

`func (o *Mfaclear1establishedidentityflowconfig) GetUserProfileMatchingAttributesOk() (*Mfaclear1userprofilematchingattributes, bool)`

GetUserProfileMatchingAttributesOk returns a tuple with the UserProfileMatchingAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserProfileMatchingAttributes

`func (o *Mfaclear1establishedidentityflowconfig) SetUserProfileMatchingAttributes(v Mfaclear1userprofilematchingattributes)`

SetUserProfileMatchingAttributes sets UserProfileMatchingAttributes field to given value.

### HasUserProfileMatchingAttributes

`func (o *Mfaclear1establishedidentityflowconfig) HasUserProfileMatchingAttributes() bool`

HasUserProfileMatchingAttributes returns a boolean if a field has been set.

### SetUserProfileMatchingAttributesNil

`func (o *Mfaclear1establishedidentityflowconfig) SetUserProfileMatchingAttributesNil(b bool)`

 SetUserProfileMatchingAttributesNil sets the value for UserProfileMatchingAttributes to be an explicit nil

### UnsetUserProfileMatchingAttributes
`func (o *Mfaclear1establishedidentityflowconfig) UnsetUserProfileMatchingAttributes()`

UnsetUserProfileMatchingAttributes ensures that no value is present for UserProfileMatchingAttributes, not even an explicit nil

