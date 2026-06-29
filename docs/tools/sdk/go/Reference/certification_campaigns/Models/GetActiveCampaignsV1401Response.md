---
id: v1-get-active-campaigns-v1401-response
title: GetActiveCampaignsV1401Response
pagination_label: GetActiveCampaignsV1401Response
sidebar_label: GetActiveCampaignsV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetActiveCampaignsV1401Response', 'V1GetActiveCampaignsV1401Response'] 
slug: /tools/sdk/go/certificationcampaigns/models/get-active-campaigns-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetActiveCampaignsV1401Response', 'V1GetActiveCampaignsV1401Response']
---

# GetActiveCampaignsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetActiveCampaignsV1401Response

`func NewGetActiveCampaignsV1401Response() *GetActiveCampaignsV1401Response`

NewGetActiveCampaignsV1401Response instantiates a new GetActiveCampaignsV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetActiveCampaignsV1401ResponseWithDefaults

`func NewGetActiveCampaignsV1401ResponseWithDefaults() *GetActiveCampaignsV1401Response`

NewGetActiveCampaignsV1401ResponseWithDefaults instantiates a new GetActiveCampaignsV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetActiveCampaignsV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetActiveCampaignsV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetActiveCampaignsV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetActiveCampaignsV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetActiveCampaignsV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetActiveCampaignsV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

