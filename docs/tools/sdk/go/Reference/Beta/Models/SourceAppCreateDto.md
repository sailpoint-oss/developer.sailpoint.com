---
id: beta-source-app-create-dto
title: SourceAppCreateDto
pagination_label: SourceAppCreateDto
sidebar_label: SourceAppCreateDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceAppCreateDto', 'BetaSourceAppCreateDto'] 
slug: /tools/sdk/go/beta/models/source-app-create-dto
tags: ['SDK', 'Software Development Kit', 'SourceAppCreateDto', 'BetaSourceAppCreateDto']
---

# SourceAppCreateDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The source app name | 
**Description** | **string** | The description of the source app | 
**MatchAllAccounts** | Pointer to **bool** | True if the source app match all accounts | [optional] [default to false]
**AccountSource** | [**SourceAppCreateDtoAccountSource**](source-app-create-dto-account-source) |  | 

## Methods

### NewSourceAppCreateDto

`func NewSourceAppCreateDto(name string, description string, accountSource SourceAppCreateDtoAccountSource, ) *SourceAppCreateDto`

NewSourceAppCreateDto instantiates a new SourceAppCreateDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceAppCreateDtoWithDefaults

`func NewSourceAppCreateDtoWithDefaults() *SourceAppCreateDto`

NewSourceAppCreateDtoWithDefaults instantiates a new SourceAppCreateDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SourceAppCreateDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceAppCreateDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceAppCreateDto) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *SourceAppCreateDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SourceAppCreateDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SourceAppCreateDto) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetMatchAllAccounts

`func (o *SourceAppCreateDto) GetMatchAllAccounts() bool`

GetMatchAllAccounts returns the MatchAllAccounts field if non-nil, zero value otherwise.

### GetMatchAllAccountsOk

`func (o *SourceAppCreateDto) GetMatchAllAccountsOk() (*bool, bool)`

GetMatchAllAccountsOk returns a tuple with the MatchAllAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchAllAccounts

`func (o *SourceAppCreateDto) SetMatchAllAccounts(v bool)`

SetMatchAllAccounts sets MatchAllAccounts field to given value.

### HasMatchAllAccounts

`func (o *SourceAppCreateDto) HasMatchAllAccounts() bool`

HasMatchAllAccounts returns a boolean if a field has been set.

### GetAccountSource

`func (o *SourceAppCreateDto) GetAccountSource() SourceAppCreateDtoAccountSource`

GetAccountSource returns the AccountSource field if non-nil, zero value otherwise.

### GetAccountSourceOk

`func (o *SourceAppCreateDto) GetAccountSourceOk() (*SourceAppCreateDtoAccountSource, bool)`

GetAccountSourceOk returns a tuple with the AccountSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountSource

`func (o *SourceAppCreateDto) SetAccountSource(v SourceAppCreateDtoAccountSource)`

SetAccountSource sets AccountSource field to given value.



