# PrivilegeCriteriaDTO

# PrivilegeCriteriaDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The Id of the criteria. | [optional] 
**SourceId** | Pointer to **string** | The Id of the source that the criteria is applied to. | [optional] 
**Type** | Pointer to **string** | The type of criteria. | [optional] 
**Operator** | Pointer to **string** | The logical operator to apply between groups. | [optional] 
**Groups** | Pointer to [**[]PrivilegeCriteriaDTOGroupsInner**](privilege-criteria-dto-groups-inner) |  | [optional] 
**PrivilegeLevel** | Pointer to **string** | The privilege level assigned by this criteria. | [optional] 

## Methods

### NewPrivilegeCriteriaDTO

`func NewPrivilegeCriteriaDTO() *PrivilegeCriteriaDTO`

NewPrivilegeCriteriaDTO instantiates a new PrivilegeCriteriaDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrivilegeCriteriaDTOWithDefaults

`func NewPrivilegeCriteriaDTOWithDefaults() *PrivilegeCriteriaDTO`

NewPrivilegeCriteriaDTOWithDefaults instantiates a new PrivilegeCriteriaDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PrivilegeCriteriaDTO) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PrivilegeCriteriaDTO) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PrivilegeCriteriaDTO) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *PrivilegeCriteriaDTO) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *PrivilegeCriteriaDTO) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *PrivilegeCriteriaDTO) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *PrivilegeCriteriaDTO) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *PrivilegeCriteriaDTO) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetType

`func (o *PrivilegeCriteriaDTO) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PrivilegeCriteriaDTO) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PrivilegeCriteriaDTO) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *PrivilegeCriteriaDTO) HasType() bool`

HasType returns a boolean if a field has been set.

### GetOperator

`func (o *PrivilegeCriteriaDTO) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *PrivilegeCriteriaDTO) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *PrivilegeCriteriaDTO) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *PrivilegeCriteriaDTO) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetGroups

`func (o *PrivilegeCriteriaDTO) GetGroups() []PrivilegeCriteriaDTOGroupsInner`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *PrivilegeCriteriaDTO) GetGroupsOk() (*[]PrivilegeCriteriaDTOGroupsInner, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *PrivilegeCriteriaDTO) SetGroups(v []PrivilegeCriteriaDTOGroupsInner)`

SetGroups sets Groups field to given value.

### HasGroups

`func (o *PrivilegeCriteriaDTO) HasGroups() bool`

HasGroups returns a boolean if a field has been set.

### GetPrivilegeLevel

`func (o *PrivilegeCriteriaDTO) GetPrivilegeLevel() string`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *PrivilegeCriteriaDTO) GetPrivilegeLevelOk() (*string, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *PrivilegeCriteriaDTO) SetPrivilegeLevel(v string)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *PrivilegeCriteriaDTO) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.


