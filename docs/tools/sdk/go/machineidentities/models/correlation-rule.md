# CorrelationRule

# CorrelationRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Omit for new rules (server mints a UUID). Send only when updating a rule that already exists on this config (merge on PATCH). Unknown ids are rejected. | [optional] 
**Priority** | **int32** | The evaluation priority of the rule. Lower values are evaluated first. | 
**DefaultRule** | **bool** | Whether this rule is the default rule for the config. | 
**RuleType** | **string** | The rule subject type. When either ruleType or ruleAction.type is GOVERNANCE_GROUP, both must be; ruleType GOVERNANCE_GROUP is allowed only when the parent config type is OWNER_SECONDARY. | 
**RuleAction** | [**CorrelationRuleAction**](correlation-rule-action) |  | 
**ConditionExpressions** | [**[]CorrelationCondition**](correlation-condition) | The conditions that must match for this rule to apply. | 

## Methods

### NewCorrelationRule

`func NewCorrelationRule(priority int32, defaultRule bool, ruleType string, ruleAction CorrelationRuleAction, conditionExpressions []CorrelationCondition, ) *CorrelationRule`

NewCorrelationRule instantiates a new CorrelationRule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCorrelationRuleWithDefaults

`func NewCorrelationRuleWithDefaults() *CorrelationRule`

NewCorrelationRuleWithDefaults instantiates a new CorrelationRule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CorrelationRule) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CorrelationRule) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CorrelationRule) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CorrelationRule) HasId() bool`

HasId returns a boolean if a field has been set.

### GetPriority

`func (o *CorrelationRule) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *CorrelationRule) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *CorrelationRule) SetPriority(v int32)`

SetPriority sets Priority field to given value.


### GetDefaultRule

`func (o *CorrelationRule) GetDefaultRule() bool`

GetDefaultRule returns the DefaultRule field if non-nil, zero value otherwise.

### GetDefaultRuleOk

`func (o *CorrelationRule) GetDefaultRuleOk() (*bool, bool)`

GetDefaultRuleOk returns a tuple with the DefaultRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultRule

`func (o *CorrelationRule) SetDefaultRule(v bool)`

SetDefaultRule sets DefaultRule field to given value.


### GetRuleType

`func (o *CorrelationRule) GetRuleType() string`

GetRuleType returns the RuleType field if non-nil, zero value otherwise.

### GetRuleTypeOk

`func (o *CorrelationRule) GetRuleTypeOk() (*string, bool)`

GetRuleTypeOk returns a tuple with the RuleType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleType

`func (o *CorrelationRule) SetRuleType(v string)`

SetRuleType sets RuleType field to given value.


### GetRuleAction

`func (o *CorrelationRule) GetRuleAction() CorrelationRuleAction`

GetRuleAction returns the RuleAction field if non-nil, zero value otherwise.

### GetRuleActionOk

`func (o *CorrelationRule) GetRuleActionOk() (*CorrelationRuleAction, bool)`

GetRuleActionOk returns a tuple with the RuleAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleAction

`func (o *CorrelationRule) SetRuleAction(v CorrelationRuleAction)`

SetRuleAction sets RuleAction field to given value.


### GetConditionExpressions

`func (o *CorrelationRule) GetConditionExpressions() []CorrelationCondition`

GetConditionExpressions returns the ConditionExpressions field if non-nil, zero value otherwise.

### GetConditionExpressionsOk

`func (o *CorrelationRule) GetConditionExpressionsOk() (*[]CorrelationCondition, bool)`

GetConditionExpressionsOk returns a tuple with the ConditionExpressions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditionExpressions

`func (o *CorrelationRule) SetConditionExpressions(v []CorrelationCondition)`

SetConditionExpressions sets ConditionExpressions field to given value.



