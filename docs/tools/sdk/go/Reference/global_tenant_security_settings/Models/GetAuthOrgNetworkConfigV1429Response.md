---
id: v1-get-auth-org-network-config-v1429-response
title: GetAuthOrgNetworkConfigV1429Response
pagination_label: GetAuthOrgNetworkConfigV1429Response
sidebar_label: GetAuthOrgNetworkConfigV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetAuthOrgNetworkConfigV1429Response', 'V1GetAuthOrgNetworkConfigV1429Response'] 
slug: /tools/sdk/go/globaltenantsecuritysettings/models/get-auth-org-network-config-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetAuthOrgNetworkConfigV1429Response', 'V1GetAuthOrgNetworkConfigV1429Response']
---

# GetAuthOrgNetworkConfigV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetAuthOrgNetworkConfigV1429Response

`func NewGetAuthOrgNetworkConfigV1429Response() *GetAuthOrgNetworkConfigV1429Response`

NewGetAuthOrgNetworkConfigV1429Response instantiates a new GetAuthOrgNetworkConfigV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAuthOrgNetworkConfigV1429ResponseWithDefaults

`func NewGetAuthOrgNetworkConfigV1429ResponseWithDefaults() *GetAuthOrgNetworkConfigV1429Response`

NewGetAuthOrgNetworkConfigV1429ResponseWithDefaults instantiates a new GetAuthOrgNetworkConfigV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetAuthOrgNetworkConfigV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetAuthOrgNetworkConfigV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetAuthOrgNetworkConfigV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetAuthOrgNetworkConfigV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetAuthOrgNetworkConfigV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetAuthOrgNetworkConfigV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

