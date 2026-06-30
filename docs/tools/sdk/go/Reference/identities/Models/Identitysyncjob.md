---
id: v1-identitysyncjob
title: Identitysyncjob
pagination_label: Identitysyncjob
sidebar_label: Identitysyncjob
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identitysyncjob', 'V1Identitysyncjob'] 
slug: /tools/sdk/go/identities/models/identitysyncjob
tags: ['SDK', 'Software Development Kit', 'Identitysyncjob', 'V1Identitysyncjob']
---

# Identitysyncjob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Job ID. | 
**Status** | **string** | The job status. | 
**Payload** | [**Identitysyncpayload**](identitysyncpayload) |  | 

## Methods

### NewIdentitysyncjob

`func NewIdentitysyncjob(id string, status string, payload Identitysyncpayload, ) *Identitysyncjob`

NewIdentitysyncjob instantiates a new Identitysyncjob object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitysyncjobWithDefaults

`func NewIdentitysyncjobWithDefaults() *Identitysyncjob`

NewIdentitysyncjobWithDefaults instantiates a new Identitysyncjob object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Identitysyncjob) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Identitysyncjob) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Identitysyncjob) SetId(v string)`

SetId sets Id field to given value.


### GetStatus

`func (o *Identitysyncjob) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Identitysyncjob) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Identitysyncjob) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetPayload

`func (o *Identitysyncjob) GetPayload() Identitysyncpayload`

GetPayload returns the Payload field if non-nil, zero value otherwise.

### GetPayloadOk

`func (o *Identitysyncjob) GetPayloadOk() (*Identitysyncpayload, bool)`

GetPayloadOk returns a tuple with the Payload field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayload

`func (o *Identitysyncjob) SetPayload(v Identitysyncpayload)`

SetPayload sets Payload field to given value.



