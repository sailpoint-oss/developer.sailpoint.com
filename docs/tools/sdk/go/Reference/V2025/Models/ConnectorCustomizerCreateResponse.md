---
id: v2025-connector-customizer-create-response
title: ConnectorCustomizerCreateResponse
pagination_label: ConnectorCustomizerCreateResponse
sidebar_label: ConnectorCustomizerCreateResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorCustomizerCreateResponse', 'V2025ConnectorCustomizerCreateResponse'] 
slug: /tools/sdk/go/v2025/models/connector-customizer-create-response
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizerCreateResponse', 'V2025ConnectorCustomizerCreateResponse']
---

# ConnectorCustomizerCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the ID of connector customizer. | [optional] 
**Name** | Pointer to **string** | name of the connector customizer. | [optional] 
**TenantID** | Pointer to **string** | Connector customizer tenant id. | [optional] 
**Created** | Pointer to **SailPointTime** | Date-time when the connector customizer was created. | [optional] 

## Methods

### NewConnectorCustomizerCreateResponse

`func NewConnectorCustomizerCreateResponse() *ConnectorCustomizerCreateResponse`

NewConnectorCustomizerCreateResponse instantiates a new ConnectorCustomizerCreateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorCustomizerCreateResponseWithDefaults

`func NewConnectorCustomizerCreateResponseWithDefaults() *ConnectorCustomizerCreateResponse`

NewConnectorCustomizerCreateResponseWithDefaults instantiates a new ConnectorCustomizerCreateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ConnectorCustomizerCreateResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ConnectorCustomizerCreateResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ConnectorCustomizerCreateResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ConnectorCustomizerCreateResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ConnectorCustomizerCreateResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConnectorCustomizerCreateResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConnectorCustomizerCreateResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ConnectorCustomizerCreateResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetTenantID

`func (o *ConnectorCustomizerCreateResponse) GetTenantID() string`

GetTenantID returns the TenantID field if non-nil, zero value otherwise.

### GetTenantIDOk

`func (o *ConnectorCustomizerCreateResponse) GetTenantIDOk() (*string, bool)`

GetTenantIDOk returns a tuple with the TenantID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantID

`func (o *ConnectorCustomizerCreateResponse) SetTenantID(v string)`

SetTenantID sets TenantID field to given value.

### HasTenantID

`func (o *ConnectorCustomizerCreateResponse) HasTenantID() bool`

HasTenantID returns a boolean if a field has been set.

### GetCreated

`func (o *ConnectorCustomizerCreateResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ConnectorCustomizerCreateResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ConnectorCustomizerCreateResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *ConnectorCustomizerCreateResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


