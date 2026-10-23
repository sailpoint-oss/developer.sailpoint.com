# TrackerKeyDTO

# TrackerKeyDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the tracker created to record this delete operation. | [optional] 
**Type** | Pointer to **string** | The type of object being tracked. | [optional] 
**Status** | Pointer to **string** | The status of the delete operation. | [optional] 
**Errors** | Pointer to **[]string** | Any errors encountered while processing the delete operation. | [optional] 
**Created** | Pointer to **SailPointTime** | The time the delete operation was initiated. | [optional] 
**Key** | Pointer to **NullableString** | Technical name of the deleted Attribute. | [optional] 

## Methods

### NewTrackerKeyDTO

`func NewTrackerKeyDTO() *TrackerKeyDTO`

NewTrackerKeyDTO instantiates a new TrackerKeyDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrackerKeyDTOWithDefaults

`func NewTrackerKeyDTOWithDefaults() *TrackerKeyDTO`

NewTrackerKeyDTOWithDefaults instantiates a new TrackerKeyDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TrackerKeyDTO) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TrackerKeyDTO) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TrackerKeyDTO) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *TrackerKeyDTO) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *TrackerKeyDTO) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TrackerKeyDTO) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TrackerKeyDTO) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TrackerKeyDTO) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStatus

`func (o *TrackerKeyDTO) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TrackerKeyDTO) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TrackerKeyDTO) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *TrackerKeyDTO) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetErrors

`func (o *TrackerKeyDTO) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *TrackerKeyDTO) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *TrackerKeyDTO) SetErrors(v []string)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *TrackerKeyDTO) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### SetErrorsNil

`func (o *TrackerKeyDTO) SetErrorsNil(b bool)`

 SetErrorsNil sets the value for Errors to be an explicit nil

### UnsetErrors
`func (o *TrackerKeyDTO) UnsetErrors()`

UnsetErrors ensures that no value is present for Errors, not even an explicit nil
### GetCreated

`func (o *TrackerKeyDTO) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *TrackerKeyDTO) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *TrackerKeyDTO) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *TrackerKeyDTO) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetKey

`func (o *TrackerKeyDTO) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *TrackerKeyDTO) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *TrackerKeyDTO) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *TrackerKeyDTO) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *TrackerKeyDTO) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *TrackerKeyDTO) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil

