---
id: v1-accessprofileupdateitem
title: Accessprofileupdateitem
pagination_label: Accessprofileupdateitem
sidebar_label: Accessprofileupdateitem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessprofileupdateitem', 'V1Accessprofileupdateitem'] 
slug: /tools/sdk/go/accessprofiles/models/accessprofileupdateitem
tags: ['SDK', 'Software Development Kit', 'Accessprofileupdateitem', 'V1Accessprofileupdateitem']
---

# Accessprofileupdateitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Identifier of Access Profile in bulk update request. | 
**Requestable** | **bool** | Access Profile requestable or not. | 
**Status** | **string** |  The HTTP response status code returned for an individual Access Profile that is requested for update during a bulk update operation.  > 201   - Access profile is updated successfully.  > 404   - Access profile not found.  | 
**Description** | Pointer to **string** | Human readable status description and containing additional context information about success or failures etc.  | [optional] 

## Methods

### NewAccessprofileupdateitem

`func NewAccessprofileupdateitem(id string, requestable bool, status string, ) *Accessprofileupdateitem`

NewAccessprofileupdateitem instantiates a new Accessprofileupdateitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessprofileupdateitemWithDefaults

`func NewAccessprofileupdateitemWithDefaults() *Accessprofileupdateitem`

NewAccessprofileupdateitemWithDefaults instantiates a new Accessprofileupdateitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accessprofileupdateitem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessprofileupdateitem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessprofileupdateitem) SetId(v string)`

SetId sets Id field to given value.


### GetRequestable

`func (o *Accessprofileupdateitem) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *Accessprofileupdateitem) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *Accessprofileupdateitem) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.


### GetStatus

`func (o *Accessprofileupdateitem) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Accessprofileupdateitem) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Accessprofileupdateitem) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetDescription

`func (o *Accessprofileupdateitem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Accessprofileupdateitem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Accessprofileupdateitem) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Accessprofileupdateitem) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


