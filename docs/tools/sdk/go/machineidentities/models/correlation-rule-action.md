# CorrelationRuleAction

# CorrelationRuleAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The target owner type resolved by this action. | 
**Payload** | Pointer to **map[string]interface\{\}** | Action-specific payload. | [optional] 

## Methods

### NewCorrelationRuleAction

`func NewCorrelationRuleAction(type_ string, ) *CorrelationRuleAction`

NewCorrelationRuleAction instantiates a new CorrelationRuleAction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCorrelationRuleActionWithDefaults

`func NewCorrelationRuleActionWithDefaults() *CorrelationRuleAction`

NewCorrelationRuleActionWithDefaults instantiates a new CorrelationRuleAction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *CorrelationRuleAction) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CorrelationRuleAction) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CorrelationRuleAction) SetType(v string)`

SetType sets Type field to given value.


### GetPayload

`func (o *CorrelationRuleAction) GetPayload() map[string]interface{}`

GetPayload returns the Payload field if non-nil, zero value otherwise.

### GetPayloadOk

`func (o *CorrelationRuleAction) GetPayloadOk() (*map[string]interface{}, bool)`

GetPayloadOk returns a tuple with the Payload field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayload

`func (o *CorrelationRuleAction) SetPayload(v map[string]interface{})`

SetPayload sets Payload field to given value.

### HasPayload

`func (o *CorrelationRuleAction) HasPayload() bool`

HasPayload returns a boolean if a field has been set.


