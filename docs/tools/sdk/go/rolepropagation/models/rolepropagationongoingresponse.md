# Rolepropagationongoingresponse

# Rolepropagationongoingresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsRunning** | Pointer to **bool** | Indicates if the role propagation process is currently running on the tenant | [optional] [default to false]
**RolePropagationDetails** | Pointer to [**RolepropagationongoingresponseRolePropagationDetails**](rolepropagationongoingresponse-role-propagation-details) |  | [optional] 

## Methods

### NewRolepropagationongoingresponse

`func NewRolepropagationongoingresponse() *Rolepropagationongoingresponse`

NewRolepropagationongoingresponse instantiates a new Rolepropagationongoingresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolepropagationongoingresponseWithDefaults

`func NewRolepropagationongoingresponseWithDefaults() *Rolepropagationongoingresponse`

NewRolepropagationongoingresponseWithDefaults instantiates a new Rolepropagationongoingresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsRunning

`func (o *Rolepropagationongoingresponse) GetIsRunning() bool`

GetIsRunning returns the IsRunning field if non-nil, zero value otherwise.

### GetIsRunningOk

`func (o *Rolepropagationongoingresponse) GetIsRunningOk() (*bool, bool)`

GetIsRunningOk returns a tuple with the IsRunning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsRunning

`func (o *Rolepropagationongoingresponse) SetIsRunning(v bool)`

SetIsRunning sets IsRunning field to given value.

### HasIsRunning

`func (o *Rolepropagationongoingresponse) HasIsRunning() bool`

HasIsRunning returns a boolean if a field has been set.

### GetRolePropagationDetails

`func (o *Rolepropagationongoingresponse) GetRolePropagationDetails() RolepropagationongoingresponseRolePropagationDetails`

GetRolePropagationDetails returns the RolePropagationDetails field if non-nil, zero value otherwise.

### GetRolePropagationDetailsOk

`func (o *Rolepropagationongoingresponse) GetRolePropagationDetailsOk() (*RolepropagationongoingresponseRolePropagationDetails, bool)`

GetRolePropagationDetailsOk returns a tuple with the RolePropagationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRolePropagationDetails

`func (o *Rolepropagationongoingresponse) SetRolePropagationDetails(v RolepropagationongoingresponseRolePropagationDetails)`

SetRolePropagationDetails sets RolePropagationDetails field to given value.

### HasRolePropagationDetails

`func (o *Rolepropagationongoingresponse) HasRolePropagationDetails() bool`

HasRolePropagationDetails returns a boolean if a field has been set.


