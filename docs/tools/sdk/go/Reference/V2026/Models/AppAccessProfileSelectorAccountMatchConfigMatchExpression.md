---
id: v2026-app-access-profile-selector-account-match-config-match-expression
title: AppAccessProfileSelectorAccountMatchConfigMatchExpression
pagination_label: AppAccessProfileSelectorAccountMatchConfigMatchExpression
sidebar_label: AppAccessProfileSelectorAccountMatchConfigMatchExpression
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AppAccessProfileSelectorAccountMatchConfigMatchExpression', 'V2026AppAccessProfileSelectorAccountMatchConfigMatchExpression'] 
slug: /tools/sdk/go/v2026/models/app-access-profile-selector-account-match-config-match-expression
tags: ['SDK', 'Software Development Kit', 'AppAccessProfileSelectorAccountMatchConfigMatchExpression', 'V2026AppAccessProfileSelectorAccountMatchConfigMatchExpression']
---

# AppAccessProfileSelectorAccountMatchConfigMatchExpression

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchTerms** | Pointer to [**[]MatchTerm**](match-term) |  | [optional] 
**And** | Pointer to **bool** | If it is AND operators for match terms | [optional] [default to true]

## Methods

### NewAppAccessProfileSelectorAccountMatchConfigMatchExpression

`func NewAppAccessProfileSelectorAccountMatchConfigMatchExpression() *AppAccessProfileSelectorAccountMatchConfigMatchExpression`

NewAppAccessProfileSelectorAccountMatchConfigMatchExpression instantiates a new AppAccessProfileSelectorAccountMatchConfigMatchExpression object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppAccessProfileSelectorAccountMatchConfigMatchExpressionWithDefaults

`func NewAppAccessProfileSelectorAccountMatchConfigMatchExpressionWithDefaults() *AppAccessProfileSelectorAccountMatchConfigMatchExpression`

NewAppAccessProfileSelectorAccountMatchConfigMatchExpressionWithDefaults instantiates a new AppAccessProfileSelectorAccountMatchConfigMatchExpression object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMatchTerms

`func (o *AppAccessProfileSelectorAccountMatchConfigMatchExpression) GetMatchTerms() []MatchTerm`

GetMatchTerms returns the MatchTerms field if non-nil, zero value otherwise.

### GetMatchTermsOk

`func (o *AppAccessProfileSelectorAccountMatchConfigMatchExpression) GetMatchTermsOk() (*[]MatchTerm, bool)`

GetMatchTermsOk returns a tuple with the MatchTerms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchTerms

`func (o *AppAccessProfileSelectorAccountMatchConfigMatchExpression) SetMatchTerms(v []MatchTerm)`

SetMatchTerms sets MatchTerms field to given value.

### HasMatchTerms

`func (o *AppAccessProfileSelectorAccountMatchConfigMatchExpression) HasMatchTerms() bool`

HasMatchTerms returns a boolean if a field has been set.

### GetAnd

`func (o *AppAccessProfileSelectorAccountMatchConfigMatchExpression) GetAnd() bool`

GetAnd returns the And field if non-nil, zero value otherwise.

### GetAndOk

`func (o *AppAccessProfileSelectorAccountMatchConfigMatchExpression) GetAndOk() (*bool, bool)`

GetAndOk returns a tuple with the And field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnd

`func (o *AppAccessProfileSelectorAccountMatchConfigMatchExpression) SetAnd(v bool)`

SetAnd sets And field to given value.

### HasAnd

`func (o *AppAccessProfileSelectorAccountMatchConfigMatchExpression) HasAnd() bool`

HasAnd returns a boolean if a field has been set.


