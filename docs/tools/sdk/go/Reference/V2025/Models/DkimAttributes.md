---
id: dkim-attributes
title: DkimAttributes
pagination_label: DkimAttributes
sidebar_label: DkimAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DkimAttributes', 'DkimAttributes'] 
slug: /tools/sdk/go//models/dkim-attributes
tags: ['SDK', 'Software Development Kit', 'DkimAttributes', 'DkimAttributes']
---

# DkimAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | UUID associated with domain to be verified | [optional] 
**Address** | Pointer to **string** | The identity or domain address | [optional] 
**DkimEnabled** | Pointer to **bool** | Whether or not DKIM has been enabled for this domain / identity | [optional] [default to false]
**DkimTokens** | Pointer to **[]string** | The tokens to be added to a DNS for verification | [optional] 
**DkimVerificationStatus** | Pointer to **string** | The current status if the domain /identity has been verified. Ie Success, Failed, Pending | [optional] 

## Methods

### NewDkimAttributes

`func NewDkimAttributes() *DkimAttributes`

NewDkimAttributes instantiates a new DkimAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDkimAttributesWithDefaults

`func NewDkimAttributesWithDefaults() *DkimAttributes`

NewDkimAttributesWithDefaults instantiates a new DkimAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DkimAttributes) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DkimAttributes) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DkimAttributes) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *DkimAttributes) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAddress

`func (o *DkimAttributes) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *DkimAttributes) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *DkimAttributes) SetAddress(v string)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *DkimAttributes) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetDkimEnabled

`func (o *DkimAttributes) GetDkimEnabled() bool`

GetDkimEnabled returns the DkimEnabled field if non-nil, zero value otherwise.

### GetDkimEnabledOk

`func (o *DkimAttributes) GetDkimEnabledOk() (*bool, bool)`

GetDkimEnabledOk returns a tuple with the DkimEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDkimEnabled

`func (o *DkimAttributes) SetDkimEnabled(v bool)`

SetDkimEnabled sets DkimEnabled field to given value.

### HasDkimEnabled

`func (o *DkimAttributes) HasDkimEnabled() bool`

HasDkimEnabled returns a boolean if a field has been set.

### GetDkimTokens

`func (o *DkimAttributes) GetDkimTokens() []string`

GetDkimTokens returns the DkimTokens field if non-nil, zero value otherwise.

### GetDkimTokensOk

`func (o *DkimAttributes) GetDkimTokensOk() (*[]string, bool)`

GetDkimTokensOk returns a tuple with the DkimTokens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDkimTokens

`func (o *DkimAttributes) SetDkimTokens(v []string)`

SetDkimTokens sets DkimTokens field to given value.

### HasDkimTokens

`func (o *DkimAttributes) HasDkimTokens() bool`

HasDkimTokens returns a boolean if a field has been set.

### GetDkimVerificationStatus

`func (o *DkimAttributes) GetDkimVerificationStatus() string`

GetDkimVerificationStatus returns the DkimVerificationStatus field if non-nil, zero value otherwise.

### GetDkimVerificationStatusOk

`func (o *DkimAttributes) GetDkimVerificationStatusOk() (*string, bool)`

GetDkimVerificationStatusOk returns a tuple with the DkimVerificationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDkimVerificationStatus

`func (o *DkimAttributes) SetDkimVerificationStatus(v string)`

SetDkimVerificationStatus sets DkimVerificationStatus field to given value.

### HasDkimVerificationStatus

`func (o *DkimAttributes) HasDkimVerificationStatus() bool`

HasDkimVerificationStatus returns a boolean if a field has been set.


