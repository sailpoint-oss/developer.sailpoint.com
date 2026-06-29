---
id: v1-identityaccountselections
title: Identityaccountselections
pagination_label: Identityaccountselections
sidebar_label: Identityaccountselections
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityaccountselections', 'V1Identityaccountselections'] 
slug: /tools/sdk/go/accessrequests/models/identityaccountselections
tags: ['SDK', 'Software Development Kit', 'Identityaccountselections', 'V1Identityaccountselections']
---

# Identityaccountselections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedItems** | Pointer to [**[]Requesteditemaccountselections**](requesteditemaccountselections) | Available account selections for the identity, per requested item | [optional] 
**AccountsSelectionRequired** | Pointer to **bool** | A boolean indicating whether any account selections will be required for the user to raise an access request | [optional] [default to false]
**Type** | Pointer to [**Dtotype**](dtotype) |  | [optional] 
**Id** | Pointer to **string** | The identity id for the user | [optional] 
**Name** | Pointer to **string** | The name of the identity | [optional] 

## Methods

### NewIdentityaccountselections

`func NewIdentityaccountselections() *Identityaccountselections`

NewIdentityaccountselections instantiates a new Identityaccountselections object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityaccountselectionsWithDefaults

`func NewIdentityaccountselectionsWithDefaults() *Identityaccountselections`

NewIdentityaccountselectionsWithDefaults instantiates a new Identityaccountselections object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestedItems

`func (o *Identityaccountselections) GetRequestedItems() []Requesteditemaccountselections`

GetRequestedItems returns the RequestedItems field if non-nil, zero value otherwise.

### GetRequestedItemsOk

`func (o *Identityaccountselections) GetRequestedItemsOk() (*[]Requesteditemaccountselections, bool)`

GetRequestedItemsOk returns a tuple with the RequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItems

`func (o *Identityaccountselections) SetRequestedItems(v []Requesteditemaccountselections)`

SetRequestedItems sets RequestedItems field to given value.

### HasRequestedItems

`func (o *Identityaccountselections) HasRequestedItems() bool`

HasRequestedItems returns a boolean if a field has been set.

### GetAccountsSelectionRequired

`func (o *Identityaccountselections) GetAccountsSelectionRequired() bool`

GetAccountsSelectionRequired returns the AccountsSelectionRequired field if non-nil, zero value otherwise.

### GetAccountsSelectionRequiredOk

`func (o *Identityaccountselections) GetAccountsSelectionRequiredOk() (*bool, bool)`

GetAccountsSelectionRequiredOk returns a tuple with the AccountsSelectionRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountsSelectionRequired

`func (o *Identityaccountselections) SetAccountsSelectionRequired(v bool)`

SetAccountsSelectionRequired sets AccountsSelectionRequired field to given value.

### HasAccountsSelectionRequired

`func (o *Identityaccountselections) HasAccountsSelectionRequired() bool`

HasAccountsSelectionRequired returns a boolean if a field has been set.

### GetType

`func (o *Identityaccountselections) GetType() Dtotype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Identityaccountselections) GetTypeOk() (*Dtotype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Identityaccountselections) SetType(v Dtotype)`

SetType sets Type field to given value.

### HasType

`func (o *Identityaccountselections) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Identityaccountselections) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Identityaccountselections) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Identityaccountselections) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Identityaccountselections) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Identityaccountselections) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Identityaccountselections) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Identityaccountselections) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Identityaccountselections) HasName() bool`

HasName returns a boolean if a field has been set.


