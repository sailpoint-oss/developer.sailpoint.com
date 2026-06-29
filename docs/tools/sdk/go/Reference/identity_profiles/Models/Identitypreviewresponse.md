---
id: v1-identitypreviewresponse
title: Identitypreviewresponse
pagination_label: Identitypreviewresponse
sidebar_label: Identitypreviewresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identitypreviewresponse', 'V1Identitypreviewresponse'] 
slug: /tools/sdk/go/identityprofiles/models/identitypreviewresponse
tags: ['SDK', 'Software Development Kit', 'Identitypreviewresponse', 'V1Identitypreviewresponse']
---

# Identitypreviewresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | Pointer to [**IdentitypreviewresponseIdentity**](identitypreviewresponse-identity) |  | [optional] 
**PreviewAttributes** | Pointer to [**[]Identityattributepreview**](identityattributepreview) |  | [optional] 

## Methods

### NewIdentitypreviewresponse

`func NewIdentitypreviewresponse() *Identitypreviewresponse`

NewIdentitypreviewresponse instantiates a new Identitypreviewresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitypreviewresponseWithDefaults

`func NewIdentitypreviewresponseWithDefaults() *Identitypreviewresponse`

NewIdentitypreviewresponseWithDefaults instantiates a new Identitypreviewresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *Identitypreviewresponse) GetIdentity() IdentitypreviewresponseIdentity`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *Identitypreviewresponse) GetIdentityOk() (*IdentitypreviewresponseIdentity, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *Identitypreviewresponse) SetIdentity(v IdentitypreviewresponseIdentity)`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *Identitypreviewresponse) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### GetPreviewAttributes

`func (o *Identitypreviewresponse) GetPreviewAttributes() []Identityattributepreview`

GetPreviewAttributes returns the PreviewAttributes field if non-nil, zero value otherwise.

### GetPreviewAttributesOk

`func (o *Identitypreviewresponse) GetPreviewAttributesOk() (*[]Identityattributepreview, bool)`

GetPreviewAttributesOk returns a tuple with the PreviewAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviewAttributes

`func (o *Identitypreviewresponse) SetPreviewAttributes(v []Identityattributepreview)`

SetPreviewAttributes sets PreviewAttributes field to given value.

### HasPreviewAttributes

`func (o *Identitypreviewresponse) HasPreviewAttributes() bool`

HasPreviewAttributes returns a boolean if a field has been set.


