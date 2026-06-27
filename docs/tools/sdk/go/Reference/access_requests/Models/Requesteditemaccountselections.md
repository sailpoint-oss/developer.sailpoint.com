---
id: v1-requesteditemaccountselections
title: Requesteditemaccountselections
pagination_label: Requesteditemaccountselections
sidebar_label: Requesteditemaccountselections
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Requesteditemaccountselections', 'V1Requesteditemaccountselections'] 
slug: /tools/sdk/go/accessrequests/models/requesteditemaccountselections
tags: ['SDK', 'Software Development Kit', 'Requesteditemaccountselections', 'V1Requesteditemaccountselections']
---

# Requesteditemaccountselections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | The description for this requested item | [optional] 
**AccountsSelectionBlocked** | Pointer to **bool** | This field indicates if account selections are not allowed for this requested item. * If true, this field indicates that account selections will not be available for this item and user combination. In this case, no account selections should be provided in the access request for this item and user combination, irrespective of whether the user has single or multiple accounts on a source. * An example is where a user is requesting an access profile that is already assigned to one of their accounts.  | [optional] [default to false]
**AccountsSelectionBlockedReason** | Pointer to **NullableString** | If account selections are not allowed for an item, this field will denote the reason. | [optional] 
**Type** | Pointer to **string** | The type of the item being requested. | [optional] 
**Id** | Pointer to **string** | The id of the requested item | [optional] 
**Name** | Pointer to **string** | The name of the requested item | [optional] 
**Sources** | Pointer to [**[]Sourceaccountselections**](sourceaccountselections) | The details for the sources and accounts for the requested item and identity combination | [optional] 

## Methods

### NewRequesteditemaccountselections

`func NewRequesteditemaccountselections() *Requesteditemaccountselections`

NewRequesteditemaccountselections instantiates a new Requesteditemaccountselections object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequesteditemaccountselectionsWithDefaults

`func NewRequesteditemaccountselectionsWithDefaults() *Requesteditemaccountselections`

NewRequesteditemaccountselectionsWithDefaults instantiates a new Requesteditemaccountselections object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *Requesteditemaccountselections) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Requesteditemaccountselections) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Requesteditemaccountselections) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Requesteditemaccountselections) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAccountsSelectionBlocked

`func (o *Requesteditemaccountselections) GetAccountsSelectionBlocked() bool`

GetAccountsSelectionBlocked returns the AccountsSelectionBlocked field if non-nil, zero value otherwise.

### GetAccountsSelectionBlockedOk

`func (o *Requesteditemaccountselections) GetAccountsSelectionBlockedOk() (*bool, bool)`

GetAccountsSelectionBlockedOk returns a tuple with the AccountsSelectionBlocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountsSelectionBlocked

`func (o *Requesteditemaccountselections) SetAccountsSelectionBlocked(v bool)`

SetAccountsSelectionBlocked sets AccountsSelectionBlocked field to given value.

### HasAccountsSelectionBlocked

`func (o *Requesteditemaccountselections) HasAccountsSelectionBlocked() bool`

HasAccountsSelectionBlocked returns a boolean if a field has been set.

### GetAccountsSelectionBlockedReason

`func (o *Requesteditemaccountselections) GetAccountsSelectionBlockedReason() string`

GetAccountsSelectionBlockedReason returns the AccountsSelectionBlockedReason field if non-nil, zero value otherwise.

### GetAccountsSelectionBlockedReasonOk

`func (o *Requesteditemaccountselections) GetAccountsSelectionBlockedReasonOk() (*string, bool)`

GetAccountsSelectionBlockedReasonOk returns a tuple with the AccountsSelectionBlockedReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountsSelectionBlockedReason

`func (o *Requesteditemaccountselections) SetAccountsSelectionBlockedReason(v string)`

SetAccountsSelectionBlockedReason sets AccountsSelectionBlockedReason field to given value.

### HasAccountsSelectionBlockedReason

`func (o *Requesteditemaccountselections) HasAccountsSelectionBlockedReason() bool`

HasAccountsSelectionBlockedReason returns a boolean if a field has been set.

### SetAccountsSelectionBlockedReasonNil

`func (o *Requesteditemaccountselections) SetAccountsSelectionBlockedReasonNil(b bool)`

 SetAccountsSelectionBlockedReasonNil sets the value for AccountsSelectionBlockedReason to be an explicit nil

### UnsetAccountsSelectionBlockedReason
`func (o *Requesteditemaccountselections) UnsetAccountsSelectionBlockedReason()`

UnsetAccountsSelectionBlockedReason ensures that no value is present for AccountsSelectionBlockedReason, not even an explicit nil
### GetType

`func (o *Requesteditemaccountselections) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Requesteditemaccountselections) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Requesteditemaccountselections) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Requesteditemaccountselections) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Requesteditemaccountselections) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Requesteditemaccountselections) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Requesteditemaccountselections) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Requesteditemaccountselections) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Requesteditemaccountselections) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Requesteditemaccountselections) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Requesteditemaccountselections) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Requesteditemaccountselections) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSources

`func (o *Requesteditemaccountselections) GetSources() []Sourceaccountselections`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *Requesteditemaccountselections) GetSourcesOk() (*[]Sourceaccountselections, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *Requesteditemaccountselections) SetSources(v []Sourceaccountselections)`

SetSources sets Sources field to given value.

### HasSources

`func (o *Requesteditemaccountselections) HasSources() bool`

HasSources returns a boolean if a field has been set.


