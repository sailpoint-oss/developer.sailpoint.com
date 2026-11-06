# CreatePrivilegeCriteriaRequest

# CreatePrivilegeCriteriaRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | Pointer to **string** | The Id of the source that the criteria is applied to. | [optional] 
**Type** | Pointer to **string** | The type of criteria being created. Expects \"CUSTOM\". | [optional] 
**Operator** | Pointer to **string** | The logical operator to apply between groups. | [optional] 
**Groups** | Pointer to [**[]CreatePrivilegeCriteriaRequestGroupsInner**](create-privilege-criteria-request-groups-inner) |  | [optional] 
**PrivilegeLevel** | Pointer to **string** | The privilege level assigned by this criteria. | [optional] 

## Methods

### NewCreatePrivilegeCriteriaRequest

`func NewCreatePrivilegeCriteriaRequest() *CreatePrivilegeCriteriaRequest`

NewCreatePrivilegeCriteriaRequest instantiates a new CreatePrivilegeCriteriaRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatePrivilegeCriteriaRequestWithDefaults

`func NewCreatePrivilegeCriteriaRequestWithDefaults() *CreatePrivilegeCriteriaRequest`

NewCreatePrivilegeCriteriaRequestWithDefaults instantiates a new CreatePrivilegeCriteriaRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceId

`func (o *CreatePrivilegeCriteriaRequest) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *CreatePrivilegeCriteriaRequest) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *CreatePrivilegeCriteriaRequest) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *CreatePrivilegeCriteriaRequest) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetType

`func (o *CreatePrivilegeCriteriaRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CreatePrivilegeCriteriaRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CreatePrivilegeCriteriaRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CreatePrivilegeCriteriaRequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetOperator

`func (o *CreatePrivilegeCriteriaRequest) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *CreatePrivilegeCriteriaRequest) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *CreatePrivilegeCriteriaRequest) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *CreatePrivilegeCriteriaRequest) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetGroups

`func (o *CreatePrivilegeCriteriaRequest) GetGroups() []CreatePrivilegeCriteriaRequestGroupsInner`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *CreatePrivilegeCriteriaRequest) GetGroupsOk() (*[]CreatePrivilegeCriteriaRequestGroupsInner, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *CreatePrivilegeCriteriaRequest) SetGroups(v []CreatePrivilegeCriteriaRequestGroupsInner)`

SetGroups sets Groups field to given value.

### HasGroups

`func (o *CreatePrivilegeCriteriaRequest) HasGroups() bool`

HasGroups returns a boolean if a field has been set.

### GetPrivilegeLevel

`func (o *CreatePrivilegeCriteriaRequest) GetPrivilegeLevel() string`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *CreatePrivilegeCriteriaRequest) GetPrivilegeLevelOk() (*string, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *CreatePrivilegeCriteriaRequest) SetPrivilegeLevel(v string)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *CreatePrivilegeCriteriaRequest) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.


