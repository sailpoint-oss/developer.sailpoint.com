---
id: v1-v3createconnectordto
title: V3createconnectordto
pagination_label: V3createconnectordto
sidebar_label: V3createconnectordto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'V3createconnectordto', 'V1V3createconnectordto'] 
slug: /tools/sdk/go/connectors/models/v3createconnectordto
tags: ['SDK', 'Software Development Kit', 'V3createconnectordto', 'V1V3createconnectordto']
---

# V3createconnectordto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The connector name. Need to be unique per tenant. The name will able be used to derive a url friendly unique scriptname that will be in response. Script name can then be used for all update endpoints | 
**Type** | Pointer to **string** | The connector type. If not specified will be defaulted to 'custom '+name | [optional] 
**ClassName** | **string** | The connector class name. If you are implementing openconnector standard (what is recommended), then this need to be set to sailpoint.connector.OpenConnectorAdapter | 
**DirectConnect** | Pointer to **bool** | true if the source is a direct connect source | [optional] [default to true]
**Status** | Pointer to **string** | The connector status | [optional] 

## Methods

### NewV3createconnectordto

`func NewV3createconnectordto(name string, className string, ) *V3createconnectordto`

NewV3createconnectordto instantiates a new V3createconnectordto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV3createconnectordtoWithDefaults

`func NewV3createconnectordtoWithDefaults() *V3createconnectordto`

NewV3createconnectordtoWithDefaults instantiates a new V3createconnectordto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *V3createconnectordto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *V3createconnectordto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *V3createconnectordto) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *V3createconnectordto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *V3createconnectordto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *V3createconnectordto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *V3createconnectordto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetClassName

`func (o *V3createconnectordto) GetClassName() string`

GetClassName returns the ClassName field if non-nil, zero value otherwise.

### GetClassNameOk

`func (o *V3createconnectordto) GetClassNameOk() (*string, bool)`

GetClassNameOk returns a tuple with the ClassName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassName

`func (o *V3createconnectordto) SetClassName(v string)`

SetClassName sets ClassName field to given value.


### GetDirectConnect

`func (o *V3createconnectordto) GetDirectConnect() bool`

GetDirectConnect returns the DirectConnect field if non-nil, zero value otherwise.

### GetDirectConnectOk

`func (o *V3createconnectordto) GetDirectConnectOk() (*bool, bool)`

GetDirectConnectOk returns a tuple with the DirectConnect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectConnect

`func (o *V3createconnectordto) SetDirectConnect(v bool)`

SetDirectConnect sets DirectConnect field to given value.

### HasDirectConnect

`func (o *V3createconnectordto) HasDirectConnect() bool`

HasDirectConnect returns a boolean if a field has been set.

### GetStatus

`func (o *V3createconnectordto) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *V3createconnectordto) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *V3createconnectordto) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *V3createconnectordto) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


