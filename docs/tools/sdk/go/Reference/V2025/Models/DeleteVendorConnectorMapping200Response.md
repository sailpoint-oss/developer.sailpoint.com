---
id: v2025-delete-vendor-connector-mapping200-response
title: DeleteVendorConnectorMapping200Response
pagination_label: DeleteVendorConnectorMapping200Response
sidebar_label: DeleteVendorConnectorMapping200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DeleteVendorConnectorMapping200Response', 'V2025DeleteVendorConnectorMapping200Response'] 
slug: /tools/sdk/go/v2025/models/delete-vendor-connector-mapping200-response
tags: ['SDK', 'Software Development Kit', 'DeleteVendorConnectorMapping200Response', 'V2025DeleteVendorConnectorMapping200Response']
---

# DeleteVendorConnectorMapping200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | The number of vendor connector mappings successfully deleted. | [optional] 

## Methods

### NewDeleteVendorConnectorMapping200Response

`func NewDeleteVendorConnectorMapping200Response() *DeleteVendorConnectorMapping200Response`

NewDeleteVendorConnectorMapping200Response instantiates a new DeleteVendorConnectorMapping200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteVendorConnectorMapping200ResponseWithDefaults

`func NewDeleteVendorConnectorMapping200ResponseWithDefaults() *DeleteVendorConnectorMapping200Response`

NewDeleteVendorConnectorMapping200ResponseWithDefaults instantiates a new DeleteVendorConnectorMapping200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *DeleteVendorConnectorMapping200Response) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *DeleteVendorConnectorMapping200Response) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *DeleteVendorConnectorMapping200Response) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *DeleteVendorConnectorMapping200Response) HasCount() bool`

HasCount returns a boolean if a field has been set.


