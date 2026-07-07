---
id: v1-roletargetdto
title: Roletargetdto
pagination_label: Roletargetdto
sidebar_label: Roletargetdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roletargetdto', 'V1Roletargetdto'] 
slug: /tools/sdk/go/identities/models/roletargetdto
tags: ['SDK', 'Software Development Kit', 'Roletargetdto', 'V1Roletargetdto']
---

# Roletargetdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | Pointer to [**Basereferencedto**](basereferencedto) |  | [optional] 
**AccountInfo** | Pointer to [**Accountinfodto**](accountinfodto) |  | [optional] 
**Role** | Pointer to [**Basereferencedto**](basereferencedto) |  | [optional] 

## Methods

### NewRoletargetdto

`func NewRoletargetdto() *Roletargetdto`

NewRoletargetdto instantiates a new Roletargetdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoletargetdtoWithDefaults

`func NewRoletargetdtoWithDefaults() *Roletargetdto`

NewRoletargetdtoWithDefaults instantiates a new Roletargetdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSource

`func (o *Roletargetdto) GetSource() Basereferencedto`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Roletargetdto) GetSourceOk() (*Basereferencedto, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Roletargetdto) SetSource(v Basereferencedto)`

SetSource sets Source field to given value.

### HasSource

`func (o *Roletargetdto) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetAccountInfo

`func (o *Roletargetdto) GetAccountInfo() Accountinfodto`

GetAccountInfo returns the AccountInfo field if non-nil, zero value otherwise.

### GetAccountInfoOk

`func (o *Roletargetdto) GetAccountInfoOk() (*Accountinfodto, bool)`

GetAccountInfoOk returns a tuple with the AccountInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountInfo

`func (o *Roletargetdto) SetAccountInfo(v Accountinfodto)`

SetAccountInfo sets AccountInfo field to given value.

### HasAccountInfo

`func (o *Roletargetdto) HasAccountInfo() bool`

HasAccountInfo returns a boolean if a field has been set.

### GetRole

`func (o *Roletargetdto) GetRole() Basereferencedto`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *Roletargetdto) GetRoleOk() (*Basereferencedto, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *Roletargetdto) SetRole(v Basereferencedto)`

SetRole sets Role field to given value.

### HasRole

`func (o *Roletargetdto) HasRole() bool`

HasRole returns a boolean if a field has been set.


