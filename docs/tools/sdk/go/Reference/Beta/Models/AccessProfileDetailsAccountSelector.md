---
id: beta-access-profile-details-account-selector
title: AccessProfileDetailsAccountSelector
pagination_label: AccessProfileDetailsAccountSelector
sidebar_label: AccessProfileDetailsAccountSelector
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessProfileDetailsAccountSelector', 'BetaAccessProfileDetailsAccountSelector'] 
slug: /tools/sdk/go/beta/models/access-profile-details-account-selector
tags: ['SDK', 'Software Development Kit', 'AccessProfileDetailsAccountSelector', 'BetaAccessProfileDetailsAccountSelector']
---

# AccessProfileDetailsAccountSelector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Selectors** | Pointer to [**[]Selector**](selector) |  | [optional] 

## Methods

### NewAccessProfileDetailsAccountSelector

`func NewAccessProfileDetailsAccountSelector() *AccessProfileDetailsAccountSelector`

NewAccessProfileDetailsAccountSelector instantiates a new AccessProfileDetailsAccountSelector object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileDetailsAccountSelectorWithDefaults

`func NewAccessProfileDetailsAccountSelectorWithDefaults() *AccessProfileDetailsAccountSelector`

NewAccessProfileDetailsAccountSelectorWithDefaults instantiates a new AccessProfileDetailsAccountSelector object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSelectors

`func (o *AccessProfileDetailsAccountSelector) GetSelectors() []Selector`

GetSelectors returns the Selectors field if non-nil, zero value otherwise.

### GetSelectorsOk

`func (o *AccessProfileDetailsAccountSelector) GetSelectorsOk() (*[]Selector, bool)`

GetSelectorsOk returns a tuple with the Selectors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelectors

`func (o *AccessProfileDetailsAccountSelector) SetSelectors(v []Selector)`

SetSelectors sets Selectors field to given value.

### HasSelectors

`func (o *AccessProfileDetailsAccountSelector) HasSelectors() bool`

HasSelectors returns a boolean if a field has been set.

### SetSelectorsNil

`func (o *AccessProfileDetailsAccountSelector) SetSelectorsNil(b bool)`

 SetSelectorsNil sets the value for Selectors to be an explicit nil

### UnsetSelectors
`func (o *AccessProfileDetailsAccountSelector) UnsetSelectors()`

UnsetSelectors ensures that no value is present for Selectors, not even an explicit nil

