---
id: v1-workgroupmemberadditem
title: Workgroupmemberadditem
pagination_label: Workgroupmemberadditem
sidebar_label: Workgroupmemberadditem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workgroupmemberadditem', 'V1Workgroupmemberadditem'] 
slug: /tools/sdk/go/governancegroups/models/workgroupmemberadditem
tags: ['SDK', 'Software Development Kit', 'Workgroupmemberadditem', 'V1Workgroupmemberadditem']
---

# Workgroupmemberadditem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Identifier of identity in bulk member add request. | 
**Status** | **int32** |  The HTTP response status code returned for an individual member that is requested for addition during a bulk add operation. The HTTP response status code returned for an individual Governance Group is requested for deletion.  > 201   - Identity is added into Governance Group members list.  > 409   - Identity is already member of  Governance Group.  | 
**Description** | Pointer to **string** | Human readable status description and containing additional context information about success or failures etc.  | [optional] 

## Methods

### NewWorkgroupmemberadditem

`func NewWorkgroupmemberadditem(id string, status int32, ) *Workgroupmemberadditem`

NewWorkgroupmemberadditem instantiates a new Workgroupmemberadditem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkgroupmemberadditemWithDefaults

`func NewWorkgroupmemberadditemWithDefaults() *Workgroupmemberadditem`

NewWorkgroupmemberadditemWithDefaults instantiates a new Workgroupmemberadditem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Workgroupmemberadditem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Workgroupmemberadditem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Workgroupmemberadditem) SetId(v string)`

SetId sets Id field to given value.


### GetStatus

`func (o *Workgroupmemberadditem) GetStatus() int32`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Workgroupmemberadditem) GetStatusOk() (*int32, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Workgroupmemberadditem) SetStatus(v int32)`

SetStatus sets Status field to given value.


### GetDescription

`func (o *Workgroupmemberadditem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Workgroupmemberadditem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Workgroupmemberadditem) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Workgroupmemberadditem) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


