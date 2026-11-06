# ProvisioningCriteriaLevel

# ProvisioningCriteriaLevel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to **ProvisioningCriteriaOperation** |  | [optional] 
**Attribute** | Pointer to **string** | Name of the Account attribute to be tested. If **operation** is one of EQUALS, NOT_EQUALS, CONTAINS, or HAS, this field is required. Otherwise, specifying it is an error. | [optional] 
**Value** | Pointer to **string** | String value to test the Account attribute w/r/t the specified operation. If the operation is one of EQUALS, NOT_EQUALS, or CONTAINS, this field is required. Otherwise, specifying it is an error. If the Attribute is not String-typed, it will be converted to the appropriate type. | [optional] 
**Children** | Pointer to [**[]ProvisioningCriteriaLevel**](provisioning-criteria-level) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [optional] 

## Methods

### NewProvisioningCriteriaLevel

`func NewProvisioningCriteriaLevel() *ProvisioningCriteriaLevel`

NewProvisioningCriteriaLevel instantiates a new ProvisioningCriteriaLevel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningCriteriaLevelWithDefaults

`func NewProvisioningCriteriaLevelWithDefaults() *ProvisioningCriteriaLevel`

NewProvisioningCriteriaLevelWithDefaults instantiates a new ProvisioningCriteriaLevel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *ProvisioningCriteriaLevel) GetOperation() ProvisioningCriteriaOperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *ProvisioningCriteriaLevel) GetOperationOk() (*ProvisioningCriteriaOperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *ProvisioningCriteriaLevel) SetOperation(v ProvisioningCriteriaOperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *ProvisioningCriteriaLevel) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetAttribute

`func (o *ProvisioningCriteriaLevel) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *ProvisioningCriteriaLevel) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *ProvisioningCriteriaLevel) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *ProvisioningCriteriaLevel) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *ProvisioningCriteriaLevel) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ProvisioningCriteriaLevel) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ProvisioningCriteriaLevel) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *ProvisioningCriteriaLevel) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetChildren

`func (o *ProvisioningCriteriaLevel) GetChildren() []ProvisioningCriteriaLevel`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *ProvisioningCriteriaLevel) GetChildrenOk() (*[]ProvisioningCriteriaLevel, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *ProvisioningCriteriaLevel) SetChildren(v []ProvisioningCriteriaLevel)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *ProvisioningCriteriaLevel) HasChildren() bool`

HasChildren returns a boolean if a field has been set.


