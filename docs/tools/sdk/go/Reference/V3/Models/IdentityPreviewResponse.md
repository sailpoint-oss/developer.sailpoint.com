---
id: identity-preview-response
title: IdentityPreviewResponse
pagination_label: IdentityPreviewResponse
sidebar_label: IdentityPreviewResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityPreviewResponse', 'IdentityPreviewResponse'] 
slug: /tools/sdk/go/v3/models/identity-preview-response
tags: ['SDK', 'Software Development Kit', 'IdentityPreviewResponse', 'IdentityPreviewResponse']
---

# IdentityPreviewResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | Pointer to [**IdentityPreviewResponseIdentity**](identity-preview-response-identity) |  | [optional] 
**PreviewAttributes** | Pointer to [**[]IdentityAttributePreview**](identity-attribute-preview) |  | [optional] 

## Methods

### NewIdentityPreviewResponse

`func NewIdentityPreviewResponse() *IdentityPreviewResponse`

NewIdentityPreviewResponse instantiates a new IdentityPreviewResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityPreviewResponseWithDefaults

`func NewIdentityPreviewResponseWithDefaults() *IdentityPreviewResponse`

NewIdentityPreviewResponseWithDefaults instantiates a new IdentityPreviewResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *IdentityPreviewResponse) GetIdentity() IdentityPreviewResponseIdentity`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *IdentityPreviewResponse) GetIdentityOk() (*IdentityPreviewResponseIdentity, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *IdentityPreviewResponse) SetIdentity(v IdentityPreviewResponseIdentity)`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *IdentityPreviewResponse) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### GetPreviewAttributes

`func (o *IdentityPreviewResponse) GetPreviewAttributes() []IdentityAttributePreview`

GetPreviewAttributes returns the PreviewAttributes field if non-nil, zero value otherwise.

### GetPreviewAttributesOk

`func (o *IdentityPreviewResponse) GetPreviewAttributesOk() (*[]IdentityAttributePreview, bool)`

GetPreviewAttributesOk returns a tuple with the PreviewAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviewAttributes

`func (o *IdentityPreviewResponse) SetPreviewAttributes(v []IdentityAttributePreview)`

SetPreviewAttributes sets PreviewAttributes field to given value.

### HasPreviewAttributes

`func (o *IdentityPreviewResponse) HasPreviewAttributes() bool`

HasPreviewAttributes returns a boolean if a field has been set.


