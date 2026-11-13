# MachineAccountDeleteRequest

# MachineAccountDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comments** | Pointer to **NullableString** | Comments about the deletion request. Depending on the tenant's account deletion approval settings, comments can be required. | [optional] 

## Methods

### NewMachineAccountDeleteRequest

`func NewMachineAccountDeleteRequest() *MachineAccountDeleteRequest`

NewMachineAccountDeleteRequest instantiates a new MachineAccountDeleteRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountDeleteRequestWithDefaults

`func NewMachineAccountDeleteRequestWithDefaults() *MachineAccountDeleteRequest`

NewMachineAccountDeleteRequestWithDefaults instantiates a new MachineAccountDeleteRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComments

`func (o *MachineAccountDeleteRequest) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *MachineAccountDeleteRequest) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *MachineAccountDeleteRequest) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *MachineAccountDeleteRequest) HasComments() bool`

HasComments returns a boolean if a field has been set.

### SetCommentsNil

`func (o *MachineAccountDeleteRequest) SetCommentsNil(b bool)`

 SetCommentsNil sets the value for Comments to be an explicit nil

### UnsetComments
`func (o *MachineAccountDeleteRequest) UnsetComments()`

UnsetComments ensures that no value is present for Comments, not even an explicit nil

