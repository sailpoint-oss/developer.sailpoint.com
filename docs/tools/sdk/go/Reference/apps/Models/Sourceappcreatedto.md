---
id: v1-sourceappcreatedto
title: Sourceappcreatedto
pagination_label: Sourceappcreatedto
sidebar_label: Sourceappcreatedto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourceappcreatedto', 'V1Sourceappcreatedto'] 
slug: /tools/sdk/go/apps/models/sourceappcreatedto
tags: ['SDK', 'Software Development Kit', 'Sourceappcreatedto', 'V1Sourceappcreatedto']
---

# Sourceappcreatedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The source app name | 
**Description** | **string** | The description of the source app | 
**MatchAllAccounts** | Pointer to **bool** | True if the source app match all accounts | [optional] [default to false]
**AccountSource** | [**SourceappcreatedtoAccountSource**](sourceappcreatedto-account-source) |  | 

## Methods

### NewSourceappcreatedto

`func NewSourceappcreatedto(name string, description string, accountSource SourceappcreatedtoAccountSource, ) *Sourceappcreatedto`

NewSourceappcreatedto instantiates a new Sourceappcreatedto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceappcreatedtoWithDefaults

`func NewSourceappcreatedtoWithDefaults() *Sourceappcreatedto`

NewSourceappcreatedtoWithDefaults instantiates a new Sourceappcreatedto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Sourceappcreatedto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Sourceappcreatedto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Sourceappcreatedto) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Sourceappcreatedto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Sourceappcreatedto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Sourceappcreatedto) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetMatchAllAccounts

`func (o *Sourceappcreatedto) GetMatchAllAccounts() bool`

GetMatchAllAccounts returns the MatchAllAccounts field if non-nil, zero value otherwise.

### GetMatchAllAccountsOk

`func (o *Sourceappcreatedto) GetMatchAllAccountsOk() (*bool, bool)`

GetMatchAllAccountsOk returns a tuple with the MatchAllAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchAllAccounts

`func (o *Sourceappcreatedto) SetMatchAllAccounts(v bool)`

SetMatchAllAccounts sets MatchAllAccounts field to given value.

### HasMatchAllAccounts

`func (o *Sourceappcreatedto) HasMatchAllAccounts() bool`

HasMatchAllAccounts returns a boolean if a field has been set.

### GetAccountSource

`func (o *Sourceappcreatedto) GetAccountSource() SourceappcreatedtoAccountSource`

GetAccountSource returns the AccountSource field if non-nil, zero value otherwise.

### GetAccountSourceOk

`func (o *Sourceappcreatedto) GetAccountSourceOk() (*SourceappcreatedtoAccountSource, bool)`

GetAccountSourceOk returns a tuple with the AccountSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountSource

`func (o *Sourceappcreatedto) SetAccountSource(v SourceappcreatedtoAccountSource)`

SetAccountSource sets AccountSource field to given value.



