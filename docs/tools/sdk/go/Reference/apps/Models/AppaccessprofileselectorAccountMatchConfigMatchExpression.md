---
id: v1-appaccessprofileselector-account-match-config-match-expression
title: AppaccessprofileselectorAccountMatchConfigMatchExpression
pagination_label: AppaccessprofileselectorAccountMatchConfigMatchExpression
sidebar_label: AppaccessprofileselectorAccountMatchConfigMatchExpression
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AppaccessprofileselectorAccountMatchConfigMatchExpression', 'V1AppaccessprofileselectorAccountMatchConfigMatchExpression'] 
slug: /tools/sdk/go/apps/models/appaccessprofileselector-account-match-config-match-expression
tags: ['SDK', 'Software Development Kit', 'AppaccessprofileselectorAccountMatchConfigMatchExpression', 'V1AppaccessprofileselectorAccountMatchConfigMatchExpression']
---

# AppaccessprofileselectorAccountMatchConfigMatchExpression

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchTerms** | Pointer to [**[]Matchterm**](matchterm) |  | [optional] 
**And** | Pointer to **bool** | If it is AND operators for match terms | [optional] [default to true]

## Methods

### NewAppaccessprofileselectorAccountMatchConfigMatchExpression

`func NewAppaccessprofileselectorAccountMatchConfigMatchExpression() *AppaccessprofileselectorAccountMatchConfigMatchExpression`

NewAppaccessprofileselectorAccountMatchConfigMatchExpression instantiates a new AppaccessprofileselectorAccountMatchConfigMatchExpression object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppaccessprofileselectorAccountMatchConfigMatchExpressionWithDefaults

`func NewAppaccessprofileselectorAccountMatchConfigMatchExpressionWithDefaults() *AppaccessprofileselectorAccountMatchConfigMatchExpression`

NewAppaccessprofileselectorAccountMatchConfigMatchExpressionWithDefaults instantiates a new AppaccessprofileselectorAccountMatchConfigMatchExpression object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMatchTerms

`func (o *AppaccessprofileselectorAccountMatchConfigMatchExpression) GetMatchTerms() []Matchterm`

GetMatchTerms returns the MatchTerms field if non-nil, zero value otherwise.

### GetMatchTermsOk

`func (o *AppaccessprofileselectorAccountMatchConfigMatchExpression) GetMatchTermsOk() (*[]Matchterm, bool)`

GetMatchTermsOk returns a tuple with the MatchTerms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchTerms

`func (o *AppaccessprofileselectorAccountMatchConfigMatchExpression) SetMatchTerms(v []Matchterm)`

SetMatchTerms sets MatchTerms field to given value.

### HasMatchTerms

`func (o *AppaccessprofileselectorAccountMatchConfigMatchExpression) HasMatchTerms() bool`

HasMatchTerms returns a boolean if a field has been set.

### GetAnd

`func (o *AppaccessprofileselectorAccountMatchConfigMatchExpression) GetAnd() bool`

GetAnd returns the And field if non-nil, zero value otherwise.

### GetAndOk

`func (o *AppaccessprofileselectorAccountMatchConfigMatchExpression) GetAndOk() (*bool, bool)`

GetAndOk returns a tuple with the And field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnd

`func (o *AppaccessprofileselectorAccountMatchConfigMatchExpression) SetAnd(v bool)`

SetAnd sets And field to given value.

### HasAnd

`func (o *AppaccessprofileselectorAccountMatchConfigMatchExpression) HasAnd() bool`

HasAnd returns a boolean if a field has been set.


