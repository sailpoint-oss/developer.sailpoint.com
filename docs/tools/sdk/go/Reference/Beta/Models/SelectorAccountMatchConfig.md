---
id: beta-selector-account-match-config
title: SelectorAccountMatchConfig
pagination_label: SelectorAccountMatchConfig
sidebar_label: SelectorAccountMatchConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SelectorAccountMatchConfig', 'BetaSelectorAccountMatchConfig'] 
slug: /tools/sdk/go/beta/models/selector-account-match-config
tags: ['SDK', 'Software Development Kit', 'SelectorAccountMatchConfig', 'BetaSelectorAccountMatchConfig']
---

# SelectorAccountMatchConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchExpression** | Pointer to [**SelectorAccountMatchConfigMatchExpression**](selector-account-match-config-match-expression) |  | [optional] 

## Methods

### NewSelectorAccountMatchConfig

`func NewSelectorAccountMatchConfig() *SelectorAccountMatchConfig`

NewSelectorAccountMatchConfig instantiates a new SelectorAccountMatchConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSelectorAccountMatchConfigWithDefaults

`func NewSelectorAccountMatchConfigWithDefaults() *SelectorAccountMatchConfig`

NewSelectorAccountMatchConfigWithDefaults instantiates a new SelectorAccountMatchConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMatchExpression

`func (o *SelectorAccountMatchConfig) GetMatchExpression() SelectorAccountMatchConfigMatchExpression`

GetMatchExpression returns the MatchExpression field if non-nil, zero value otherwise.

### GetMatchExpressionOk

`func (o *SelectorAccountMatchConfig) GetMatchExpressionOk() (*SelectorAccountMatchConfigMatchExpression, bool)`

GetMatchExpressionOk returns a tuple with the MatchExpression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchExpression

`func (o *SelectorAccountMatchConfig) SetMatchExpression(v SelectorAccountMatchConfigMatchExpression)`

SetMatchExpression sets MatchExpression field to given value.

### HasMatchExpression

`func (o *SelectorAccountMatchConfig) HasMatchExpression() bool`

HasMatchExpression returns a boolean if a field has been set.


