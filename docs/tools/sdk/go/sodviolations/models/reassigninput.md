# Reassigninput

# Reassigninput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssigneeId** | **string** | The unique identifier of the identity or governance group receiving the violation. | 
**AssigneeType** | **string** | The type of assignee receiving the violation. | 

## Methods

### NewReassigninput

`func NewReassigninput(assigneeId string, assigneeType string, ) *Reassigninput`

NewReassigninput instantiates a new Reassigninput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReassigninputWithDefaults

`func NewReassigninputWithDefaults() *Reassigninput`

NewReassigninputWithDefaults instantiates a new Reassigninput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssigneeId

`func (o *Reassigninput) GetAssigneeId() string`

GetAssigneeId returns the AssigneeId field if non-nil, zero value otherwise.

### GetAssigneeIdOk

`func (o *Reassigninput) GetAssigneeIdOk() (*string, bool)`

GetAssigneeIdOk returns a tuple with the AssigneeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssigneeId

`func (o *Reassigninput) SetAssigneeId(v string)`

SetAssigneeId sets AssigneeId field to given value.


### GetAssigneeType

`func (o *Reassigninput) GetAssigneeType() string`

GetAssigneeType returns the AssigneeType field if non-nil, zero value otherwise.

### GetAssigneeTypeOk

`func (o *Reassigninput) GetAssigneeTypeOk() (*string, bool)`

GetAssigneeTypeOk returns a tuple with the AssigneeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssigneeType

`func (o *Reassigninput) SetAssigneeType(v string)`

SetAssigneeType sets AssigneeType field to given value.



