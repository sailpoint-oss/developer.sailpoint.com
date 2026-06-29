---
id: v1-conditionrule
title: Conditionrule
pagination_label: Conditionrule
sidebar_label: Conditionrule
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Conditionrule', 'V1Conditionrule'] 
slug: /tools/sdk/go/customforms/models/conditionrule
tags: ['SDK', 'Software Development Kit', 'Conditionrule', 'V1Conditionrule']
---

# Conditionrule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceType** | Pointer to **string** | Defines the type of object being selected. It will be either a reference to a form input (by input name) or a form element (by technical key). INPUT ConditionRuleSourceTypeInput ELEMENT ConditionRuleSourceTypeElement | [optional] 
**Source** | Pointer to **string** | Source - if the sourceType is ConditionRuleSourceTypeInput, the source type is the name of the form input to accept. However, if the sourceType is ConditionRuleSourceTypeElement, the source is the name of a technical key of an element to retrieve its value. | [optional] 
**Operator** | Pointer to **string** | ConditionRuleComparisonOperatorType value. EQ ConditionRuleComparisonOperatorTypeEquals  This comparison operator compares the source and target for equality. NE ConditionRuleComparisonOperatorTypeNotEquals  This comparison operator compares the source and target for inequality. CO ConditionRuleComparisonOperatorTypeContains  This comparison operator searches the source to see whether it contains the value. NOT_CO ConditionRuleComparisonOperatorTypeNotContains IN ConditionRuleComparisonOperatorTypeIncludes  This comparison operator searches the source if it equals any of the values. NOT_IN ConditionRuleComparisonOperatorTypeNotIncludes EM ConditionRuleComparisonOperatorTypeEmpty NOT_EM ConditionRuleComparisonOperatorTypeNotEmpty SW ConditionRuleComparisonOperatorTypeStartsWith  Checks whether a string starts with another substring of the same string. This operator is case-sensitive. NOT_SW ConditionRuleComparisonOperatorTypeNotStartsWith EW ConditionRuleComparisonOperatorTypeEndsWith  Checks whether a string ends with another substring of the same string. This operator is case-sensitive. NOT_EW ConditionRuleComparisonOperatorTypeNotEndsWith | [optional] 
**ValueType** | Pointer to **string** | ConditionRuleValueType type. STRING ConditionRuleValueTypeString  This value is a static string. STRING_LIST ConditionRuleValueTypeStringList  This value is an array of string values. INPUT ConditionRuleValueTypeInput  This value is a reference to a form input. ELEMENT ConditionRuleValueTypeElement  This value is a reference to a form element (by technical key). LIST ConditionRuleValueTypeList BOOLEAN ConditionRuleValueTypeBoolean | [optional] 
**Value** | Pointer to **string** | Based on the ValueType. | [optional] 

## Methods

### NewConditionrule

`func NewConditionrule() *Conditionrule`

NewConditionrule instantiates a new Conditionrule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConditionruleWithDefaults

`func NewConditionruleWithDefaults() *Conditionrule`

NewConditionruleWithDefaults instantiates a new Conditionrule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceType

`func (o *Conditionrule) GetSourceType() string`

GetSourceType returns the SourceType field if non-nil, zero value otherwise.

### GetSourceTypeOk

`func (o *Conditionrule) GetSourceTypeOk() (*string, bool)`

GetSourceTypeOk returns a tuple with the SourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceType

`func (o *Conditionrule) SetSourceType(v string)`

SetSourceType sets SourceType field to given value.

### HasSourceType

`func (o *Conditionrule) HasSourceType() bool`

HasSourceType returns a boolean if a field has been set.

### GetSource

`func (o *Conditionrule) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Conditionrule) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Conditionrule) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *Conditionrule) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetOperator

`func (o *Conditionrule) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *Conditionrule) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *Conditionrule) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *Conditionrule) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetValueType

`func (o *Conditionrule) GetValueType() string`

GetValueType returns the ValueType field if non-nil, zero value otherwise.

### GetValueTypeOk

`func (o *Conditionrule) GetValueTypeOk() (*string, bool)`

GetValueTypeOk returns a tuple with the ValueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueType

`func (o *Conditionrule) SetValueType(v string)`

SetValueType sets ValueType field to given value.

### HasValueType

`func (o *Conditionrule) HasValueType() bool`

HasValueType returns a boolean if a field has been set.

### GetValue

`func (o *Conditionrule) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Conditionrule) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Conditionrule) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Conditionrule) HasValue() bool`

HasValue returns a boolean if a field has been set.


