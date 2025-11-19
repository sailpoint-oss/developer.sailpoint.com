---
id: v2024-connector-customizer-version-create-response
title: ConnectorCustomizerVersionCreateResponse
pagination_label: ConnectorCustomizerVersionCreateResponse
sidebar_label: ConnectorCustomizerVersionCreateResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorCustomizerVersionCreateResponse', 'V2024ConnectorCustomizerVersionCreateResponse'] 
slug: /tools/sdk/go/v2024/models/connector-customizer-version-create-response
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizerVersionCreateResponse', 'V2024ConnectorCustomizerVersionCreateResponse']
---

# ConnectorCustomizerVersionCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomizerID** | Pointer to **string** | ID of connector customizer. | [optional] 
**ImageID** | Pointer to **string** | ImageID of the connector customizer. | [optional] 
**Version** | Pointer to **int64** | Image version of the connector customizer. | [optional] 
**Created** | Pointer to **SailPointTime** | Date-time when the connector customizer version was created. | [optional] 

## Methods

### NewConnectorCustomizerVersionCreateResponse

`func NewConnectorCustomizerVersionCreateResponse() *ConnectorCustomizerVersionCreateResponse`

NewConnectorCustomizerVersionCreateResponse instantiates a new ConnectorCustomizerVersionCreateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorCustomizerVersionCreateResponseWithDefaults

`func NewConnectorCustomizerVersionCreateResponseWithDefaults() *ConnectorCustomizerVersionCreateResponse`

NewConnectorCustomizerVersionCreateResponseWithDefaults instantiates a new ConnectorCustomizerVersionCreateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomizerID

`func (o *ConnectorCustomizerVersionCreateResponse) GetCustomizerID() string`

GetCustomizerID returns the CustomizerID field if non-nil, zero value otherwise.

### GetCustomizerIDOk

`func (o *ConnectorCustomizerVersionCreateResponse) GetCustomizerIDOk() (*string, bool)`

GetCustomizerIDOk returns a tuple with the CustomizerID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomizerID

`func (o *ConnectorCustomizerVersionCreateResponse) SetCustomizerID(v string)`

SetCustomizerID sets CustomizerID field to given value.

### HasCustomizerID

`func (o *ConnectorCustomizerVersionCreateResponse) HasCustomizerID() bool`

HasCustomizerID returns a boolean if a field has been set.

### GetImageID

`func (o *ConnectorCustomizerVersionCreateResponse) GetImageID() string`

GetImageID returns the ImageID field if non-nil, zero value otherwise.

### GetImageIDOk

`func (o *ConnectorCustomizerVersionCreateResponse) GetImageIDOk() (*string, bool)`

GetImageIDOk returns a tuple with the ImageID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageID

`func (o *ConnectorCustomizerVersionCreateResponse) SetImageID(v string)`

SetImageID sets ImageID field to given value.

### HasImageID

`func (o *ConnectorCustomizerVersionCreateResponse) HasImageID() bool`

HasImageID returns a boolean if a field has been set.

### GetVersion

`func (o *ConnectorCustomizerVersionCreateResponse) GetVersion() int64`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ConnectorCustomizerVersionCreateResponse) GetVersionOk() (*int64, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ConnectorCustomizerVersionCreateResponse) SetVersion(v int64)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *ConnectorCustomizerVersionCreateResponse) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetCreated

`func (o *ConnectorCustomizerVersionCreateResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ConnectorCustomizerVersionCreateResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ConnectorCustomizerVersionCreateResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *ConnectorCustomizerVersionCreateResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


