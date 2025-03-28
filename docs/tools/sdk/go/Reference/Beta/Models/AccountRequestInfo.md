---
id: beta-account-request-info
title: AccountRequestInfo
pagination_label: AccountRequestInfo
sidebar_label: AccountRequestInfo
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountRequestInfo', 'BetaAccountRequestInfo'] 
slug: /tools/sdk/go/beta/models/account-request-info
tags: ['SDK', 'Software Development Kit', 'AccountRequestInfo', 'BetaAccountRequestInfo']
---

# AccountRequestInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedObjectId** | Pointer to **string** | Id of requested object | [optional] 
**RequestedObjectName** | Pointer to **string** | Human-readable name of requested object | [optional] 
**RequestedObjectType** | Pointer to [**RequestableObjectType**](requestable-object-type) |  | [optional] 

## Methods

### NewAccountRequestInfo

`func NewAccountRequestInfo() *AccountRequestInfo`

NewAccountRequestInfo instantiates a new AccountRequestInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountRequestInfoWithDefaults

`func NewAccountRequestInfoWithDefaults() *AccountRequestInfo`

NewAccountRequestInfoWithDefaults instantiates a new AccountRequestInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestedObjectId

`func (o *AccountRequestInfo) GetRequestedObjectId() string`

GetRequestedObjectId returns the RequestedObjectId field if non-nil, zero value otherwise.

### GetRequestedObjectIdOk

`func (o *AccountRequestInfo) GetRequestedObjectIdOk() (*string, bool)`

GetRequestedObjectIdOk returns a tuple with the RequestedObjectId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedObjectId

`func (o *AccountRequestInfo) SetRequestedObjectId(v string)`

SetRequestedObjectId sets RequestedObjectId field to given value.

### HasRequestedObjectId

`func (o *AccountRequestInfo) HasRequestedObjectId() bool`

HasRequestedObjectId returns a boolean if a field has been set.

### GetRequestedObjectName

`func (o *AccountRequestInfo) GetRequestedObjectName() string`

GetRequestedObjectName returns the RequestedObjectName field if non-nil, zero value otherwise.

### GetRequestedObjectNameOk

`func (o *AccountRequestInfo) GetRequestedObjectNameOk() (*string, bool)`

GetRequestedObjectNameOk returns a tuple with the RequestedObjectName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedObjectName

`func (o *AccountRequestInfo) SetRequestedObjectName(v string)`

SetRequestedObjectName sets RequestedObjectName field to given value.

### HasRequestedObjectName

`func (o *AccountRequestInfo) HasRequestedObjectName() bool`

HasRequestedObjectName returns a boolean if a field has been set.

### GetRequestedObjectType

`func (o *AccountRequestInfo) GetRequestedObjectType() RequestableObjectType`

GetRequestedObjectType returns the RequestedObjectType field if non-nil, zero value otherwise.

### GetRequestedObjectTypeOk

`func (o *AccountRequestInfo) GetRequestedObjectTypeOk() (*RequestableObjectType, bool)`

GetRequestedObjectTypeOk returns a tuple with the RequestedObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedObjectType

`func (o *AccountRequestInfo) SetRequestedObjectType(v RequestableObjectType)`

SetRequestedObjectType sets RequestedObjectType field to given value.

### HasRequestedObjectType

`func (o *AccountRequestInfo) HasRequestedObjectType() bool`

HasRequestedObjectType returns a boolean if a field has been set.


