# TrackerValueDTO

# TrackerValueDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the tracker created to record this delete operation. | [optional] 
**Type** | Pointer to **string** | The type of object being tracked. | [optional] 
**Status** | Pointer to **string** | The status of the delete operation. | [optional] 
**Errors** | Pointer to **[]string** | Any errors encountered while processing the delete operation. | [optional] 
**Created** | Pointer to **SailPointTime** | The time the delete operation was initiated. | [optional] 
**Value** | Pointer to **string** | Technical name of the deleted Attribute value. | [optional] 

## Methods

### NewTrackerValueDTO

`func NewTrackerValueDTO() *TrackerValueDTO`

NewTrackerValueDTO instantiates a new TrackerValueDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrackerValueDTOWithDefaults

`func NewTrackerValueDTOWithDefaults() *TrackerValueDTO`

NewTrackerValueDTOWithDefaults instantiates a new TrackerValueDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TrackerValueDTO) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TrackerValueDTO) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TrackerValueDTO) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *TrackerValueDTO) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *TrackerValueDTO) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TrackerValueDTO) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TrackerValueDTO) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TrackerValueDTO) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStatus

`func (o *TrackerValueDTO) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TrackerValueDTO) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TrackerValueDTO) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *TrackerValueDTO) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetErrors

`func (o *TrackerValueDTO) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *TrackerValueDTO) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *TrackerValueDTO) SetErrors(v []string)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *TrackerValueDTO) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### SetErrorsNil

`func (o *TrackerValueDTO) SetErrorsNil(b bool)`

 SetErrorsNil sets the value for Errors to be an explicit nil

### UnsetErrors
`func (o *TrackerValueDTO) UnsetErrors()`

UnsetErrors ensures that no value is present for Errors, not even an explicit nil
### GetCreated

`func (o *TrackerValueDTO) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *TrackerValueDTO) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *TrackerValueDTO) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *TrackerValueDTO) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetValue

`func (o *TrackerValueDTO) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *TrackerValueDTO) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *TrackerValueDTO) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *TrackerValueDTO) HasValue() bool`

HasValue returns a boolean if a field has been set.


