---
id: v2025-identity-account-selections
title: IdentityAccountSelections
pagination_label: IdentityAccountSelections
sidebar_label: IdentityAccountSelections
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityAccountSelections', 'V2025IdentityAccountSelections'] 
slug: /tools/sdk/go/v2025/models/identity-account-selections
tags: ['SDK', 'Software Development Kit', 'IdentityAccountSelections', 'V2025IdentityAccountSelections']
---

# IdentityAccountSelections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedItems** | Pointer to [**[]RequestedItemAccountSelections**](requested-item-account-selections) | Available account selections for the identity, per requested item | [optional] 
**AccountsSelectionRequired** | Pointer to **bool** | A boolean indicating whether any account selections will be required for the user to raise an access request | [optional] [default to false]
**Type** | Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** | Pointer to **string** | The identity id for the user | [optional] 
**Name** | Pointer to **string** | The name of the identity | [optional] 

## Methods

### NewIdentityAccountSelections

`func NewIdentityAccountSelections() *IdentityAccountSelections`

NewIdentityAccountSelections instantiates a new IdentityAccountSelections object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityAccountSelectionsWithDefaults

`func NewIdentityAccountSelectionsWithDefaults() *IdentityAccountSelections`

NewIdentityAccountSelectionsWithDefaults instantiates a new IdentityAccountSelections object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestedItems

`func (o *IdentityAccountSelections) GetRequestedItems() []RequestedItemAccountSelections`

GetRequestedItems returns the RequestedItems field if non-nil, zero value otherwise.

### GetRequestedItemsOk

`func (o *IdentityAccountSelections) GetRequestedItemsOk() (*[]RequestedItemAccountSelections, bool)`

GetRequestedItemsOk returns a tuple with the RequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItems

`func (o *IdentityAccountSelections) SetRequestedItems(v []RequestedItemAccountSelections)`

SetRequestedItems sets RequestedItems field to given value.

### HasRequestedItems

`func (o *IdentityAccountSelections) HasRequestedItems() bool`

HasRequestedItems returns a boolean if a field has been set.

### GetAccountsSelectionRequired

`func (o *IdentityAccountSelections) GetAccountsSelectionRequired() bool`

GetAccountsSelectionRequired returns the AccountsSelectionRequired field if non-nil, zero value otherwise.

### GetAccountsSelectionRequiredOk

`func (o *IdentityAccountSelections) GetAccountsSelectionRequiredOk() (*bool, bool)`

GetAccountsSelectionRequiredOk returns a tuple with the AccountsSelectionRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountsSelectionRequired

`func (o *IdentityAccountSelections) SetAccountsSelectionRequired(v bool)`

SetAccountsSelectionRequired sets AccountsSelectionRequired field to given value.

### HasAccountsSelectionRequired

`func (o *IdentityAccountSelections) HasAccountsSelectionRequired() bool`

HasAccountsSelectionRequired returns a boolean if a field has been set.

### GetType

`func (o *IdentityAccountSelections) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentityAccountSelections) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentityAccountSelections) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *IdentityAccountSelections) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *IdentityAccountSelections) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityAccountSelections) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityAccountSelections) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentityAccountSelections) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *IdentityAccountSelections) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityAccountSelections) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityAccountSelections) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IdentityAccountSelections) HasName() bool`

HasName returns a boolean if a field has been set.


