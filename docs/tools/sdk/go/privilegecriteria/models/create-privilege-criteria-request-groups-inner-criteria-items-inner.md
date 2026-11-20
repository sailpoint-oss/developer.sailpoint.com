# CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner

# CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetType** | Pointer to **string** | The target type of the criteria item. | [optional] 
**Operator** | Pointer to **NullableString** |  | [optional] 
**Values** | Pointer to **[]string** | The values to evaluate the property against. | [optional] 
**IgnoreCase** | Pointer to **bool** | Whether to ignore case when evaluating the property against the values. | [optional] [default to false]

## Methods

### NewCreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner

`func NewCreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner() *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner`

NewCreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner instantiates a new CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInnerWithDefaults

`func NewCreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInnerWithDefaults() *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner`

NewCreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInnerWithDefaults instantiates a new CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTargetType

`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) GetTargetType() string`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) GetTargetTypeOk() (*string, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) SetTargetType(v string)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.

### GetOperator

`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### SetOperatorNil

`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) SetOperatorNil(b bool)`

 SetOperatorNil sets the value for Operator to be an explicit nil

### UnsetOperator
`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) UnsetOperator()`

UnsetOperator ensures that no value is present for Operator, not even an explicit nil
### GetValues

`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) SetValues(v []string)`

SetValues sets Values field to given value.

### HasValues

`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) HasValues() bool`

HasValues returns a boolean if a field has been set.

### GetIgnoreCase

`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) GetIgnoreCase() bool`

GetIgnoreCase returns the IgnoreCase field if non-nil, zero value otherwise.

### GetIgnoreCaseOk

`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) GetIgnoreCaseOk() (*bool, bool)`

GetIgnoreCaseOk returns a tuple with the IgnoreCase field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnoreCase

`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) SetIgnoreCase(v bool)`

SetIgnoreCase sets IgnoreCase field to given value.

### HasIgnoreCase

`func (o *CreatePrivilegeCriteriaRequestGroupsInnerCriteriaItemsInner) HasIgnoreCase() bool`

HasIgnoreCase returns a boolean if a field has been set.


