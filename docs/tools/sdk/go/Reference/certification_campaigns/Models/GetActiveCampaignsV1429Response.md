---
id: v1-get-active-campaigns-v1429-response
title: GetActiveCampaignsV1429Response
pagination_label: GetActiveCampaignsV1429Response
sidebar_label: GetActiveCampaignsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetActiveCampaignsV1429Response', 'V1GetActiveCampaignsV1429Response'] 
slug: /tools/sdk/go/certificationcampaigns/models/get-active-campaigns-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetActiveCampaignsV1429Response', 'V1GetActiveCampaignsV1429Response']
---

# GetActiveCampaignsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetActiveCampaignsV1429Response

`func NewGetActiveCampaignsV1429Response() *GetActiveCampaignsV1429Response`

NewGetActiveCampaignsV1429Response instantiates a new GetActiveCampaignsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetActiveCampaignsV1429ResponseWithDefaults

`func NewGetActiveCampaignsV1429ResponseWithDefaults() *GetActiveCampaignsV1429Response`

NewGetActiveCampaignsV1429ResponseWithDefaults instantiates a new GetActiveCampaignsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetActiveCampaignsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetActiveCampaignsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetActiveCampaignsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetActiveCampaignsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetActiveCampaignsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetActiveCampaignsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

