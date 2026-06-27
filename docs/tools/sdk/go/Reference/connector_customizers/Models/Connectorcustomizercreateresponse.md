---
id: v1-connectorcustomizercreateresponse
title: Connectorcustomizercreateresponse
pagination_label: Connectorcustomizercreateresponse
sidebar_label: Connectorcustomizercreateresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Connectorcustomizercreateresponse', 'V1Connectorcustomizercreateresponse'] 
slug: /tools/sdk/go/connectorcustomizers/models/connectorcustomizercreateresponse
tags: ['SDK', 'Software Development Kit', 'Connectorcustomizercreateresponse', 'V1Connectorcustomizercreateresponse']
---

# Connectorcustomizercreateresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the ID of connector customizer. | [optional] 
**Name** | Pointer to **string** | name of the connector customizer. | [optional] 
**TenantID** | Pointer to **string** | Connector customizer tenant id. | [optional] 
**Created** | Pointer to **SailPointTime** | Date-time when the connector customizer was created. | [optional] 

## Methods

### NewConnectorcustomizercreateresponse

`func NewConnectorcustomizercreateresponse() *Connectorcustomizercreateresponse`

NewConnectorcustomizercreateresponse instantiates a new Connectorcustomizercreateresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorcustomizercreateresponseWithDefaults

`func NewConnectorcustomizercreateresponseWithDefaults() *Connectorcustomizercreateresponse`

NewConnectorcustomizercreateresponseWithDefaults instantiates a new Connectorcustomizercreateresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Connectorcustomizercreateresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Connectorcustomizercreateresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Connectorcustomizercreateresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Connectorcustomizercreateresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Connectorcustomizercreateresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Connectorcustomizercreateresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Connectorcustomizercreateresponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Connectorcustomizercreateresponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetTenantID

`func (o *Connectorcustomizercreateresponse) GetTenantID() string`

GetTenantID returns the TenantID field if non-nil, zero value otherwise.

### GetTenantIDOk

`func (o *Connectorcustomizercreateresponse) GetTenantIDOk() (*string, bool)`

GetTenantIDOk returns a tuple with the TenantID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantID

`func (o *Connectorcustomizercreateresponse) SetTenantID(v string)`

SetTenantID sets TenantID field to given value.

### HasTenantID

`func (o *Connectorcustomizercreateresponse) HasTenantID() bool`

HasTenantID returns a boolean if a field has been set.

### GetCreated

`func (o *Connectorcustomizercreateresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Connectorcustomizercreateresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Connectorcustomizercreateresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Connectorcustomizercreateresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


