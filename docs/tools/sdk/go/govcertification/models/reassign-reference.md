# ReassignReference

# ReassignReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reassign** | [**[]Reassign**](reassign) | List of entities to be reassigned. | 
**ReassignTo** | **string** | The ID of the identity to which the certification is reassigned | 
**Reason** | **string** | The reason comment for why the reassign was made | 

## Methods

### NewReassignReference

`func NewReassignReference(reassign []Reassign, reassignTo string, reason string, ) *ReassignReference`

NewReassignReference instantiates a new ReassignReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReassignReferenceWithDefaults

`func NewReassignReferenceWithDefaults() *ReassignReference`

NewReassignReferenceWithDefaults instantiates a new ReassignReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReassign

`func (o *ReassignReference) GetReassign() []Reassign`

GetReassign returns the Reassign field if non-nil, zero value otherwise.

### GetReassignOk

`func (o *ReassignReference) GetReassignOk() (*[]Reassign, bool)`

GetReassignOk returns a tuple with the Reassign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassign

`func (o *ReassignReference) SetReassign(v []Reassign)`

SetReassign sets Reassign field to given value.


### GetReassignTo

`func (o *ReassignReference) GetReassignTo() string`

GetReassignTo returns the ReassignTo field if non-nil, zero value otherwise.

### GetReassignToOk

`func (o *ReassignReference) GetReassignToOk() (*string, bool)`

GetReassignToOk returns a tuple with the ReassignTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignTo

`func (o *ReassignReference) SetReassignTo(v string)`

SetReassignTo sets ReassignTo field to given value.


### GetReason

`func (o *ReassignReference) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *ReassignReference) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *ReassignReference) SetReason(v string)`

SetReason sets Reason field to given value.



