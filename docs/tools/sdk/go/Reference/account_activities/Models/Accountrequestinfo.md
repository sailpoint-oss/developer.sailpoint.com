---
id: v1-accountrequestinfo
title: Accountrequestinfo
pagination_label: Accountrequestinfo
sidebar_label: Accountrequestinfo
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountrequestinfo', 'V1Accountrequestinfo'] 
slug: /tools/sdk/go/accountactivities/models/accountrequestinfo
tags: ['SDK', 'Software Development Kit', 'Accountrequestinfo', 'V1Accountrequestinfo']
---

# Accountrequestinfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedObjectId** | Pointer to **string** | Id of requested object | [optional] 
**RequestedObjectName** | Pointer to **string** | Human-readable name of requested object | [optional] 
**RequestedObjectType** | Pointer to [**Requestableobjecttype**](requestableobjecttype) |  | [optional] 

## Methods

### NewAccountrequestinfo

`func NewAccountrequestinfo() *Accountrequestinfo`

NewAccountrequestinfo instantiates a new Accountrequestinfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountrequestinfoWithDefaults

`func NewAccountrequestinfoWithDefaults() *Accountrequestinfo`

NewAccountrequestinfoWithDefaults instantiates a new Accountrequestinfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestedObjectId

`func (o *Accountrequestinfo) GetRequestedObjectId() string`

GetRequestedObjectId returns the RequestedObjectId field if non-nil, zero value otherwise.

### GetRequestedObjectIdOk

`func (o *Accountrequestinfo) GetRequestedObjectIdOk() (*string, bool)`

GetRequestedObjectIdOk returns a tuple with the RequestedObjectId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedObjectId

`func (o *Accountrequestinfo) SetRequestedObjectId(v string)`

SetRequestedObjectId sets RequestedObjectId field to given value.

### HasRequestedObjectId

`func (o *Accountrequestinfo) HasRequestedObjectId() bool`

HasRequestedObjectId returns a boolean if a field has been set.

### GetRequestedObjectName

`func (o *Accountrequestinfo) GetRequestedObjectName() string`

GetRequestedObjectName returns the RequestedObjectName field if non-nil, zero value otherwise.

### GetRequestedObjectNameOk

`func (o *Accountrequestinfo) GetRequestedObjectNameOk() (*string, bool)`

GetRequestedObjectNameOk returns a tuple with the RequestedObjectName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedObjectName

`func (o *Accountrequestinfo) SetRequestedObjectName(v string)`

SetRequestedObjectName sets RequestedObjectName field to given value.

### HasRequestedObjectName

`func (o *Accountrequestinfo) HasRequestedObjectName() bool`

HasRequestedObjectName returns a boolean if a field has been set.

### GetRequestedObjectType

`func (o *Accountrequestinfo) GetRequestedObjectType() Requestableobjecttype`

GetRequestedObjectType returns the RequestedObjectType field if non-nil, zero value otherwise.

### GetRequestedObjectTypeOk

`func (o *Accountrequestinfo) GetRequestedObjectTypeOk() (*Requestableobjecttype, bool)`

GetRequestedObjectTypeOk returns a tuple with the RequestedObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedObjectType

`func (o *Accountrequestinfo) SetRequestedObjectType(v Requestableobjecttype)`

SetRequestedObjectType sets RequestedObjectType field to given value.

### HasRequestedObjectType

`func (o *Accountrequestinfo) HasRequestedObjectType() bool`

HasRequestedObjectType returns a boolean if a field has been set.


