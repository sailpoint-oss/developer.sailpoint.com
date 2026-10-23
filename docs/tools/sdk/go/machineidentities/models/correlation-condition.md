# CorrelationCondition

# CorrelationCondition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the condition. | [optional] 
**LeftAttributeName** | **string** | The left-hand attribute name of the condition. | 
**OperatorType** | **string** | The comparison operator applied between the left and right attributes. | 
**RightAttributeName** | **string** | The right-hand attribute name. Use an empty string when there is no RHS attribute. | 
**Transform** | Pointer to **NullableString** | Optional transform applied before comparison. | [optional] 
**Ordinal** | **int32** | The position of this condition within the rule. | 

## Methods

### NewCorrelationCondition

`func NewCorrelationCondition(leftAttributeName string, operatorType string, rightAttributeName string, ordinal int32, ) *CorrelationCondition`

NewCorrelationCondition instantiates a new CorrelationCondition object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCorrelationConditionWithDefaults

`func NewCorrelationConditionWithDefaults() *CorrelationCondition`

NewCorrelationConditionWithDefaults instantiates a new CorrelationCondition object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CorrelationCondition) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CorrelationCondition) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CorrelationCondition) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CorrelationCondition) HasId() bool`

HasId returns a boolean if a field has been set.

### GetLeftAttributeName

`func (o *CorrelationCondition) GetLeftAttributeName() string`

GetLeftAttributeName returns the LeftAttributeName field if non-nil, zero value otherwise.

### GetLeftAttributeNameOk

`func (o *CorrelationCondition) GetLeftAttributeNameOk() (*string, bool)`

GetLeftAttributeNameOk returns a tuple with the LeftAttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeftAttributeName

`func (o *CorrelationCondition) SetLeftAttributeName(v string)`

SetLeftAttributeName sets LeftAttributeName field to given value.


### GetOperatorType

`func (o *CorrelationCondition) GetOperatorType() string`

GetOperatorType returns the OperatorType field if non-nil, zero value otherwise.

### GetOperatorTypeOk

`func (o *CorrelationCondition) GetOperatorTypeOk() (*string, bool)`

GetOperatorTypeOk returns a tuple with the OperatorType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperatorType

`func (o *CorrelationCondition) SetOperatorType(v string)`

SetOperatorType sets OperatorType field to given value.


### GetRightAttributeName

`func (o *CorrelationCondition) GetRightAttributeName() string`

GetRightAttributeName returns the RightAttributeName field if non-nil, zero value otherwise.

### GetRightAttributeNameOk

`func (o *CorrelationCondition) GetRightAttributeNameOk() (*string, bool)`

GetRightAttributeNameOk returns a tuple with the RightAttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRightAttributeName

`func (o *CorrelationCondition) SetRightAttributeName(v string)`

SetRightAttributeName sets RightAttributeName field to given value.


### GetTransform

`func (o *CorrelationCondition) GetTransform() string`

GetTransform returns the Transform field if non-nil, zero value otherwise.

### GetTransformOk

`func (o *CorrelationCondition) GetTransformOk() (*string, bool)`

GetTransformOk returns a tuple with the Transform field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransform

`func (o *CorrelationCondition) SetTransform(v string)`

SetTransform sets Transform field to given value.

### HasTransform

`func (o *CorrelationCondition) HasTransform() bool`

HasTransform returns a boolean if a field has been set.

### SetTransformNil

`func (o *CorrelationCondition) SetTransformNil(b bool)`

 SetTransformNil sets the value for Transform to be an explicit nil

### UnsetTransform
`func (o *CorrelationCondition) UnsetTransform()`

UnsetTransform ensures that no value is present for Transform, not even an explicit nil
### GetOrdinal

`func (o *CorrelationCondition) GetOrdinal() int32`

GetOrdinal returns the Ordinal field if non-nil, zero value otherwise.

### GetOrdinalOk

`func (o *CorrelationCondition) GetOrdinalOk() (*int32, bool)`

GetOrdinalOk returns a tuple with the Ordinal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrdinal

`func (o *CorrelationCondition) SetOrdinal(v int32)`

SetOrdinal sets Ordinal field to given value.



