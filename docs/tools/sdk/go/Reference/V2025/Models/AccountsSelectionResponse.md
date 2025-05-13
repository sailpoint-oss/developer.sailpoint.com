---
id: v2025-accounts-selection-response
title: AccountsSelectionResponse
pagination_label: AccountsSelectionResponse
sidebar_label: AccountsSelectionResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountsSelectionResponse', 'V2025AccountsSelectionResponse'] 
slug: /tools/sdk/go/v2025/models/accounts-selection-response
tags: ['SDK', 'Software Development Kit', 'AccountsSelectionResponse', 'V2025AccountsSelectionResponse']
---

# AccountsSelectionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identities** | Pointer to [**[]IdentityAccountSelections**](identity-account-selections) | A list of available account selections per identity in the request, for all the requested items | [optional] 

## Methods

### NewAccountsSelectionResponse

`func NewAccountsSelectionResponse() *AccountsSelectionResponse`

NewAccountsSelectionResponse instantiates a new AccountsSelectionResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountsSelectionResponseWithDefaults

`func NewAccountsSelectionResponseWithDefaults() *AccountsSelectionResponse`

NewAccountsSelectionResponseWithDefaults instantiates a new AccountsSelectionResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentities

`func (o *AccountsSelectionResponse) GetIdentities() []IdentityAccountSelections`

GetIdentities returns the Identities field if non-nil, zero value otherwise.

### GetIdentitiesOk

`func (o *AccountsSelectionResponse) GetIdentitiesOk() (*[]IdentityAccountSelections, bool)`

GetIdentitiesOk returns a tuple with the Identities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentities

`func (o *AccountsSelectionResponse) SetIdentities(v []IdentityAccountSelections)`

SetIdentities sets Identities field to given value.

### HasIdentities

`func (o *AccountsSelectionResponse) HasIdentities() bool`

HasIdentities returns a boolean if a field has been set.


