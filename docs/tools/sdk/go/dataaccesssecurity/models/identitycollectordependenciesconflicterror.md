# Identitycollectordependenciesconflicterror

# Identitycollectordependenciesconflicterror

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | Pointer to **string** | Fine-grained error code providing more detail of the error. | [optional] 
**TrackingId** | Pointer to **string** | Unique tracking id for the error. | [optional] 
**Messages** | Pointer to [**[]IdentitycollectordependenciesconflicterrorMessagesInner**](identitycollectordependenciesconflicterror-messages-inner) | Generic localized reason for error. | [optional] 
**Dependencies** | Pointer to [**[]Identitycollectordependency**](identitycollectordependency) | Dependent objects blocking deletion. At most three items are returned. | [optional] 
**ExtendedDependenciesCount** | Pointer to **int32** | Number of additional dependent objects not included in `dependencies`. | [optional] 

## Methods

### NewIdentitycollectordependenciesconflicterror

`func NewIdentitycollectordependenciesconflicterror() *Identitycollectordependenciesconflicterror`

NewIdentitycollectordependenciesconflicterror instantiates a new Identitycollectordependenciesconflicterror object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitycollectordependenciesconflicterrorWithDefaults

`func NewIdentitycollectordependenciesconflicterrorWithDefaults() *Identitycollectordependenciesconflicterror`

NewIdentitycollectordependenciesconflicterrorWithDefaults instantiates a new Identitycollectordependenciesconflicterror object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailCode

`func (o *Identitycollectordependenciesconflicterror) GetDetailCode() string`

GetDetailCode returns the DetailCode field if non-nil, zero value otherwise.

### GetDetailCodeOk

`func (o *Identitycollectordependenciesconflicterror) GetDetailCodeOk() (*string, bool)`

GetDetailCodeOk returns a tuple with the DetailCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailCode

`func (o *Identitycollectordependenciesconflicterror) SetDetailCode(v string)`

SetDetailCode sets DetailCode field to given value.

### HasDetailCode

`func (o *Identitycollectordependenciesconflicterror) HasDetailCode() bool`

HasDetailCode returns a boolean if a field has been set.

### GetTrackingId

`func (o *Identitycollectordependenciesconflicterror) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *Identitycollectordependenciesconflicterror) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *Identitycollectordependenciesconflicterror) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *Identitycollectordependenciesconflicterror) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.

### GetMessages

`func (o *Identitycollectordependenciesconflicterror) GetMessages() []IdentitycollectordependenciesconflicterrorMessagesInner`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *Identitycollectordependenciesconflicterror) GetMessagesOk() (*[]IdentitycollectordependenciesconflicterrorMessagesInner, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *Identitycollectordependenciesconflicterror) SetMessages(v []IdentitycollectordependenciesconflicterrorMessagesInner)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *Identitycollectordependenciesconflicterror) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetDependencies

`func (o *Identitycollectordependenciesconflicterror) GetDependencies() []Identitycollectordependency`

GetDependencies returns the Dependencies field if non-nil, zero value otherwise.

### GetDependenciesOk

`func (o *Identitycollectordependenciesconflicterror) GetDependenciesOk() (*[]Identitycollectordependency, bool)`

GetDependenciesOk returns a tuple with the Dependencies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDependencies

`func (o *Identitycollectordependenciesconflicterror) SetDependencies(v []Identitycollectordependency)`

SetDependencies sets Dependencies field to given value.

### HasDependencies

`func (o *Identitycollectordependenciesconflicterror) HasDependencies() bool`

HasDependencies returns a boolean if a field has been set.

### GetExtendedDependenciesCount

`func (o *Identitycollectordependenciesconflicterror) GetExtendedDependenciesCount() int32`

GetExtendedDependenciesCount returns the ExtendedDependenciesCount field if non-nil, zero value otherwise.

### GetExtendedDependenciesCountOk

`func (o *Identitycollectordependenciesconflicterror) GetExtendedDependenciesCountOk() (*int32, bool)`

GetExtendedDependenciesCountOk returns a tuple with the ExtendedDependenciesCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtendedDependenciesCount

`func (o *Identitycollectordependenciesconflicterror) SetExtendedDependenciesCount(v int32)`

SetExtendedDependenciesCount sets ExtendedDependenciesCount field to given value.

### HasExtendedDependenciesCount

`func (o *Identitycollectordependenciesconflicterror) HasExtendedDependenciesCount() bool`

HasExtendedDependenciesCount returns a boolean if a field has been set.


