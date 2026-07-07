---
id: v1-dkimattributes
title: Dkimattributes
pagination_label: Dkimattributes
sidebar_label: Dkimattributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Dkimattributes', 'V1Dkimattributes'] 
slug: /tools/sdk/go/notifications/models/dkimattributes
tags: ['SDK', 'Software Development Kit', 'Dkimattributes', 'V1Dkimattributes']
---

# Dkimattributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | UUID associated with domain to be verified | [optional] 
**Address** | Pointer to **string** | The identity or domain address | [optional] 
**DkimEnabled** | Pointer to **bool** | Whether or not DKIM has been enabled for this domain / identity | [optional] [default to false]
**DkimTokens** | Pointer to **[]string** | The tokens to be added to a DNS for verification | [optional] 
**DkimVerificationStatus** | Pointer to **string** | The current status if the domain /identity has been verified. Ie SUCCESS, FAILED, PENDING | [optional] 
**Region** | Pointer to **string** | The AWS SES region the domain is associated with | [optional] 

## Methods

### NewDkimattributes

`func NewDkimattributes() *Dkimattributes`

NewDkimattributes instantiates a new Dkimattributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDkimattributesWithDefaults

`func NewDkimattributesWithDefaults() *Dkimattributes`

NewDkimattributesWithDefaults instantiates a new Dkimattributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Dkimattributes) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Dkimattributes) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Dkimattributes) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Dkimattributes) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAddress

`func (o *Dkimattributes) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *Dkimattributes) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *Dkimattributes) SetAddress(v string)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *Dkimattributes) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetDkimEnabled

`func (o *Dkimattributes) GetDkimEnabled() bool`

GetDkimEnabled returns the DkimEnabled field if non-nil, zero value otherwise.

### GetDkimEnabledOk

`func (o *Dkimattributes) GetDkimEnabledOk() (*bool, bool)`

GetDkimEnabledOk returns a tuple with the DkimEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDkimEnabled

`func (o *Dkimattributes) SetDkimEnabled(v bool)`

SetDkimEnabled sets DkimEnabled field to given value.

### HasDkimEnabled

`func (o *Dkimattributes) HasDkimEnabled() bool`

HasDkimEnabled returns a boolean if a field has been set.

### GetDkimTokens

`func (o *Dkimattributes) GetDkimTokens() []string`

GetDkimTokens returns the DkimTokens field if non-nil, zero value otherwise.

### GetDkimTokensOk

`func (o *Dkimattributes) GetDkimTokensOk() (*[]string, bool)`

GetDkimTokensOk returns a tuple with the DkimTokens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDkimTokens

`func (o *Dkimattributes) SetDkimTokens(v []string)`

SetDkimTokens sets DkimTokens field to given value.

### HasDkimTokens

`func (o *Dkimattributes) HasDkimTokens() bool`

HasDkimTokens returns a boolean if a field has been set.

### GetDkimVerificationStatus

`func (o *Dkimattributes) GetDkimVerificationStatus() string`

GetDkimVerificationStatus returns the DkimVerificationStatus field if non-nil, zero value otherwise.

### GetDkimVerificationStatusOk

`func (o *Dkimattributes) GetDkimVerificationStatusOk() (*string, bool)`

GetDkimVerificationStatusOk returns a tuple with the DkimVerificationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDkimVerificationStatus

`func (o *Dkimattributes) SetDkimVerificationStatus(v string)`

SetDkimVerificationStatus sets DkimVerificationStatus field to given value.

### HasDkimVerificationStatus

`func (o *Dkimattributes) HasDkimVerificationStatus() bool`

HasDkimVerificationStatus returns a boolean if a field has been set.

### GetRegion

`func (o *Dkimattributes) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *Dkimattributes) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *Dkimattributes) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *Dkimattributes) HasRegion() bool`

HasRegion returns a boolean if a field has been set.


