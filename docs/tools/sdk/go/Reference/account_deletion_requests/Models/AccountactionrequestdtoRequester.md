---
id: v1-accountactionrequestdto-requester
title: AccountactionrequestdtoRequester
pagination_label: AccountactionrequestdtoRequester
sidebar_label: AccountactionrequestdtoRequester
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountactionrequestdtoRequester', 'V1AccountactionrequestdtoRequester'] 
slug: /tools/sdk/go/accountdeletionrequests/models/accountactionrequestdto-requester
tags: ['SDK', 'Software Development Kit', 'AccountactionrequestdtoRequester', 'V1AccountactionrequestdtoRequester']
---

# AccountactionrequestdtoRequester

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**Dtotype**](dtotype) |  | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 

## Methods

### NewAccountactionrequestdtoRequester

`func NewAccountactionrequestdtoRequester() *AccountactionrequestdtoRequester`

NewAccountactionrequestdtoRequester instantiates a new AccountactionrequestdtoRequester object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountactionrequestdtoRequesterWithDefaults

`func NewAccountactionrequestdtoRequesterWithDefaults() *AccountactionrequestdtoRequester`

NewAccountactionrequestdtoRequesterWithDefaults instantiates a new AccountactionrequestdtoRequester object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccountactionrequestdtoRequester) GetType() Dtotype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountactionrequestdtoRequester) GetTypeOk() (*Dtotype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountactionrequestdtoRequester) SetType(v Dtotype)`

SetType sets Type field to given value.

### HasType

`func (o *AccountactionrequestdtoRequester) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AccountactionrequestdtoRequester) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountactionrequestdtoRequester) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountactionrequestdtoRequester) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountactionrequestdtoRequester) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccountactionrequestdtoRequester) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountactionrequestdtoRequester) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountactionrequestdtoRequester) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccountactionrequestdtoRequester) HasName() bool`

HasName returns a boolean if a field has been set.


