---
id: beta-kba-auth-response-item
title: KbaAuthResponseItem
pagination_label: KbaAuthResponseItem
sidebar_label: KbaAuthResponseItem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'KbaAuthResponseItem', 'BetaKbaAuthResponseItem'] 
slug: /tools/sdk/go/beta/models/kba-auth-response-item
tags: ['SDK', 'Software Development Kit', 'KbaAuthResponseItem', 'BetaKbaAuthResponseItem']
---

# KbaAuthResponseItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QuestionId** | Pointer to **NullableString** | The KBA question id | [optional] 
**IsVerified** | Pointer to **NullableBool** | Return true if verified | [optional] 

## Methods

### NewKbaAuthResponseItem

`func NewKbaAuthResponseItem() *KbaAuthResponseItem`

NewKbaAuthResponseItem instantiates a new KbaAuthResponseItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKbaAuthResponseItemWithDefaults

`func NewKbaAuthResponseItemWithDefaults() *KbaAuthResponseItem`

NewKbaAuthResponseItemWithDefaults instantiates a new KbaAuthResponseItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuestionId

`func (o *KbaAuthResponseItem) GetQuestionId() string`

GetQuestionId returns the QuestionId field if non-nil, zero value otherwise.

### GetQuestionIdOk

`func (o *KbaAuthResponseItem) GetQuestionIdOk() (*string, bool)`

GetQuestionIdOk returns a tuple with the QuestionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuestionId

`func (o *KbaAuthResponseItem) SetQuestionId(v string)`

SetQuestionId sets QuestionId field to given value.

### HasQuestionId

`func (o *KbaAuthResponseItem) HasQuestionId() bool`

HasQuestionId returns a boolean if a field has been set.

### SetQuestionIdNil

`func (o *KbaAuthResponseItem) SetQuestionIdNil(b bool)`

 SetQuestionIdNil sets the value for QuestionId to be an explicit nil

### UnsetQuestionId
`func (o *KbaAuthResponseItem) UnsetQuestionId()`

UnsetQuestionId ensures that no value is present for QuestionId, not even an explicit nil
### GetIsVerified

`func (o *KbaAuthResponseItem) GetIsVerified() bool`

GetIsVerified returns the IsVerified field if non-nil, zero value otherwise.

### GetIsVerifiedOk

`func (o *KbaAuthResponseItem) GetIsVerifiedOk() (*bool, bool)`

GetIsVerifiedOk returns a tuple with the IsVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVerified

`func (o *KbaAuthResponseItem) SetIsVerified(v bool)`

SetIsVerified sets IsVerified field to given value.

### HasIsVerified

`func (o *KbaAuthResponseItem) HasIsVerified() bool`

HasIsVerified returns a boolean if a field has been set.

### SetIsVerifiedNil

`func (o *KbaAuthResponseItem) SetIsVerifiedNil(b bool)`

 SetIsVerifiedNil sets the value for IsVerified to be an explicit nil

### UnsetIsVerified
`func (o *KbaAuthResponseItem) UnsetIsVerified()`

UnsetIsVerified ensures that no value is present for IsVerified, not even an explicit nil

