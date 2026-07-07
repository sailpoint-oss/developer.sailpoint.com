---
id: v1-identitysummary
title: Identitysummary
pagination_label: Identitysummary
sidebar_label: Identitysummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identitysummary', 'V1Identitysummary'] 
slug: /tools/sdk/go/accountactivities/models/identitysummary
tags: ['SDK', 'Software Development Kit', 'Identitysummary', 'V1Identitysummary']
---

# Identitysummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of this identity summary | [optional] 
**Name** | Pointer to **string** | Human-readable display name of identity | [optional] 
**IdentityId** | Pointer to **string** | ID of the identity that this summary represents | [optional] 
**Completed** | Pointer to **bool** | Indicates if all access items for this summary have been decided on | [optional] [default to false]

## Methods

### NewIdentitysummary

`func NewIdentitysummary() *Identitysummary`

NewIdentitysummary instantiates a new Identitysummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitysummaryWithDefaults

`func NewIdentitysummaryWithDefaults() *Identitysummary`

NewIdentitysummaryWithDefaults instantiates a new Identitysummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Identitysummary) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Identitysummary) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Identitysummary) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Identitysummary) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Identitysummary) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Identitysummary) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Identitysummary) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Identitysummary) HasName() bool`

HasName returns a boolean if a field has been set.

### GetIdentityId

`func (o *Identitysummary) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Identitysummary) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Identitysummary) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Identitysummary) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetCompleted

`func (o *Identitysummary) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Identitysummary) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Identitysummary) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Identitysummary) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.


