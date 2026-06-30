---
id: v1-formcondition
title: Formcondition
pagination_label: Formcondition
sidebar_label: Formcondition
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Formcondition', 'V1Formcondition'] 
slug: /tools/sdk/go/customforms/models/formcondition
tags: ['SDK', 'Software Development Kit', 'Formcondition', 'V1Formcondition']
---

# Formcondition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RuleOperator** | Pointer to **string** | ConditionRuleLogicalOperatorType value. AND ConditionRuleLogicalOperatorTypeAnd OR ConditionRuleLogicalOperatorTypeOr | [optional] 
**Rules** | Pointer to [**[]Conditionrule**](conditionrule) | List of rules. | [optional] 
**Effects** | Pointer to [**[]Conditioneffect**](conditioneffect) | List of effects. | [optional] 

## Methods

### NewFormcondition

`func NewFormcondition() *Formcondition`

NewFormcondition instantiates a new Formcondition object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormconditionWithDefaults

`func NewFormconditionWithDefaults() *Formcondition`

NewFormconditionWithDefaults instantiates a new Formcondition object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRuleOperator

`func (o *Formcondition) GetRuleOperator() string`

GetRuleOperator returns the RuleOperator field if non-nil, zero value otherwise.

### GetRuleOperatorOk

`func (o *Formcondition) GetRuleOperatorOk() (*string, bool)`

GetRuleOperatorOk returns a tuple with the RuleOperator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleOperator

`func (o *Formcondition) SetRuleOperator(v string)`

SetRuleOperator sets RuleOperator field to given value.

### HasRuleOperator

`func (o *Formcondition) HasRuleOperator() bool`

HasRuleOperator returns a boolean if a field has been set.

### GetRules

`func (o *Formcondition) GetRules() []Conditionrule`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *Formcondition) GetRulesOk() (*[]Conditionrule, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *Formcondition) SetRules(v []Conditionrule)`

SetRules sets Rules field to given value.

### HasRules

`func (o *Formcondition) HasRules() bool`

HasRules returns a boolean if a field has been set.

### GetEffects

`func (o *Formcondition) GetEffects() []Conditioneffect`

GetEffects returns the Effects field if non-nil, zero value otherwise.

### GetEffectsOk

`func (o *Formcondition) GetEffectsOk() (*[]Conditioneffect, bool)`

GetEffectsOk returns a tuple with the Effects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffects

`func (o *Formcondition) SetEffects(v []Conditioneffect)`

SetEffects sets Effects field to given value.

### HasEffects

`func (o *Formcondition) HasEffects() bool`

HasEffects returns a boolean if a field has been set.


