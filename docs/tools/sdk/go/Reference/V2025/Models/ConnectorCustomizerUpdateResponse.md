---
id: connector-customizer-update-response
title: ConnectorCustomizerUpdateResponse
pagination_label: ConnectorCustomizerUpdateResponse
sidebar_label: ConnectorCustomizerUpdateResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorCustomizerUpdateResponse', 'ConnectorCustomizerUpdateResponse'] 
slug: /tools/sdk/go//models/connector-customizer-update-response
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizerUpdateResponse', 'ConnectorCustomizerUpdateResponse']
---

# ConnectorCustomizerUpdateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the ID of connector customizer. | [optional] 
**Name** | Pointer to **string** | name of the connector customizer. | [optional] 
**TenantID** | Pointer to **string** | Connector customizer tenant id. | [optional] 
**Created** | Pointer to **SailPointTime** | Date-time when the connector customizer was created. | [optional] 
**ImageVersion** | Pointer to **int64** | Connector customizer image version. | [optional] 
**ImageID** | Pointer to **string** | Connector customizer image id. | [optional] 

## Methods

### NewConnectorCustomizerUpdateResponse

`func NewConnectorCustomizerUpdateResponse() *ConnectorCustomizerUpdateResponse`

NewConnectorCustomizerUpdateResponse instantiates a new ConnectorCustomizerUpdateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorCustomizerUpdateResponseWithDefaults

`func NewConnectorCustomizerUpdateResponseWithDefaults() *ConnectorCustomizerUpdateResponse`

NewConnectorCustomizerUpdateResponseWithDefaults instantiates a new ConnectorCustomizerUpdateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ConnectorCustomizerUpdateResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ConnectorCustomizerUpdateResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ConnectorCustomizerUpdateResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ConnectorCustomizerUpdateResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ConnectorCustomizerUpdateResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConnectorCustomizerUpdateResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConnectorCustomizerUpdateResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ConnectorCustomizerUpdateResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetTenantID

`func (o *ConnectorCustomizerUpdateResponse) GetTenantID() string`

GetTenantID returns the TenantID field if non-nil, zero value otherwise.

### GetTenantIDOk

`func (o *ConnectorCustomizerUpdateResponse) GetTenantIDOk() (*string, bool)`

GetTenantIDOk returns a tuple with the TenantID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantID

`func (o *ConnectorCustomizerUpdateResponse) SetTenantID(v string)`

SetTenantID sets TenantID field to given value.

### HasTenantID

`func (o *ConnectorCustomizerUpdateResponse) HasTenantID() bool`

HasTenantID returns a boolean if a field has been set.

### GetCreated

`func (o *ConnectorCustomizerUpdateResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ConnectorCustomizerUpdateResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ConnectorCustomizerUpdateResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *ConnectorCustomizerUpdateResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetImageVersion

`func (o *ConnectorCustomizerUpdateResponse) GetImageVersion() int64`

GetImageVersion returns the ImageVersion field if non-nil, zero value otherwise.

### GetImageVersionOk

`func (o *ConnectorCustomizerUpdateResponse) GetImageVersionOk() (*int64, bool)`

GetImageVersionOk returns a tuple with the ImageVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageVersion

`func (o *ConnectorCustomizerUpdateResponse) SetImageVersion(v int64)`

SetImageVersion sets ImageVersion field to given value.

### HasImageVersion

`func (o *ConnectorCustomizerUpdateResponse) HasImageVersion() bool`

HasImageVersion returns a boolean if a field has been set.

### GetImageID

`func (o *ConnectorCustomizerUpdateResponse) GetImageID() string`

GetImageID returns the ImageID field if non-nil, zero value otherwise.

### GetImageIDOk

`func (o *ConnectorCustomizerUpdateResponse) GetImageIDOk() (*string, bool)`

GetImageIDOk returns a tuple with the ImageID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageID

`func (o *ConnectorCustomizerUpdateResponse) SetImageID(v string)`

SetImageID sets ImageID field to given value.

### HasImageID

`func (o *ConnectorCustomizerUpdateResponse) HasImageID() bool`

HasImageID returns a boolean if a field has been set.


