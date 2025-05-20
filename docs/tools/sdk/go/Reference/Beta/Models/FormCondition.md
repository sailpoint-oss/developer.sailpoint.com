---
id: beta-form-condition
title: FormCondition
pagination_label: FormCondition
sidebar_label: FormCondition
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FormCondition', 'BetaFormCondition'] 
slug: /tools/sdk/go/beta/models/form-condition
tags: ['SDK', 'Software Development Kit', 'FormCondition', 'BetaFormCondition']
---

# FormCondition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RuleOperator** | Pointer to **string** | ConditionRuleLogicalOperatorType value. AND ConditionRuleLogicalOperatorTypeAnd OR ConditionRuleLogicalOperatorTypeOr | [optional] 
**Rules** | Pointer to [**[]ConditionRule**](condition-rule) | List of rules. | [optional] 
**Effects** | Pointer to [**[]ConditionEffect**](condition-effect) | List of effects. | [optional] 

## Methods

### NewFormCondition

`func NewFormCondition() *FormCondition`

NewFormCondition instantiates a new FormCondition object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormConditionWithDefaults

`func NewFormConditionWithDefaults() *FormCondition`

NewFormConditionWithDefaults instantiates a new FormCondition object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRuleOperator

`func (o *FormCondition) GetRuleOperator() string`

GetRuleOperator returns the RuleOperator field if non-nil, zero value otherwise.

### GetRuleOperatorOk

`func (o *FormCondition) GetRuleOperatorOk() (*string, bool)`

GetRuleOperatorOk returns a tuple with the RuleOperator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleOperator

`func (o *FormCondition) SetRuleOperator(v string)`

SetRuleOperator sets RuleOperator field to given value.

### HasRuleOperator

`func (o *FormCondition) HasRuleOperator() bool`

HasRuleOperator returns a boolean if a field has been set.

### GetRules

`func (o *FormCondition) GetRules() []ConditionRule`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *FormCondition) GetRulesOk() (*[]ConditionRule, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *FormCondition) SetRules(v []ConditionRule)`

SetRules sets Rules field to given value.

### HasRules

`func (o *FormCondition) HasRules() bool`

HasRules returns a boolean if a field has been set.

### GetEffects

`func (o *FormCondition) GetEffects() []ConditionEffect`

GetEffects returns the Effects field if non-nil, zero value otherwise.

### GetEffectsOk

`func (o *FormCondition) GetEffectsOk() (*[]ConditionEffect, bool)`

GetEffectsOk returns a tuple with the Effects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffects

`func (o *FormCondition) SetEffects(v []ConditionEffect)`

SetEffects sets Effects field to given value.

### HasEffects

`func (o *FormCondition) HasEffects() bool`

HasEffects returns a boolean if a field has been set.


