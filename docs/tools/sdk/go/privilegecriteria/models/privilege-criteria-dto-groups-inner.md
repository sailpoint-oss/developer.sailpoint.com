# PrivilegeCriteriaDTOGroupsInner

# PrivilegeCriteriaDTOGroupsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operator** | Pointer to **string** | The logical operator to apply between criteria items in the group. | [optional] 
**CriteriaItems** | Pointer to [**[]PrivilegeCriteriaDTOGroupsInnerCriteriaItemsInner**](privilege-criteria-dto-groups-inner-criteria-items-inner) |  | [optional] 

## Methods

### NewPrivilegeCriteriaDTOGroupsInner

`func NewPrivilegeCriteriaDTOGroupsInner() *PrivilegeCriteriaDTOGroupsInner`

NewPrivilegeCriteriaDTOGroupsInner instantiates a new PrivilegeCriteriaDTOGroupsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrivilegeCriteriaDTOGroupsInnerWithDefaults

`func NewPrivilegeCriteriaDTOGroupsInnerWithDefaults() *PrivilegeCriteriaDTOGroupsInner`

NewPrivilegeCriteriaDTOGroupsInnerWithDefaults instantiates a new PrivilegeCriteriaDTOGroupsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperator

`func (o *PrivilegeCriteriaDTOGroupsInner) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *PrivilegeCriteriaDTOGroupsInner) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *PrivilegeCriteriaDTOGroupsInner) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *PrivilegeCriteriaDTOGroupsInner) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetCriteriaItems

`func (o *PrivilegeCriteriaDTOGroupsInner) GetCriteriaItems() []PrivilegeCriteriaDTOGroupsInnerCriteriaItemsInner`

GetCriteriaItems returns the CriteriaItems field if non-nil, zero value otherwise.

### GetCriteriaItemsOk

`func (o *PrivilegeCriteriaDTOGroupsInner) GetCriteriaItemsOk() (*[]PrivilegeCriteriaDTOGroupsInnerCriteriaItemsInner, bool)`

GetCriteriaItemsOk returns a tuple with the CriteriaItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaItems

`func (o *PrivilegeCriteriaDTOGroupsInner) SetCriteriaItems(v []PrivilegeCriteriaDTOGroupsInnerCriteriaItemsInner)`

SetCriteriaItems sets CriteriaItems field to given value.

### HasCriteriaItems

`func (o *PrivilegeCriteriaDTOGroupsInner) HasCriteriaItems() bool`

HasCriteriaItems returns a boolean if a field has been set.


