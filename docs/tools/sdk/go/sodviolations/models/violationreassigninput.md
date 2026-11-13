# Violationreassigninput

# Violationreassigninput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReassignTo** | [**Reassigninput**](reassigninput) |  | 
**Comments** | Pointer to **string** | Optional comments explaining the reassignment. | [optional] 

## Methods

### NewViolationreassigninput

`func NewViolationreassigninput(reassignTo Reassigninput, ) *Violationreassigninput`

NewViolationreassigninput instantiates a new Violationreassigninput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewViolationreassigninputWithDefaults

`func NewViolationreassigninputWithDefaults() *Violationreassigninput`

NewViolationreassigninputWithDefaults instantiates a new Violationreassigninput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReassignTo

`func (o *Violationreassigninput) GetReassignTo() Reassigninput`

GetReassignTo returns the ReassignTo field if non-nil, zero value otherwise.

### GetReassignToOk

`func (o *Violationreassigninput) GetReassignToOk() (*Reassigninput, bool)`

GetReassignToOk returns a tuple with the ReassignTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignTo

`func (o *Violationreassigninput) SetReassignTo(v Reassigninput)`

SetReassignTo sets ReassignTo field to given value.


### GetComments

`func (o *Violationreassigninput) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *Violationreassigninput) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *Violationreassigninput) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *Violationreassigninput) HasComments() bool`

HasComments returns a boolean if a field has been set.


