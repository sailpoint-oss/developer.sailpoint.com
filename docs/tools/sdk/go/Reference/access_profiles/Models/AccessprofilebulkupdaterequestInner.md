---
id: v1-accessprofilebulkupdaterequest-inner
title: AccessprofilebulkupdaterequestInner
pagination_label: AccessprofilebulkupdaterequestInner
sidebar_label: AccessprofilebulkupdaterequestInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessprofilebulkupdaterequestInner', 'V1AccessprofilebulkupdaterequestInner'] 
slug: /tools/sdk/go/accessprofiles/models/accessprofilebulkupdaterequest-inner
tags: ['SDK', 'Software Development Kit', 'AccessprofilebulkupdaterequestInner', 'V1AccessprofilebulkupdaterequestInner']
---

# AccessprofilebulkupdaterequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Access Profile ID. | [optional] 
**Requestable** | Pointer to **bool** | Access Profile is requestable or not. | [optional] 

## Methods

### NewAccessprofilebulkupdaterequestInner

`func NewAccessprofilebulkupdaterequestInner() *AccessprofilebulkupdaterequestInner`

NewAccessprofilebulkupdaterequestInner instantiates a new AccessprofilebulkupdaterequestInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessprofilebulkupdaterequestInnerWithDefaults

`func NewAccessprofilebulkupdaterequestInnerWithDefaults() *AccessprofilebulkupdaterequestInner`

NewAccessprofilebulkupdaterequestInnerWithDefaults instantiates a new AccessprofilebulkupdaterequestInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessprofilebulkupdaterequestInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessprofilebulkupdaterequestInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessprofilebulkupdaterequestInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessprofilebulkupdaterequestInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetRequestable

`func (o *AccessprofilebulkupdaterequestInner) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *AccessprofilebulkupdaterequestInner) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *AccessprofilebulkupdaterequestInner) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *AccessprofilebulkupdaterequestInner) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.


