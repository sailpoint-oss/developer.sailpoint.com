---
id: v1-get-auth-org-network-config-v1401-response
title: GetAuthOrgNetworkConfigV1401Response
pagination_label: GetAuthOrgNetworkConfigV1401Response
sidebar_label: GetAuthOrgNetworkConfigV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetAuthOrgNetworkConfigV1401Response', 'V1GetAuthOrgNetworkConfigV1401Response'] 
slug: /tools/sdk/go/globaltenantsecuritysettings/models/get-auth-org-network-config-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetAuthOrgNetworkConfigV1401Response', 'V1GetAuthOrgNetworkConfigV1401Response']
---

# GetAuthOrgNetworkConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetAuthOrgNetworkConfigV1401Response

`func NewGetAuthOrgNetworkConfigV1401Response() *GetAuthOrgNetworkConfigV1401Response`

NewGetAuthOrgNetworkConfigV1401Response instantiates a new GetAuthOrgNetworkConfigV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAuthOrgNetworkConfigV1401ResponseWithDefaults

`func NewGetAuthOrgNetworkConfigV1401ResponseWithDefaults() *GetAuthOrgNetworkConfigV1401Response`

NewGetAuthOrgNetworkConfigV1401ResponseWithDefaults instantiates a new GetAuthOrgNetworkConfigV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetAuthOrgNetworkConfigV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetAuthOrgNetworkConfigV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetAuthOrgNetworkConfigV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetAuthOrgNetworkConfigV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetAuthOrgNetworkConfigV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetAuthOrgNetworkConfigV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

