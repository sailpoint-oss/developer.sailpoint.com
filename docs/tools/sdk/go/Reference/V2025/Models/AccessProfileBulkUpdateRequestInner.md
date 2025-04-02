---
id: access-profile-bulk-update-request-inner
title: AccessProfileBulkUpdateRequestInner
pagination_label: AccessProfileBulkUpdateRequestInner
sidebar_label: AccessProfileBulkUpdateRequestInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessProfileBulkUpdateRequestInner', 'AccessProfileBulkUpdateRequestInner'] 
slug: /tools/sdk/go//models/access-profile-bulk-update-request-inner
tags: ['SDK', 'Software Development Kit', 'AccessProfileBulkUpdateRequestInner', 'AccessProfileBulkUpdateRequestInner']
---

# AccessProfileBulkUpdateRequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Access Profile ID. | [optional] 
**Requestable** | Pointer to **bool** | Access Profile is requestable or not. | [optional] 

## Methods

### NewAccessProfileBulkUpdateRequestInner

`func NewAccessProfileBulkUpdateRequestInner() *AccessProfileBulkUpdateRequestInner`

NewAccessProfileBulkUpdateRequestInner instantiates a new AccessProfileBulkUpdateRequestInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileBulkUpdateRequestInnerWithDefaults

`func NewAccessProfileBulkUpdateRequestInnerWithDefaults() *AccessProfileBulkUpdateRequestInner`

NewAccessProfileBulkUpdateRequestInnerWithDefaults instantiates a new AccessProfileBulkUpdateRequestInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessProfileBulkUpdateRequestInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessProfileBulkUpdateRequestInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessProfileBulkUpdateRequestInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessProfileBulkUpdateRequestInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetRequestable

`func (o *AccessProfileBulkUpdateRequestInner) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *AccessProfileBulkUpdateRequestInner) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *AccessProfileBulkUpdateRequestInner) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *AccessProfileBulkUpdateRequestInner) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.


