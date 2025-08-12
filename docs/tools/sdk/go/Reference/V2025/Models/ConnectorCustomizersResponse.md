---
id: v2025-connector-customizers-response
title: ConnectorCustomizersResponse
pagination_label: ConnectorCustomizersResponse
sidebar_label: ConnectorCustomizersResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorCustomizersResponse', 'V2025ConnectorCustomizersResponse'] 
slug: /tools/sdk/go/v2025/models/connector-customizers-response
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizersResponse', 'V2025ConnectorCustomizersResponse']
---

# ConnectorCustomizersResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Connector customizer ID. | [optional] [readonly] 
**Name** | Pointer to **string** | Connector customizer name. | [optional] 
**ImageVersion** | Pointer to **int64** | Connector customizer image version. | [optional] 
**ImageID** | Pointer to **string** | Connector customizer image id. | [optional] 
**TenantID** | Pointer to **string** | Connector customizer tenant id. | [optional] 
**Created** | Pointer to **SailPointTime** | Date-time when the connector customizer was created | [optional] 

## Methods

### NewConnectorCustomizersResponse

`func NewConnectorCustomizersResponse() *ConnectorCustomizersResponse`

NewConnectorCustomizersResponse instantiates a new ConnectorCustomizersResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorCustomizersResponseWithDefaults

`func NewConnectorCustomizersResponseWithDefaults() *ConnectorCustomizersResponse`

NewConnectorCustomizersResponseWithDefaults instantiates a new ConnectorCustomizersResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ConnectorCustomizersResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ConnectorCustomizersResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ConnectorCustomizersResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ConnectorCustomizersResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ConnectorCustomizersResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConnectorCustomizersResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConnectorCustomizersResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ConnectorCustomizersResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetImageVersion

`func (o *ConnectorCustomizersResponse) GetImageVersion() int64`

GetImageVersion returns the ImageVersion field if non-nil, zero value otherwise.

### GetImageVersionOk

`func (o *ConnectorCustomizersResponse) GetImageVersionOk() (*int64, bool)`

GetImageVersionOk returns a tuple with the ImageVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageVersion

`func (o *ConnectorCustomizersResponse) SetImageVersion(v int64)`

SetImageVersion sets ImageVersion field to given value.

### HasImageVersion

`func (o *ConnectorCustomizersResponse) HasImageVersion() bool`

HasImageVersion returns a boolean if a field has been set.

### GetImageID

`func (o *ConnectorCustomizersResponse) GetImageID() string`

GetImageID returns the ImageID field if non-nil, zero value otherwise.

### GetImageIDOk

`func (o *ConnectorCustomizersResponse) GetImageIDOk() (*string, bool)`

GetImageIDOk returns a tuple with the ImageID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageID

`func (o *ConnectorCustomizersResponse) SetImageID(v string)`

SetImageID sets ImageID field to given value.

### HasImageID

`func (o *ConnectorCustomizersResponse) HasImageID() bool`

HasImageID returns a boolean if a field has been set.

### GetTenantID

`func (o *ConnectorCustomizersResponse) GetTenantID() string`

GetTenantID returns the TenantID field if non-nil, zero value otherwise.

### GetTenantIDOk

`func (o *ConnectorCustomizersResponse) GetTenantIDOk() (*string, bool)`

GetTenantIDOk returns a tuple with the TenantID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantID

`func (o *ConnectorCustomizersResponse) SetTenantID(v string)`

SetTenantID sets TenantID field to given value.

### HasTenantID

`func (o *ConnectorCustomizersResponse) HasTenantID() bool`

HasTenantID returns a boolean if a field has been set.

### GetCreated

`func (o *ConnectorCustomizersResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ConnectorCustomizersResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ConnectorCustomizersResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *ConnectorCustomizersResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


