# Criteria

# Criteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CriteriaType** | **CriteriaType** |  | 
**Operation** | **Operation** |  | 
**CriteriaProperty** | Pointer to **string** | The specified key from the Type of criteria. | [optional] 
**CriteriaValue** | Pointer to **string** | The value for the specified key from the Type of Criteria. Used for scalar operations. Must be absent when operation is IN. | [optional] 
**CriteriaValues** | Pointer to **[]string** | List of values for the IN operation. Required when operation is IN; must be absent for all other operations. | [optional] 
**Children** | Pointer to [**[]Criteria**](criteria) | List of child criteria. Applicable only for COMPOSITE criteriaType | [optional] 

## Methods

### NewCriteria

`func NewCriteria(criteriaType CriteriaType, operation Operation, ) *Criteria`

NewCriteria instantiates a new Criteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCriteriaWithDefaults

`func NewCriteriaWithDefaults() *Criteria`

NewCriteriaWithDefaults instantiates a new Criteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteriaType

`func (o *Criteria) GetCriteriaType() CriteriaType`

GetCriteriaType returns the CriteriaType field if non-nil, zero value otherwise.

### GetCriteriaTypeOk

`func (o *Criteria) GetCriteriaTypeOk() (*CriteriaType, bool)`

GetCriteriaTypeOk returns a tuple with the CriteriaType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaType

`func (o *Criteria) SetCriteriaType(v CriteriaType)`

SetCriteriaType sets CriteriaType field to given value.


### GetOperation

`func (o *Criteria) GetOperation() Operation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Criteria) GetOperationOk() (*Operation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Criteria) SetOperation(v Operation)`

SetOperation sets Operation field to given value.


### GetCriteriaProperty

`func (o *Criteria) GetCriteriaProperty() string`

GetCriteriaProperty returns the CriteriaProperty field if non-nil, zero value otherwise.

### GetCriteriaPropertyOk

`func (o *Criteria) GetCriteriaPropertyOk() (*string, bool)`

GetCriteriaPropertyOk returns a tuple with the CriteriaProperty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaProperty

`func (o *Criteria) SetCriteriaProperty(v string)`

SetCriteriaProperty sets CriteriaProperty field to given value.

### HasCriteriaProperty

`func (o *Criteria) HasCriteriaProperty() bool`

HasCriteriaProperty returns a boolean if a field has been set.

### GetCriteriaValue

`func (o *Criteria) GetCriteriaValue() string`

GetCriteriaValue returns the CriteriaValue field if non-nil, zero value otherwise.

### GetCriteriaValueOk

`func (o *Criteria) GetCriteriaValueOk() (*string, bool)`

GetCriteriaValueOk returns a tuple with the CriteriaValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaValue

`func (o *Criteria) SetCriteriaValue(v string)`

SetCriteriaValue sets CriteriaValue field to given value.

### HasCriteriaValue

`func (o *Criteria) HasCriteriaValue() bool`

HasCriteriaValue returns a boolean if a field has been set.

### GetCriteriaValues

`func (o *Criteria) GetCriteriaValues() []string`

GetCriteriaValues returns the CriteriaValues field if non-nil, zero value otherwise.

### GetCriteriaValuesOk

`func (o *Criteria) GetCriteriaValuesOk() (*[]string, bool)`

GetCriteriaValuesOk returns a tuple with the CriteriaValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaValues

`func (o *Criteria) SetCriteriaValues(v []string)`

SetCriteriaValues sets CriteriaValues field to given value.

### HasCriteriaValues

`func (o *Criteria) HasCriteriaValues() bool`

HasCriteriaValues returns a boolean if a field has been set.

### GetChildren

`func (o *Criteria) GetChildren() []Criteria`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *Criteria) GetChildrenOk() (*[]Criteria, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *Criteria) SetChildren(v []Criteria)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *Criteria) HasChildren() bool`

HasChildren returns a boolean if a field has been set.


