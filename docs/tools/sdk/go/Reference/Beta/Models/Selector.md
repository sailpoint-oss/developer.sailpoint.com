---
id: beta-selector
title: Selector
pagination_label: Selector
sidebar_label: Selector
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Selector', 'BetaSelector'] 
slug: /tools/sdk/go/beta/models/selector
tags: ['SDK', 'Software Development Kit', 'Selector', 'BetaSelector']
---

# Selector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationId** | Pointer to **string** | The application id | [optional] 
**AccountMatchConfig** | Pointer to [**SelectorAccountMatchConfig**](selector-account-match-config) |  | [optional] 

## Methods

### NewSelector

`func NewSelector() *Selector`

NewSelector instantiates a new Selector object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSelectorWithDefaults

`func NewSelectorWithDefaults() *Selector`

NewSelectorWithDefaults instantiates a new Selector object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplicationId

`func (o *Selector) GetApplicationId() string`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *Selector) GetApplicationIdOk() (*string, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *Selector) SetApplicationId(v string)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *Selector) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### GetAccountMatchConfig

`func (o *Selector) GetAccountMatchConfig() SelectorAccountMatchConfig`

GetAccountMatchConfig returns the AccountMatchConfig field if non-nil, zero value otherwise.

### GetAccountMatchConfigOk

`func (o *Selector) GetAccountMatchConfigOk() (*SelectorAccountMatchConfig, bool)`

GetAccountMatchConfigOk returns a tuple with the AccountMatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountMatchConfig

`func (o *Selector) SetAccountMatchConfig(v SelectorAccountMatchConfig)`

SetAccountMatchConfig sets AccountMatchConfig field to given value.

### HasAccountMatchConfig

`func (o *Selector) HasAccountMatchConfig() bool`

HasAccountMatchConfig returns a boolean if a field has been set.


