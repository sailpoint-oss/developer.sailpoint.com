---
id: v2025-send-classify-machine-account200-response
title: SendClassifyMachineAccount200Response
pagination_label: SendClassifyMachineAccount200Response
sidebar_label: SendClassifyMachineAccount200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SendClassifyMachineAccount200Response', 'V2025SendClassifyMachineAccount200Response'] 
slug: /tools/sdk/go/v2025/models/send-classify-machine-account200-response
tags: ['SDK', 'Software Development Kit', 'SendClassifyMachineAccount200Response', 'V2025SendClassifyMachineAccount200Response']
---

# SendClassifyMachineAccount200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsMachine** | Pointer to **bool** | Indicates if account is classified as machine | [optional] [default to false]

## Methods

### NewSendClassifyMachineAccount200Response

`func NewSendClassifyMachineAccount200Response() *SendClassifyMachineAccount200Response`

NewSendClassifyMachineAccount200Response instantiates a new SendClassifyMachineAccount200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendClassifyMachineAccount200ResponseWithDefaults

`func NewSendClassifyMachineAccount200ResponseWithDefaults() *SendClassifyMachineAccount200Response`

NewSendClassifyMachineAccount200ResponseWithDefaults instantiates a new SendClassifyMachineAccount200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsMachine

`func (o *SendClassifyMachineAccount200Response) GetIsMachine() bool`

GetIsMachine returns the IsMachine field if non-nil, zero value otherwise.

### GetIsMachineOk

`func (o *SendClassifyMachineAccount200Response) GetIsMachineOk() (*bool, bool)`

GetIsMachineOk returns a tuple with the IsMachine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsMachine

`func (o *SendClassifyMachineAccount200Response) SetIsMachine(v bool)`

SetIsMachine sets IsMachine field to given value.

### HasIsMachine

`func (o *SendClassifyMachineAccount200Response) HasIsMachine() bool`

HasIsMachine returns a boolean if a field has been set.


