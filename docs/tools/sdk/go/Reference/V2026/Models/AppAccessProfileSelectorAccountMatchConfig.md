---
id: v2026-app-access-profile-selector-account-match-config
title: AppAccessProfileSelectorAccountMatchConfig
pagination_label: AppAccessProfileSelectorAccountMatchConfig
sidebar_label: AppAccessProfileSelectorAccountMatchConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AppAccessProfileSelectorAccountMatchConfig', 'V2026AppAccessProfileSelectorAccountMatchConfig'] 
slug: /tools/sdk/go/v2026/models/app-access-profile-selector-account-match-config
tags: ['SDK', 'Software Development Kit', 'AppAccessProfileSelectorAccountMatchConfig', 'V2026AppAccessProfileSelectorAccountMatchConfig']
---

# AppAccessProfileSelectorAccountMatchConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchExpression** | Pointer to [**AppAccessProfileSelectorAccountMatchConfigMatchExpression**](app-access-profile-selector-account-match-config-match-expression) |  | [optional] 

## Methods

### NewAppAccessProfileSelectorAccountMatchConfig

`func NewAppAccessProfileSelectorAccountMatchConfig() *AppAccessProfileSelectorAccountMatchConfig`

NewAppAccessProfileSelectorAccountMatchConfig instantiates a new AppAccessProfileSelectorAccountMatchConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppAccessProfileSelectorAccountMatchConfigWithDefaults

`func NewAppAccessProfileSelectorAccountMatchConfigWithDefaults() *AppAccessProfileSelectorAccountMatchConfig`

NewAppAccessProfileSelectorAccountMatchConfigWithDefaults instantiates a new AppAccessProfileSelectorAccountMatchConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMatchExpression

`func (o *AppAccessProfileSelectorAccountMatchConfig) GetMatchExpression() AppAccessProfileSelectorAccountMatchConfigMatchExpression`

GetMatchExpression returns the MatchExpression field if non-nil, zero value otherwise.

### GetMatchExpressionOk

`func (o *AppAccessProfileSelectorAccountMatchConfig) GetMatchExpressionOk() (*AppAccessProfileSelectorAccountMatchConfigMatchExpression, bool)`

GetMatchExpressionOk returns a tuple with the MatchExpression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchExpression

`func (o *AppAccessProfileSelectorAccountMatchConfig) SetMatchExpression(v AppAccessProfileSelectorAccountMatchConfigMatchExpression)`

SetMatchExpression sets MatchExpression field to given value.

### HasMatchExpression

`func (o *AppAccessProfileSelectorAccountMatchConfig) HasMatchExpression() bool`

HasMatchExpression returns a boolean if a field has been set.


