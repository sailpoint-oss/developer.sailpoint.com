---
id: v2024-requested-account-ref
title: RequestedAccountRef
pagination_label: RequestedAccountRef
sidebar_label: RequestedAccountRef
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RequestedAccountRef', 'V2024RequestedAccountRef'] 
slug: /tools/sdk/go/v2024/models/requested-account-ref
tags: ['SDK', 'Software Development Kit', 'RequestedAccountRef', 'V2024RequestedAccountRef']
---

# RequestedAccountRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Display name of the account for the user | [optional] 
**Type** | Pointer to [**DtoType**](dto-type) |  | [optional] 
**AccountUuid** | Pointer to **NullableString** | The uuid for the account | [optional] 
**AccountId** | Pointer to **NullableString** | The native identity for the account | [optional] 
**SourceName** | Pointer to **string** | Display name of the source for the account | [optional] 

## Methods

### NewRequestedAccountRef

`func NewRequestedAccountRef() *RequestedAccountRef`

NewRequestedAccountRef instantiates a new RequestedAccountRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestedAccountRefWithDefaults

`func NewRequestedAccountRefWithDefaults() *RequestedAccountRef`

NewRequestedAccountRefWithDefaults instantiates a new RequestedAccountRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *RequestedAccountRef) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RequestedAccountRef) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RequestedAccountRef) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RequestedAccountRef) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *RequestedAccountRef) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RequestedAccountRef) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RequestedAccountRef) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *RequestedAccountRef) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAccountUuid

`func (o *RequestedAccountRef) GetAccountUuid() string`

GetAccountUuid returns the AccountUuid field if non-nil, zero value otherwise.

### GetAccountUuidOk

`func (o *RequestedAccountRef) GetAccountUuidOk() (*string, bool)`

GetAccountUuidOk returns a tuple with the AccountUuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountUuid

`func (o *RequestedAccountRef) SetAccountUuid(v string)`

SetAccountUuid sets AccountUuid field to given value.

### HasAccountUuid

`func (o *RequestedAccountRef) HasAccountUuid() bool`

HasAccountUuid returns a boolean if a field has been set.

### SetAccountUuidNil

`func (o *RequestedAccountRef) SetAccountUuidNil(b bool)`

 SetAccountUuidNil sets the value for AccountUuid to be an explicit nil

### UnsetAccountUuid
`func (o *RequestedAccountRef) UnsetAccountUuid()`

UnsetAccountUuid ensures that no value is present for AccountUuid, not even an explicit nil
### GetAccountId

`func (o *RequestedAccountRef) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *RequestedAccountRef) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *RequestedAccountRef) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *RequestedAccountRef) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### SetAccountIdNil

`func (o *RequestedAccountRef) SetAccountIdNil(b bool)`

 SetAccountIdNil sets the value for AccountId to be an explicit nil

### UnsetAccountId
`func (o *RequestedAccountRef) UnsetAccountId()`

UnsetAccountId ensures that no value is present for AccountId, not even an explicit nil
### GetSourceName

`func (o *RequestedAccountRef) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *RequestedAccountRef) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *RequestedAccountRef) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *RequestedAccountRef) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.


