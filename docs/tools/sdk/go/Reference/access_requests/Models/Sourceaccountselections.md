---
id: v1-sourceaccountselections
title: Sourceaccountselections
pagination_label: Sourceaccountselections
sidebar_label: Sourceaccountselections
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourceaccountselections', 'V1Sourceaccountselections'] 
slug: /tools/sdk/go/accessrequests/models/sourceaccountselections
tags: ['SDK', 'Software Development Kit', 'Sourceaccountselections', 'V1Sourceaccountselections']
---

# Sourceaccountselections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**Dtotype**](dtotype) |  | [optional] 
**Id** | Pointer to **string** | The source id | [optional] 
**Name** | Pointer to **string** | The source name | [optional] 
**Accounts** | Pointer to [**[]Accountinforef**](accountinforef) | The accounts information for a particular source in the requested item | [optional] 

## Methods

### NewSourceaccountselections

`func NewSourceaccountselections() *Sourceaccountselections`

NewSourceaccountselections instantiates a new Sourceaccountselections object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceaccountselectionsWithDefaults

`func NewSourceaccountselectionsWithDefaults() *Sourceaccountselections`

NewSourceaccountselectionsWithDefaults instantiates a new Sourceaccountselections object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Sourceaccountselections) GetType() Dtotype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Sourceaccountselections) GetTypeOk() (*Dtotype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Sourceaccountselections) SetType(v Dtotype)`

SetType sets Type field to given value.

### HasType

`func (o *Sourceaccountselections) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Sourceaccountselections) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Sourceaccountselections) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Sourceaccountselections) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Sourceaccountselections) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Sourceaccountselections) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Sourceaccountselections) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Sourceaccountselections) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Sourceaccountselections) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAccounts

`func (o *Sourceaccountselections) GetAccounts() []Accountinforef`

GetAccounts returns the Accounts field if non-nil, zero value otherwise.

### GetAccountsOk

`func (o *Sourceaccountselections) GetAccountsOk() (*[]Accountinforef, bool)`

GetAccountsOk returns a tuple with the Accounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccounts

`func (o *Sourceaccountselections) SetAccounts(v []Accountinforef)`

SetAccounts sets Accounts field to given value.

### HasAccounts

`func (o *Sourceaccountselections) HasAccounts() bool`

HasAccounts returns a boolean if a field has been set.


