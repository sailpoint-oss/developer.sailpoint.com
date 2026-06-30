---
id: v1-get-tenant-ui-metadata-v1429-response
title: GetTenantUiMetadataV1429Response
pagination_label: GetTenantUiMetadataV1429Response
sidebar_label: GetTenantUiMetadataV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetTenantUiMetadataV1429Response', 'V1GetTenantUiMetadataV1429Response'] 
slug: /tools/sdk/go/uimetadata/models/get-tenant-ui-metadata-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetTenantUiMetadataV1429Response', 'V1GetTenantUiMetadataV1429Response']
---

# GetTenantUiMetadataV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetTenantUiMetadataV1429Response

`func NewGetTenantUiMetadataV1429Response() *GetTenantUiMetadataV1429Response`

NewGetTenantUiMetadataV1429Response instantiates a new GetTenantUiMetadataV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetTenantUiMetadataV1429ResponseWithDefaults

`func NewGetTenantUiMetadataV1429ResponseWithDefaults() *GetTenantUiMetadataV1429Response`

NewGetTenantUiMetadataV1429ResponseWithDefaults instantiates a new GetTenantUiMetadataV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetTenantUiMetadataV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetTenantUiMetadataV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetTenantUiMetadataV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetTenantUiMetadataV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetTenantUiMetadataV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetTenantUiMetadataV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

