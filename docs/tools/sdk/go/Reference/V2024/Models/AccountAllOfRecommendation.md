---
id: v2024-account-all-of-recommendation
title: AccountAllOfRecommendation
pagination_label: AccountAllOfRecommendation
sidebar_label: AccountAllOfRecommendation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountAllOfRecommendation', 'V2024AccountAllOfRecommendation'] 
slug: /tools/sdk/go/v2024/models/account-all-of-recommendation
tags: ['SDK', 'Software Development Kit', 'AccountAllOfRecommendation', 'V2024AccountAllOfRecommendation']
---

# AccountAllOfRecommendation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Recommended type of account. | 
**Method** | **string** | Method used to produce the recommendation. DISCOVERY - suggested by AI, SOURCE - the account comes from a source flagged as containing machine accounts, CRITERIA - the account satisfies classification criteria. | 

## Methods

### NewAccountAllOfRecommendation

`func NewAccountAllOfRecommendation(type_ string, method string, ) *AccountAllOfRecommendation`

NewAccountAllOfRecommendation instantiates a new AccountAllOfRecommendation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountAllOfRecommendationWithDefaults

`func NewAccountAllOfRecommendationWithDefaults() *AccountAllOfRecommendation`

NewAccountAllOfRecommendationWithDefaults instantiates a new AccountAllOfRecommendation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountAllOfRecommendation) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountAllOfRecommendation) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountAllOfRecommendation) SetType(v string)`

SetType sets Type field to given value.


### GetMethod

`func (o *AccountAllOfRecommendation) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *AccountAllOfRecommendation) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *AccountAllOfRecommendation) SetMethod(v string)`

SetMethod sets Method field to given value.



