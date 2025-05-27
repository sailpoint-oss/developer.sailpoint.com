---
id: v2024-identity-preview-request
title: IdentityPreviewRequest
pagination_label: IdentityPreviewRequest
sidebar_label: IdentityPreviewRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityPreviewRequest', 'V2024IdentityPreviewRequest'] 
slug: /tools/sdk/go/v2024/models/identity-preview-request
tags: ['SDK', 'Software Development Kit', 'IdentityPreviewRequest', 'V2024IdentityPreviewRequest']
---

# IdentityPreviewRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | Pointer to **string** | The Identity id | [optional] 
**IdentityAttributeConfig** | Pointer to [**IdentityAttributeConfig**](identity-attribute-config) |  | [optional] 

## Methods

### NewIdentityPreviewRequest

`func NewIdentityPreviewRequest() *IdentityPreviewRequest`

NewIdentityPreviewRequest instantiates a new IdentityPreviewRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityPreviewRequestWithDefaults

`func NewIdentityPreviewRequestWithDefaults() *IdentityPreviewRequest`

NewIdentityPreviewRequestWithDefaults instantiates a new IdentityPreviewRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *IdentityPreviewRequest) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *IdentityPreviewRequest) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *IdentityPreviewRequest) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *IdentityPreviewRequest) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetIdentityAttributeConfig

`func (o *IdentityPreviewRequest) GetIdentityAttributeConfig() IdentityAttributeConfig`

GetIdentityAttributeConfig returns the IdentityAttributeConfig field if non-nil, zero value otherwise.

### GetIdentityAttributeConfigOk

`func (o *IdentityPreviewRequest) GetIdentityAttributeConfigOk() (*IdentityAttributeConfig, bool)`

GetIdentityAttributeConfigOk returns a tuple with the IdentityAttributeConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttributeConfig

`func (o *IdentityPreviewRequest) SetIdentityAttributeConfig(v IdentityAttributeConfig)`

SetIdentityAttributeConfig sets IdentityAttributeConfig field to given value.

### HasIdentityAttributeConfig

`func (o *IdentityPreviewRequest) HasIdentityAttributeConfig() bool`

HasIdentityAttributeConfig returns a boolean if a field has been set.


