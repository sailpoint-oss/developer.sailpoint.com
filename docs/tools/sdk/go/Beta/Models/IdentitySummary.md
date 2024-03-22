---
id: identity-summary
title: IdentitySummary
pagination_label: IdentitySummary
sidebar_label: IdentitySummary
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'IdentitySummary'] 
slug: /tools/sdk/go/beta/models/identity-summary
tags: ['SDK', 'Software Development Kit', 'IdentitySummary']
---

# IdentitySummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | ID of this identity summary | [optional] 
**Name** |  Pointer to **string** | Human-readable display name of identity | [optional] 
**IdentityId** |  Pointer to **string** | ID of the identity that this summary represents | [optional] 
**Completed** |  Pointer to **bool** | Indicates if all access items for this summary have been decided on | [optional] 

## Methods

### NewIdentitySummary

`func NewIdentitySummary() *IdentitySummary`

NewIdentitySummary instantiates a new IdentitySummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitySummaryWithDefaults

`func NewIdentitySummaryWithDefaults() *IdentitySummary`

NewIdentitySummaryWithDefaults instantiates a new IdentitySummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IdentitySummary) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentitySummary) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentitySummary) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentitySummary) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *IdentitySummary) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentitySummary) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentitySummary) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IdentitySummary) HasName() bool`

HasName returns a boolean if a field has been set.

### GetIdentityId

`func (o *IdentitySummary) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *IdentitySummary) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *IdentitySummary) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *IdentitySummary) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetCompleted

`func (o *IdentitySummary) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *IdentitySummary) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *IdentitySummary) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *IdentitySummary) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.


[[Back to top]](#) 


