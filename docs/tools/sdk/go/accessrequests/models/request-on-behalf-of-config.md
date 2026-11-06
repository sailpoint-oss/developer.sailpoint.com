# RequestOnBehalfOfConfig

# RequestOnBehalfOfConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowRequestOnBehalfOfAnyoneByAnyone** | Pointer to **bool** | If this is true, anyone can request access for anyone. | [optional] [default to false]
**AllowRequestOnBehalfOfEmployeeByManager** | Pointer to **bool** | If this is true, a manager can request access for his or her direct reports. | [optional] [default to false]
**AllowRequestOnBehalfOfForMachineIdentity** | Pointer to **bool** | If this is true, anyone can request access on behalf of machine identities. Machine access request authorization is evaluated as follows: 1. If this flag is true, any requester is allowed. 2. Else if `allowRequestForMachineByOwner` is true, the requester must be an admin or a primary/secondary owner of every requested machine identity. 3. Else admins are still allowed; non-admins receive 403.  | [optional] [default to true]
**AllowRequestForMachineByOwner** | Pointer to **bool** | When `allowRequestOnBehalfOfForMachineIdentity` is false and this flag is true, only admins and primary/secondary owners of the requested machine identities may submit machine access requests. Defaults to false (opt-in).  | [optional] [default to false]

## Methods

### NewRequestOnBehalfOfConfig

`func NewRequestOnBehalfOfConfig() *RequestOnBehalfOfConfig`

NewRequestOnBehalfOfConfig instantiates a new RequestOnBehalfOfConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestOnBehalfOfConfigWithDefaults

`func NewRequestOnBehalfOfConfigWithDefaults() *RequestOnBehalfOfConfig`

NewRequestOnBehalfOfConfigWithDefaults instantiates a new RequestOnBehalfOfConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowRequestOnBehalfOfAnyoneByAnyone

`func (o *RequestOnBehalfOfConfig) GetAllowRequestOnBehalfOfAnyoneByAnyone() bool`

GetAllowRequestOnBehalfOfAnyoneByAnyone returns the AllowRequestOnBehalfOfAnyoneByAnyone field if non-nil, zero value otherwise.

### GetAllowRequestOnBehalfOfAnyoneByAnyoneOk

`func (o *RequestOnBehalfOfConfig) GetAllowRequestOnBehalfOfAnyoneByAnyoneOk() (*bool, bool)`

GetAllowRequestOnBehalfOfAnyoneByAnyoneOk returns a tuple with the AllowRequestOnBehalfOfAnyoneByAnyone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowRequestOnBehalfOfAnyoneByAnyone

`func (o *RequestOnBehalfOfConfig) SetAllowRequestOnBehalfOfAnyoneByAnyone(v bool)`

SetAllowRequestOnBehalfOfAnyoneByAnyone sets AllowRequestOnBehalfOfAnyoneByAnyone field to given value.

### HasAllowRequestOnBehalfOfAnyoneByAnyone

`func (o *RequestOnBehalfOfConfig) HasAllowRequestOnBehalfOfAnyoneByAnyone() bool`

HasAllowRequestOnBehalfOfAnyoneByAnyone returns a boolean if a field has been set.

### GetAllowRequestOnBehalfOfEmployeeByManager

`func (o *RequestOnBehalfOfConfig) GetAllowRequestOnBehalfOfEmployeeByManager() bool`

GetAllowRequestOnBehalfOfEmployeeByManager returns the AllowRequestOnBehalfOfEmployeeByManager field if non-nil, zero value otherwise.

### GetAllowRequestOnBehalfOfEmployeeByManagerOk

`func (o *RequestOnBehalfOfConfig) GetAllowRequestOnBehalfOfEmployeeByManagerOk() (*bool, bool)`

GetAllowRequestOnBehalfOfEmployeeByManagerOk returns a tuple with the AllowRequestOnBehalfOfEmployeeByManager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowRequestOnBehalfOfEmployeeByManager

`func (o *RequestOnBehalfOfConfig) SetAllowRequestOnBehalfOfEmployeeByManager(v bool)`

SetAllowRequestOnBehalfOfEmployeeByManager sets AllowRequestOnBehalfOfEmployeeByManager field to given value.

### HasAllowRequestOnBehalfOfEmployeeByManager

`func (o *RequestOnBehalfOfConfig) HasAllowRequestOnBehalfOfEmployeeByManager() bool`

HasAllowRequestOnBehalfOfEmployeeByManager returns a boolean if a field has been set.

### GetAllowRequestOnBehalfOfForMachineIdentity

`func (o *RequestOnBehalfOfConfig) GetAllowRequestOnBehalfOfForMachineIdentity() bool`

GetAllowRequestOnBehalfOfForMachineIdentity returns the AllowRequestOnBehalfOfForMachineIdentity field if non-nil, zero value otherwise.

### GetAllowRequestOnBehalfOfForMachineIdentityOk

`func (o *RequestOnBehalfOfConfig) GetAllowRequestOnBehalfOfForMachineIdentityOk() (*bool, bool)`

GetAllowRequestOnBehalfOfForMachineIdentityOk returns a tuple with the AllowRequestOnBehalfOfForMachineIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowRequestOnBehalfOfForMachineIdentity

`func (o *RequestOnBehalfOfConfig) SetAllowRequestOnBehalfOfForMachineIdentity(v bool)`

SetAllowRequestOnBehalfOfForMachineIdentity sets AllowRequestOnBehalfOfForMachineIdentity field to given value.

### HasAllowRequestOnBehalfOfForMachineIdentity

`func (o *RequestOnBehalfOfConfig) HasAllowRequestOnBehalfOfForMachineIdentity() bool`

HasAllowRequestOnBehalfOfForMachineIdentity returns a boolean if a field has been set.

### GetAllowRequestForMachineByOwner

`func (o *RequestOnBehalfOfConfig) GetAllowRequestForMachineByOwner() bool`

GetAllowRequestForMachineByOwner returns the AllowRequestForMachineByOwner field if non-nil, zero value otherwise.

### GetAllowRequestForMachineByOwnerOk

`func (o *RequestOnBehalfOfConfig) GetAllowRequestForMachineByOwnerOk() (*bool, bool)`

GetAllowRequestForMachineByOwnerOk returns a tuple with the AllowRequestForMachineByOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowRequestForMachineByOwner

`func (o *RequestOnBehalfOfConfig) SetAllowRequestForMachineByOwner(v bool)`

SetAllowRequestForMachineByOwner sets AllowRequestForMachineByOwner field to given value.

### HasAllowRequestForMachineByOwner

`func (o *RequestOnBehalfOfConfig) HasAllowRequestForMachineByOwner() bool`

HasAllowRequestForMachineByOwner returns a boolean if a field has been set.


