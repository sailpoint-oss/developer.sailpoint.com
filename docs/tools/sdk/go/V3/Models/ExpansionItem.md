---
id: expansion-item
title: ExpansionItem
pagination_label: ExpansionItem
sidebar_label: ExpansionItem
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ExpansionItem'] 
slug: /tools/sdk/go/v3/models/expansion-item
tags: ['SDK', 'Software Development Kit', 'ExpansionItem']
---

# ExpansionItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** |  Pointer to **string** | The ID of the account | [optional] 
**Cause** |  Pointer to **string** |  | [optional] 
**Name** |  Pointer to **string** | The name of the item | [optional] 
**AttributeRequests** |  Pointer to [**[]AttributeRequest**](attribute-request) |  | [optional] 
**Source** |  Pointer to [**AccountSource**](account-source) |  | [optional] 

## Methods

### NewExpansionItem

`func NewExpansionItem() *ExpansionItem`

NewExpansionItem instantiates a new ExpansionItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExpansionItemWithDefaults

`func NewExpansionItemWithDefaults() *ExpansionItem`

NewExpansionItemWithDefaults instantiates a new ExpansionItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *ExpansionItem) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ExpansionItem) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ExpansionItem) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *ExpansionItem) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetCause

`func (o *ExpansionItem) GetCause() string`

GetCause returns the Cause field if non-nil, zero value otherwise.

### GetCauseOk

`func (o *ExpansionItem) GetCauseOk() (*string, bool)`

GetCauseOk returns a tuple with the Cause field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCause

`func (o *ExpansionItem) SetCause(v string)`

SetCause sets Cause field to given value.

### HasCause

`func (o *ExpansionItem) HasCause() bool`

HasCause returns a boolean if a field has been set.

### GetName

`func (o *ExpansionItem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ExpansionItem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ExpansionItem) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ExpansionItem) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAttributeRequests

`func (o *ExpansionItem) GetAttributeRequests() []AttributeRequest`

GetAttributeRequests returns the AttributeRequests field if non-nil, zero value otherwise.

### GetAttributeRequestsOk

`func (o *ExpansionItem) GetAttributeRequestsOk() (*[]AttributeRequest, bool)`

GetAttributeRequestsOk returns a tuple with the AttributeRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeRequests

`func (o *ExpansionItem) SetAttributeRequests(v []AttributeRequest)`

SetAttributeRequests sets AttributeRequests field to given value.

### HasAttributeRequests

`func (o *ExpansionItem) HasAttributeRequests() bool`

HasAttributeRequests returns a boolean if a field has been set.

### GetSource

`func (o *ExpansionItem) GetSource() AccountSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *ExpansionItem) GetSourceOk() (*AccountSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *ExpansionItem) SetSource(v AccountSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *ExpansionItem) HasSource() bool`

HasSource returns a boolean if a field has been set.


[[Back to top]](#) 


