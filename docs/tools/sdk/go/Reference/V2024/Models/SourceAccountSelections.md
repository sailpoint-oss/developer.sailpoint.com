---
id: v2024-source-account-selections
title: SourceAccountSelections
pagination_label: SourceAccountSelections
sidebar_label: SourceAccountSelections
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceAccountSelections', 'V2024SourceAccountSelections'] 
slug: /tools/sdk/go/v2024/models/source-account-selections
tags: ['SDK', 'Software Development Kit', 'SourceAccountSelections', 'V2024SourceAccountSelections']
---

# SourceAccountSelections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** | Pointer to **string** | The source id | [optional] 
**Name** | Pointer to **string** | The source name | [optional] 
**Accounts** | Pointer to [**[]AccountInfoRef**](account-info-ref) | The accounts information for a particular source in the requested item | [optional] 

## Methods

### NewSourceAccountSelections

`func NewSourceAccountSelections() *SourceAccountSelections`

NewSourceAccountSelections instantiates a new SourceAccountSelections object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceAccountSelectionsWithDefaults

`func NewSourceAccountSelectionsWithDefaults() *SourceAccountSelections`

NewSourceAccountSelectionsWithDefaults instantiates a new SourceAccountSelections object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SourceAccountSelections) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceAccountSelections) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceAccountSelections) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *SourceAccountSelections) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SourceAccountSelections) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceAccountSelections) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceAccountSelections) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceAccountSelections) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SourceAccountSelections) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceAccountSelections) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceAccountSelections) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceAccountSelections) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAccounts

`func (o *SourceAccountSelections) GetAccounts() []AccountInfoRef`

GetAccounts returns the Accounts field if non-nil, zero value otherwise.

### GetAccountsOk

`func (o *SourceAccountSelections) GetAccountsOk() (*[]AccountInfoRef, bool)`

GetAccountsOk returns a tuple with the Accounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccounts

`func (o *SourceAccountSelections) SetAccounts(v []AccountInfoRef)`

SetAccounts sets Accounts field to given value.

### HasAccounts

`func (o *SourceAccountSelections) HasAccounts() bool`

HasAccounts returns a boolean if a field has been set.


